import { NextFunction, Request, Response } from "express";
import { JWTAdapter } from "../../config";
import { UserModel } from "../../data";
import { UserMapper } from "../../infrastructure";



export class ValidateTokenMiddelware {

    static async validateJWT(req: Request, res: Response, next: NextFunction) {
        const authorization = req.header('Authorization')
        if (!authorization) return res.status(401).json({ error: 'No token provided!' })
        if (!authorization.startsWith('Bearer ')) return res.status(401).json({ error: 'Invalid Bearer Token' })

        const token = authorization.split(' ').at(-1) || ''

        try {
            const payload = await JWTAdapter.validateJWT(token) as { id: string }
            if (!payload) return res.status(401).json('Invalid token')

            const user = await UserModel.findById(payload.id)
            if (!user) return res.status(401).json('Invalid token - user')

            const userMapped = UserMapper.userEntityFromObject(user)
            req.body.user = userMapped

            next()

        } catch (error) {
            res.status(500).json({ messg: 'Internal server error' })
        }
    }
}
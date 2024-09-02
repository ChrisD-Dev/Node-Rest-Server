import jwt from "jsonwebtoken"
import { envs } from "./env.adapter"

export class JWTAdapter {

    // Generar JWT
    static async generateJWT(payload: Object, duration: string = "2h"): Promise<string | null> {
        return new Promise((resolve) => {
            jwt.sign(payload, envs.JWT_SEED, { expiresIn: duration }, (error, token) => {
                if (error) return resolve(null);

                return resolve(token!)
            })
        })
    }

    // Validar JWT 
    static async validateJWT(token: string) {
        return new Promise((resolve) => {
            jwt.verify(token, envs.JWT_SEED, (error, decoded) => {
                if (error) return resolve(null)

                return resolve(decoded)
            })
        })
    }
}
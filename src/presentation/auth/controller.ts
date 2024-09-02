import { Request, Response } from "express";
import { AuthRepository, CustomError, LoginUserDTO, LoginUserUseCase, RegisterUserDTO, RegisterUserUseCase } from "../../domain"


export class AuthController {
    constructor(
        private readonly authRepository: AuthRepository
    ) { }

    private handleError = (error: unknown, res: Response) => {
        if (error instanceof CustomError) {
            return res.status(error.status).json({ error: error.message })
        }

        return res.status(500).json({ error: 'Interal Server Error' })
    }

    registerUser = (req: Request, res: Response) => {
        const [error, registerUserDTO] = RegisterUserDTO.create(req.body)

        if (error) return res.status(400).json({ error })

        new RegisterUserUseCase(this.authRepository).execute(registerUserDTO!)
            .then(async (finalUser) => res.json(finalUser))
            .catch((error) => this.handleError(error, res))
    }


    loginUser = (req: Request, res: Response) => {
        const [error, loginUserDto] = LoginUserDTO.create(req.body)

        if (error) return res.status(400).json({ error })

        new LoginUserUseCase(this.authRepository).execute(loginUserDto!)
            .then(async (user) => res.json(user))
            .catch(error => this.handleError(error, res))
    }


}
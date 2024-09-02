import { AuthRepository, CustomError, LoginUserDTO } from "../.."
import { JWTAdapter } from "../../../config"


interface UserToken {
    token: string,
    user: {
        name: string,
        email: string
    }
}

type SignToken = (payload: Object, duration?: string) => Promise<string | null>

export class LoginUserUseCase {
    constructor(
        private readonly authRepository: AuthRepository,
        private readonly signToken: SignToken = JWTAdapter.generateJWT
    ) { }

    public async execute(loginUserDTO: LoginUserDTO): Promise<UserToken> {

        const user = await this.authRepository.login(loginUserDTO)

        // Generacion de JWT
        const JWT = await this.signToken({ id: user.id, email: user.email })
        if (!JWT) throw CustomError.badRequest('Problem generating token')

        return {
            token: JWT,
            user: {
                name: user.name,
                email: user.email
            }
        }
    }
}
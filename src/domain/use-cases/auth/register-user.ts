import { AuthRepository, CustomError, RegisterUserDTO } from "../.."
import { JWTAdapter } from "../../../config"


interface User {
    id: string,
    name: string,
    email: string
}

type SignToken = (payload: Object, duration?: string) => Promise<string | null>


export class RegisterUserUseCase {

    // CONSTRUCTOR
    constructor(
        private readonly authRepository: AuthRepository,
        private readonly signToken: SignToken = JWTAdapter.generateJWT
    ) { }

    // FUNCION PRINCIPAL
    public async execute(registerUserDTO: RegisterUserDTO): Promise<User> {
        const user = await this.authRepository.register(registerUserDTO)

        const token = await this.signToken({ id: user.id, email: user.email })
        if (!token) throw CustomError.badRequest('Problem generating token')

        return {
            id: user.id,
            name: user.name,
            email: user.email
        }
    }
}
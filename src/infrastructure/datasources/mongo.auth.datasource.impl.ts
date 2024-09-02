import { UserMapper } from ".."
import { BcryptAdapter, JWTAdapter } from "../../config"
import { UserModel } from "../../data"
import { AuthDatasource, CustomError, LoginUserDTO, RegisterUserDTO, UserEntity } from "../../domain"


export class AuthDatasourceImplementation extends AuthDatasource {


    async validateEmail(token: string): Promise<boolean> {
        try {
            const payload = await JWTAdapter.validateJWT(token)
            if (!payload) throw CustomError.unathorized('Invalid token')

            const { id, email } = payload as { id: string, email: string }
            if (!id) throw CustomError.badRequest('Email not in token')

            const user = await UserModel.findOne({ email })
            if (!user) throw CustomError.badRequest('User does not exist')

            user.emailValidated = true
            user.save()

            return true

        } catch (error) {
            if (error instanceof CustomError) {
                throw error
            }
            throw CustomError.internalServer()
        }
    }

    // Logear Usuario
    async login(loginUserDTO: LoginUserDTO): Promise<UserEntity> {
        const { email, password } = loginUserDTO

        try {
            const user = await UserModel.findOne({ email })
            if (!user) throw CustomError.badRequest('User does not exist!')

            const matchPasswords = BcryptAdapter.decrypt(password, user.password)
            if (!matchPasswords) throw CustomError.badRequest('Password incorrect!')

            return UserMapper.userEntityFromObject(user)

        } catch (error) {
            if (error instanceof CustomError) {
                throw error
            }
            throw CustomError.internalServer()
        }
    }

    // Registar Usuario
    async register(registerUserDTO: RegisterUserDTO): Promise<UserEntity> {
        const { name, password, email } = registerUserDTO
        try {

            const user_exist = await UserModel.findOne({ email })
            if (user_exist) throw CustomError.badRequest('User already exists!')

            const encrypted_password = BcryptAdapter.hash(password)

            const new_user = await UserModel.create({
                name,
                email,
                password: encrypted_password
            })

            new_user.save()

            return UserMapper.userEntityFromObject(new_user)

        } catch (error) {
            if (error instanceof CustomError) {
                throw error
            }
            throw CustomError.internalServer()
        }
    }

}
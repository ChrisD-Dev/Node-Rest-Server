import { LoginUserDTO, RegisterUserDTO, UserEntity } from "..";


export abstract class AuthRepository {

    abstract login(loginUserDTO: LoginUserDTO): Promise<UserEntity>

    abstract register(registerUserDTO: RegisterUserDTO): Promise<UserEntity>

    abstract validateEmail(token: string): Promise<boolean>


}
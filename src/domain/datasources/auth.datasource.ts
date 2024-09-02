import { LoginUserDTO, RegisterUserDTO, UserEntity } from "..";



export abstract class AuthDatasource {

    abstract login(loginUserDTO: LoginUserDTO): Promise<UserEntity>

    abstract register(registerUserDTO: RegisterUserDTO): Promise<UserEntity>

    abstract validateEmail(toke: string): Promise<boolean>
}


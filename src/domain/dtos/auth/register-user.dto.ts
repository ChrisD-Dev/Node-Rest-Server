import { Validators } from "../../../config"


export class RegisterUserDTO {


    private constructor(
        public name: string,
        public email: string,
        public password: string,
        public roles?: string[]
    ) { }

    static create(props: { [key: string]: any }): [string?, RegisterUserDTO?] {

        const { name, email, password, roles } = props

        if (!name) return ['name is missing']
        if (!email) return ['email is missing']
        if (!Validators.email.test(email)) return ['email not valid']
        if (!password) return ['password is missing']
        if (!Validators.password.test(password)) return ["password no válida. Debe contener 8 caracteres, 1 letra mayusc, 1 letra minusc, 1 dígito, 1 caracter especial"]



        return [undefined, new RegisterUserDTO(name, email, password, roles)]
    }
}
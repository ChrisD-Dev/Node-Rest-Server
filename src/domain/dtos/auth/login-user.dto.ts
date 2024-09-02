import { Validators } from "../../../config"



export class LoginUserDTO {

    private constructor(
        public email: string,
        public password: string
    ) { }

    static create(props: { [key: string]: any }): [string?, LoginUserDTO?] {

        const { email, password } = props

        // Comprobaciones de que la info mandada cumple con los requisistos
        if (!email) return ['Email missing']
        if (!password) return ['Passsword missing']
        if (!Validators.email.test(email)) return ['Email is not valid']

        return [undefined, new LoginUserDTO(email, password)]
    }
}
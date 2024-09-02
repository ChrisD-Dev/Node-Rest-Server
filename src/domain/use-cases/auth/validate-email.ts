import { AuthRepository } from "../.."


export class ValidateEmail {
    constructor(
        private readonly authRepository: AuthRepository,
    ) { }

    public async execute(token: string): Promise<boolean> {
        const validated = await this.authRepository.validateEmail(token)
        return validated
    }
}
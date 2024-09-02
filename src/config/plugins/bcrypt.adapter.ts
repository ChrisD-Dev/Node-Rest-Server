
import { compareSync, genSaltSync, hashSync } from "bcryptjs"


export class BcryptAdapter {

    static hash(password: string): string {
        const salt = genSaltSync()
        return hashSync(password, salt)
    }

    static decrypt(password: string, hashedPassword: string): boolean {
        return compareSync(password, hashedPassword)
    }
}
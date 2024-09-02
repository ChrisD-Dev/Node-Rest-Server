

export class CustomError {
    constructor(
        public readonly status: number,
        public readonly message?: string,
    ) { }

    static badRequest(message: string) {
        throw new CustomError(400, message)
    }

    static unathorized(message: string) {
        return new CustomError(401, message)
    }


    static forbidden(message: string) {
        return new CustomError(403, message)
    }


    static internalServer(message: string = 'Internal Server Error') {
        return new CustomError(500, message)
    }
}
import express, { Router } from "express"

interface Options {
    port: number,
    routes: Router
}

export class Server {

    private app = express()
    private readonly port: number
    private readonly routes: Router

    constructor({ port, routes }: Options) {
        this.port = port
        this.routes = routes
    }

    async start() {

        //Midlewares
        this.app.use(express.json()) // Capturar Body
        this.app.use(express.urlencoded({ extended: true })) // Capturar Body

        // Usar las rutas definidas
        this.app.use(this.routes)

        // Escuchar el Puerto
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`)
        })
    }


}
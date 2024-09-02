import { envs } from "./config/plugins/env.adapter"
import { MongoDB } from "./data/mongoDB/init"
import { AppRoutes } from "./presentation/routes"
import { Server } from "./presentation/server"



(() => {
    main()
})()


async function main() {

    const mongo_url = envs.MONGO_URL
    const mongo_db_name = envs.MONGO_DB_NAME
    const port = envs.PORT
    const routes = AppRoutes.routes


    // INICIALIZAR CONEXION CON LA DB
    await MongoDB.connect({
        dbName: mongo_db_name,
        mongoURL: mongo_url
    })


    // INICIALIZAR SERVER
    const server = new Server({ port, routes })
    server.start()
}
import { Router } from "express";
import { AuthRoutes, ProductRotues } from ".";


export class AppRoutes {



    static get routes(): Router {
        const router = Router()

        // Definimos todas las rutas principales
        router.use('/api/auth', AuthRoutes.routes)

        router.use('/api/products', ProductRotues.routes)

        return router
    }
}
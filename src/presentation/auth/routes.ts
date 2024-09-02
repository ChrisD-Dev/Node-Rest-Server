import { Router } from "express";
import { AuthDatasourceImplementation, AuthRepositoryImpl } from "../../infrastructure";
import { AuthController } from "./controller";


export class AuthRoutes {

    // Hacemos uso de static cuenado no tengamos pensado hacer uso de inyeccion de dependencias
    static get routes(): Router {

        const router = Router()

        const authDatasource = new AuthDatasourceImplementation()
        const authRepository = new AuthRepositoryImpl(authDatasource)
        const authController = new AuthController(authRepository)

        // Definimos los endpoints
        router.post('/login', authController.loginUser)
        router.post('/register', authController.registerUser)

        return router
    }
}
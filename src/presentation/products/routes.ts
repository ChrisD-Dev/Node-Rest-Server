import { Router } from "express";
import { ProductController, ValidateTokenMiddelware } from "..";
import { ProductDatasourceImpl, ProductRepositoryImpl } from "../../infrastructure";




export class ProductRotues {
    static get routes(): Router {
        const router = Router()

        const productDatasource = new ProductDatasourceImpl()
        const productRepository = new ProductRepositoryImpl(productDatasource)
        const productController = new ProductController(productRepository)

        router.get('/get-products', productController.getProducts)
        router.post('/create-product', [ValidateTokenMiddelware.validateJWT], productController.createProduct)
        router.delete('/delete-product', [ValidateTokenMiddelware.validateJWT], productController.deleteProduct)
        router.put('/update-product', [ValidateTokenMiddelware.validateJWT], productController.updateProduct)

        return router
    }
}
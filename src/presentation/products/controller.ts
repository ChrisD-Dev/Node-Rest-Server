import { Request, Response } from "express";
import { CreateProductDTO, GetProductsUseCase, CreateProductUseCase, CustomError, DeleteProductDTO, DeleteProductUseCase, ProductRespository, UpdateProductDTO, UpdateProductUseCase } from "../../domain";




export class ProductController {
    constructor(
        private readonly productRepository: ProductRespository
    ) { }



    private handleError = (error: unknown, res: Response) => {
        if (error instanceof CustomError) {
            return res.status(error.status).json({ error: error.message })
        }

        return res.status(500).json({ error: 'Interal Server Error' })
    }


    getProducts = (req: Request, res: Response) => {
        new GetProductsUseCase(this.productRepository).execute()
            .then(async (products) => res.json(products))
            .catch(error => this.handleError(error, res))
    }

    createProduct = (req: Request, res: Response) => {
        const [error, createProductDTO] = CreateProductDTO.create(req.body)

        if (error) return res.status(400).json({ error })

        const user = req.body.user


        new CreateProductUseCase(this.productRepository).execute(createProductDTO!, user)
            .then(async (product) => res.json(product))
            .catch((error) => this.handleError(error, res))

    }


    deleteProduct = (req: Request, res: Response) => {
        const [error, deleteProductDTO] = DeleteProductDTO.create(req.body)

        if (error) return res.status(400).json({ error })

        const user = req.body.user

        new DeleteProductUseCase(this.productRepository).execute(deleteProductDTO!, user)
            .then(async (mssg) => res.json(mssg))
            .catch(error => this.handleError(error, res))

    }


    updateProduct = (req: Request, res: Response) => {
        const [error, updateProductDTO] = UpdateProductDTO.create(req.body)

        if (error) return res.status(400).json({ error })

        const user = req.body.user

        new UpdateProductUseCase(this.productRepository).execute(updateProductDTO!, user)
            .then(async (user) => res.json(user))
            .catch(error => this.handleError(error, res))
    }
}
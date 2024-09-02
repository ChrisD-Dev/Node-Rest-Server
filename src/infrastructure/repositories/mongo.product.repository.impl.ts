import { CreateProductDTO, DeleteProductDTO, ProductDatasource, ProductEntity, ProductRespository, UpdateProductDTO, UserEntity } from "../../domain";



export class ProductRepositoryImpl implements ProductRespository {

    constructor(
        private readonly productDatasource: ProductDatasource
    ) { }

    getProducts(): Promise<ProductEntity[]> {
        return this.productDatasource.getProducts()
    }


    updateProduct(updateProductDTO: UpdateProductDTO, user: UserEntity): Promise<ProductEntity> {
        return this.productDatasource.updateProduct(updateProductDTO, user)
    }


    deleteProduct(deleteProductDTO: DeleteProductDTO, user: UserEntity): Promise<{ mssg: string; }> {
        return this.productDatasource.deleteProduct(deleteProductDTO, user)
    }


    createProduct(createProduct: CreateProductDTO, user: UserEntity): Promise<ProductEntity> {
        return this.productDatasource.createProduct(createProduct, user)
    }

}
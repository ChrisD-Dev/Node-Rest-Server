import { CreateProductDTO, DeleteProductDTO, ProductEntity, UpdateProductDTO, UserEntity } from "..";



export abstract class ProductDatasource {
    abstract getProducts(): Promise<ProductEntity[]>
    abstract createProduct(createProduct: CreateProductDTO, user: UserEntity): Promise<ProductEntity>
    abstract deleteProduct(deleteProductDTO: DeleteProductDTO, user: UserEntity): Promise<{ mssg: string }>
    abstract updateProduct(updateProductDTO: UpdateProductDTO, user: UserEntity): Promise<ProductEntity>
}
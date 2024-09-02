import { ProductEntity, ProductRespository, UpdateProductDTO, UserEntity } from "../.."




export class UpdateProductUseCase {

    constructor(
        private readonly productRepository: ProductRespository,
    ) { }

    public async execute(updateProductDTO: UpdateProductDTO, user: UserEntity): Promise<ProductEntity> {

        const product = await this.productRepository.updateProduct(updateProductDTO, user)
        return product
    }
}
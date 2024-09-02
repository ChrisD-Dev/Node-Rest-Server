import { CreateProductDTO, ProductEntity, ProductRespository, UserEntity } from "../.."



export class CreateProductUseCase {
    constructor(
        private readonly productRepository: ProductRespository,
    ) { }

    public async execute(createProductDTO: CreateProductDTO, user: UserEntity): Promise<ProductEntity> {
        const product = await this.productRepository.createProduct(createProductDTO, user)
        return product
    }
}
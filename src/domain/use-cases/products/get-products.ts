import { ProductEntity, ProductRespository } from "../.."

export class GetProductsUseCase {
    constructor(
        private readonly productRepository: ProductRespository,
    ) { }

    public async execute(): Promise<ProductEntity[]> {
        return await this.productRepository.getProducts()
    }

}
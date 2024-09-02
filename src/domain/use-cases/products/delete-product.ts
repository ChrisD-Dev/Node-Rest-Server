import { DeleteProductDTO, ProductRespository, UserEntity } from "../.."



export class DeleteProductUseCase {

    constructor(
        private readonly productRepository: ProductRespository,
    ) { }

    public async execute(deleteProductDTO: DeleteProductDTO, user: UserEntity): Promise<{ mssg: string }> {
        const message = await this.productRepository.deleteProduct(deleteProductDTO, user)
        return message
    }
}
import { ProductMapper } from ".."
import { ProductModel } from "../../data"
import { CreateProductDTO, CustomError, DeleteProductDTO, ProductDatasource, ProductEntity, UpdateProductDTO, UserEntity } from "../../domain"





export class ProductDatasourceImpl extends ProductDatasource {


    async getProducts(): Promise<ProductEntity[]> {
        try {
            const products = await ProductModel.find()
            if (!products) throw CustomError.badRequest('There is nor products')

            return products.map(product => ProductMapper.productEntityfromObject(product))
        } catch (error) {
            if (error instanceof CustomError) {
                throw error
            }
            throw CustomError.internalServer()
        }
    }


    async updateProduct(updateProductDTO: UpdateProductDTO, user: UserEntity): Promise<ProductEntity> {
        const { upc, name, price, description, available } = updateProductDTO

        try {
            const adminRole = user.role.find(role => role === "ADMIN_ROLE")

            if (!adminRole) throw CustomError.badRequest('Only Admin can update a product')

            const product = await ProductModel.findOne({ upc })
            if (!product) throw CustomError.badRequest('The product does not exist in the DB')

            if (name) product.name = name
            if (price) product.price = price
            if (description) product.description = description
            if (available) product.available = available
            product.save()

            return ProductMapper.productEntityfromObject(product)


        } catch (error) {
            if (error instanceof CustomError) {
                throw error
            }
            throw CustomError.internalServer()
        }
    }


    async deleteProduct(deleteProductDTO: DeleteProductDTO, user: UserEntity): Promise<{ mssg: string }> {
        const { upc } = deleteProductDTO

        try {
            const adminRole = user.role.find(role => role === "ADMIN_ROLE")

            if (!adminRole) throw CustomError.badRequest('Only Admin can insert new products')

            const product_exist = await ProductModel.findOne({ upc })
            if (!product_exist) throw CustomError.badRequest('The product does not exist in the DB')

            await ProductModel.deleteOne({ upc });


            return {
                mssg: 'Product Deleted'
            }
        } catch (error) {
            if (error instanceof CustomError) {
                throw error
            }
            throw CustomError.internalServer()
        }
    }


    async createProduct(createProductDTO: CreateProductDTO, user: UserEntity): Promise<ProductEntity> {
        const { upc, name, price, available, description } = createProductDTO

        try {

            const adminRole = user.role.find(role => role === "ADMIN_ROLE")

            if (!adminRole) throw CustomError.badRequest('Only Admin can delete products')

            const product_exist = await ProductModel.findOne({ upc })
            if (product_exist) throw CustomError.badRequest('Product already exists')

            const new_product = await ProductModel.create({
                upc, name, available, price, description
            })
            new_product.save()

            return ProductMapper.productEntityfromObject(new_product)

        } catch (error) {
            if (error instanceof CustomError) {
                throw error
            }
            throw CustomError.internalServer()
        }

    }

}
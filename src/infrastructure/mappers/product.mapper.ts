import { ProductEntity } from "../../domain"




export class ProductMapper {
    static productEntityfromObject(object: { [key: string]: any }) {
        const { _id, id, upc, name, price, description, available } = object

        return new ProductEntity(
            _id || id,
            upc,
            name,
            price,
            description,
            available
        )
    }
}
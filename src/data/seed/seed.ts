import { MongoDB, ProductModel, UserModel } from ".."
import { envs } from "../../config"
import { seedData } from "./data"


(async () => {
    await MongoDB.connect({
        dbName: envs.MONGO_DB_NAME,
        mongoURL: envs.MONGO_URL,
    })

    await main()

    await MongoDB.disconnet()
})()


async function main() {


    await Promise.all([
        UserModel.deleteMany(),
        ProductModel.deleteMany()
    ])

    const users = await UserModel.insertMany(seedData.users)

    const products = await ProductModel.insertMany(seedData.products)
}
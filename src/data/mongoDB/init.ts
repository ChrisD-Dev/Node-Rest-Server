import mongoose from "mongoose"

interface ConnectionOptions {
    mongoURL: string,
    dbName: string
}

export class MongoDB {

    static async connect(options: ConnectionOptions) {
        const { dbName, mongoURL } = options

        try {
            await mongoose.connect(mongoURL, { dbName: dbName })
            console.log("MongoDB connected")
        } catch (error) {
            console.log("Mongo connection failed!")
            throw error
        }
    }


    static async disconnet() {

        try {
            await mongoose.disconnect()
            console.log("Seed created!")
        } catch (error) {
            console.log("Mongo disconnection failed!")
            throw error
        }
    }
}
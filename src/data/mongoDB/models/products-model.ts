import mongoose from "mongoose"

const ProductSchema = new mongoose.Schema({
    // Codifgo de barras
    upc: {
        type: String,
        required: [true, 'upc is required']
    },
    name: {
        type: String,
        required: [true, 'name is required'] // Podemos añadir un mensaje en caso de que no especifiquen el name
    },
    available: {
        type: Boolean,
        default: false
    },
    price: {
        type: Number,
        required: [true, 'price is required']
    },
    description: {
        type: String,
    }
})

export const ProductModel = mongoose.model('Product', ProductSchema)
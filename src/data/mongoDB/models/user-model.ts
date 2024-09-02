import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'] // Podemos añadir un mensaje en caso de que no especifiquen el name
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    img: {
        type: String,
    },
    roles: {
        type: [String],
        default: ['USER_ROLE'],
        enum: ['USER_ROLE', 'ADMIN_ROLE'] //Opciones disponibles
    },
    emailValidated: {
        type: Boolean,
        default: false
    }
})

export const UserModel = mongoose.model('User', UserSchema)
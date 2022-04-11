import mongoose from 'mongoose'
import IUser from '../interfaces/user.interface'

const Schema = mongoose.Schema

const UserSchema = new Schema<IUser>({
    username: {
        type: String,
        default: "",
        trim: true,
        required: true
    },
    email: {
        type: String,
        default: "",
        trim: true,
        required: true
    },
    password: {
        type: String,
        default: "",
        trim: true,
        required: true
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

const User: mongoose.Model<IUser> = mongoose.model('User', UserSchema)
export default User
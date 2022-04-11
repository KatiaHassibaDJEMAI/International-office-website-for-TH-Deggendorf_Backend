import mongoose from 'mongoose'
import IRoom from '../interfaces/room.interface'

const Schema = mongoose.Schema

const UserSchema = new Schema<IRoom>({
    room: {
        type: String,
        default: "",
        trim: true,
        required: true
    },
    contact: {
        type: String,
        default: "",
        trim: true,
        required: true
    },
    availabe: {
        type: String,
        default: "",
        trim: true,
        required: true
    },
    from: {
        type: String,
        default: "",
        trim: true,
        required: true
    },
    to: {
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

const Room: mongoose.Model<IRoom> = mongoose.model('Room', UserSchema)
export default Room
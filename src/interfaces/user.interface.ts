import Document from "mongoose"

interface IUser extends Document {
    username: string
    email: string
    password: string
    created_at: Date
    updated_at: Date
}

export default IUser
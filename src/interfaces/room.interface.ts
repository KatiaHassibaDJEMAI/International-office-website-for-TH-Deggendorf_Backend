import Document from "mongoose"

interface IRoom extends Document {
    room: string
    contact: string
    available: string
    from: string
    to: string
    created_at: Date
    updated_at: Date
}

export default IRoom
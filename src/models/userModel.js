import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
    {
        name : String,
        email : String,
        password : String,
        Role : String
    }
)

export default userSchema;
import mongoose from "mongoose";

const {Schema} = mongoose;

const userSchema = Schema({
    firstname: {
        type: String,
        required: true,
    }, 
    lastname: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
})

export default mongoose.model.User || mongoose.model("User", userSchema);
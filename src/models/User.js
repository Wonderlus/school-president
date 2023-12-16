import mongoose from "mongoose";

const {Schema} = mongoose;

const userSchema = new Schema({
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




export default mongoose.models.User || mongoose.model("User", userSchema);
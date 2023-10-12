import mongoose from "mongoose";

const UserSchema = new mongoose.Schema ({
    username:{type:String, required: true},
    email:{type: String, required:true},
    password:{type:String, required:true},
})

export default mongoose.model("Users", UserSchema);
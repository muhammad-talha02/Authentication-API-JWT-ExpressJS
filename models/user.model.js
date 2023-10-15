import mongoose from "mongoose";

const userScheme = new mongoose.Schema({
    name:{type:String, required:true, trim:true},
    email:{type:String, required:true, trim:true},
    password:{type:String, required:true, trim:true},
    tc:{type:Boolean, required:true},
});


const UserModel = mongoose.model("User", userScheme);

export default UserModel;
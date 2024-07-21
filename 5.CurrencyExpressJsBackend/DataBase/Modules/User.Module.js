const mongoose = require("mongoose");
const { CONSTANT_CREATION } = require("../../Util/constance");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{type:String, required: true, minLength:CONSTANT_CREATION.min, maxLength:CONSTANT_CREATION.max, unique:[true, " Username Shoud be unique"],},
    email:{type:String, required: true,min:5, max :55, unique:[true, "Email shoud be Unique"],},
    password:{type:String, required:[true, "password is required Buddy!"], min: 8, },
    phone:{type:Number, min:10, max:10},



},
{timestamps:true}
);

const UserModule = mongoose.model("user",userSchema);

module.exports=UserModule;
import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name : {type : String},
    email : {type : String , required : true},
    password : {type : String , required : true},
    token : {type : String},
    dob : {type : String},
    book : {type : String},
    petName : {type : String}
} , {timestamps : true});

const User = mongoose.model("user" , userSchema);

export default User;
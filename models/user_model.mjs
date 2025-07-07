import mongoose from "mongoose";
import { type } from "os";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    role:{
        type:String,
        required:true,
        default:"NORMAL"
    },
    email:{
        type: String,
        required: true,
        unique:true
    },
    password:{
        type: String,
        required: true
    }
}, {timestamps: true});

export const UserModel = mongoose.model('users', userSchema);

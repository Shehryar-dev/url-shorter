import mongoose from "mongoose";
import { type } from "os";

 const urlSchema = new mongoose.Schema({
    shortId : {
        type:String,
        require:true,
        unique: true
    },
    redirectURL:{
        type:String,
        require:true
    },
    visitHistory: [{timestamps:{type : Number}}],
    createdBy:{
    type:mongoose.Schema.Types.ObjectId
}
}, {timestamps:true}, );

export default URL = mongoose.model("URL_RECORDS", urlSchema);

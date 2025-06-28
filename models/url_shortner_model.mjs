import mongoose from "mongoose";

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
    visitHistory: [{timestamps:{type : Number}}]
}, {timestamps:true});

export default URL = mongoose.model("URL_RECORDS", urlSchema);

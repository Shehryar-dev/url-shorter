import mongoose from "mongoose";

// export default  connectToMongodb = async (url) => {
//    return mongoose.connect(url);
// }


export default async function connectToMongodb(url){
    return mongoose.connect(url);
}
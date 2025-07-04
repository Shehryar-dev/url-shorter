// const sessionIdToUserMap =  new Map();

// export function setUser(id, user){
//     sessionIdToUserMap.set(id, user);
// }


// export function getUser(id){
//     return sessionIdToUserMap.get(id);
// }

import jwt from "jsonwebtoken";
import crypto from 'crypto';

// Generate a random secret key for cookie signing
const secretKey = crypto.randomBytes(64).toString('hex');


export function setUser(user){
    const payload = {
        _id: user._id,
        email: user.email
    }
    return jwt.sign(payload, secretKey)
}


export function getUser(token){
    if(!token) return null;
    return jwt.verify(token, secretKey);
}
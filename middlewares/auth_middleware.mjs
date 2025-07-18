import { v4 as uuidv4 } from 'uuid';
import { getUser } from '../services/auth_service.mjs';


export async function restrictionToLoggedUserOnly(req, res, next) {
    // console.log(req)
    const userUid = req.cookies?.uid;

    console.log('userUId', userUid);
    if(!userUid) return res.redirect('/login');

    const user = getUser(userUid);
    // console.log(user)
    if(!user) return res.redirect('/login');

    req.user = user;
    next();
}


export async function checkAuth(req, res, next) {
    // console.log(req)
    const userUid = req.cookies?.uid;
    const user = getUser(userUid);

    req.user = user;
    next();
}
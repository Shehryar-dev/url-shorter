import { v4 as uuidv4 } from 'uuid';
import { getUser } from '../services/auth_service.mjs';


export async function restrictionToLoggedUserOnly(req, res, next) {
    const userUid = req.cookies.uid;

    if(!userUid) return res.redirect('/login');

    const user = getUser(userUid);

    if(!user) return res.redirect('/login');

    req.user = user;
    next();
}
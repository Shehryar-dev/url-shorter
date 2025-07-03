import {UserModel} from "../models/user_model.mjs";
import { v4 as uuidv4 } from 'uuid';
import { setUser } from "../services/auth_service.mjs";
export async function handleUserSignup(req, res) {
    const {username, email, password} = req.body;
    await UserModel.create({
        username:username,
         email: email,
         password: password
    });
    return res.redirect('/');
}

export async function handleUserLogin(req, res) {
    const { email, password} = req.body;
    const user = await UserModel.findOne({
        email,password
    });

    if(!user) return res.render('login',{
        error: "Invalid Username or Password!"
    });
    const sessionId = uuidv4();
    
    setUser(sessionId, user);
    res.cookie('uid', sessionId);
    return res.redirect('/');
}


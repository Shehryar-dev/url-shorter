import {UserModel} from "../models/user_model.mjs";
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
    const {username, email, password} = req.body;
    const user = await UserModel.findOne({
        email,password
    });

    if(!user) return res.render('login',{
        error: "Invalid Username or Password!"
    })
    return res.redirect('/');
}


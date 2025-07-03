export async function HomeRender(req, res){
    const allURLs = await URL.find({})
   return res.render('home', {
       urls: allURLs
    });
}


export async function SignupRender(req, res){
   return res.render('signup');
}


export async function LoginRender(req, res){
   return res.render('login');
}

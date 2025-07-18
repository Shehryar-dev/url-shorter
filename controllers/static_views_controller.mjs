export async function HomeRender(req, res){
   if(!req.user) return res.redirect('/login')
    const allURLs = await URL.find({createdBy: req.user._id})
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

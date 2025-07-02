export async function HomeRender(req, res){
    const allURLs = await URL.find({})
    res.render('home', {
       urls: allURLs
    });
}


export async function SignupRender(req, res){
    res.render('signup');
}



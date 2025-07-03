import shortid from 'shortid';
import data from '../models/url_shortner_model.mjs';

export async function handleGenerateNewShortUrl(req, res) {
    const body = req.body;
    if(!body.url) return res.status(400).json({error:"URL is Required"});
    const shortId = shortid();
    await data.create({
        shortId:shortId,
        redirectURL:body.url,
        visitHistory:[],
        createdBy:req.user._id
     });

     return res.render('home',{id:shortId});
}

export async function getUrlId(req, res)  {
    const shortId = req.params.shortId;
     const entry = await data.findOneAndUpdate({
        shortId
    }, {
        $push: {
        visitHistory:{
            timestamps: Date.now()
        }
    }})
    console.log(`url : ${entry.redirectURL}`)
    res.redirect(entry.redirectURL);
}

export async function handleGetAnalytics(req, res){
 const shortId =req.params.shortId;
 const result = await data.findOne({shortId});
 console.log('sid:', shortId)
 console.log(result)
 return res.json({
    totalClicks: result.visitHistory.length,
    analtic:result.visitHistory
 })   
}
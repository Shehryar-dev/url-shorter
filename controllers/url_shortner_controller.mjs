import shortid from 'shortid';
import data from '../models/url_shortner_model.mjs';

export default async function handleGenerateNewShortUrl(req, res) {
    const body = req.body;
    if(!body.url) return res.status(400).json({error:"URL is Required"});
    const shortId = shortid();
    await data.create({
        shortId:shortId,
        redirectURL:body.url,
        visitHistory:[],
     });

     return res.json({id:shortId});
}

export async function getUrlId(req, res)  {
    const shortId = req.params.shortId;
     const entry = await url.findOneAndUpdate({
        shortId
    }, {$push: {
        visitHistory:{
            timestamps: Date.now()
        }
    }})
    res.redirect(entry.redirectURL);
}
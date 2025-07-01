import express from 'express';
import  URL  from '../models/url_shortner_model.mjs';

const router = express.Router();

router.get('/', async(req, res)=>{
    const allURLs = await URL.find({})
    res.render('home', {
       urls: allURLs
    });
});

export const staticRourer = router;
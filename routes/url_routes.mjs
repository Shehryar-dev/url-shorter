import express from "express";
import {handleGenerateNewShortUrl, handleGetAnalytics, getUrlId}  from '../controllers/url_shortner_controller.mjs'

const router = express.Router();
router.post('/', handleGenerateNewShortUrl);
router.get('/analytics/:shortId', handleGetAnalytics );
router.get('/url/:shortId', getUrlId);


export const urlRouter = router;
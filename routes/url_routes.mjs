import express from "express";
import {handleGenerateNewShortUrl, handleGetAnalytics}  from '../controllers/url_shortner_controller.mjs'

const router = express.Router();
router.post('/', handleGenerateNewShortUrl);
router.get('/analytics/:shortId', handleGetAnalytics );



export default router;
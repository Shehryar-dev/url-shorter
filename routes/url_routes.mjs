import express from "express";
import handleGenerateNewShortUrl from '../controllers/url_shortner_controller.mjs'
const router = express.Router();
router.post('/', handleGenerateNewShortUrl);
// router.get('/analytics', );



export default router;
import express from 'express';
import  URL  from '../models/url_shortner_model.mjs';
import { HomeRender, SignupRender } from '../controllers/static_views_controller.mjs';
import { handleUserLogin } from '../controllers/user_controller.mjs';

const router = express.Router();

router.get('/', HomeRender);


router.get('/signup', SignupRender);
// router.get('/signup', handleUserLogin);

export const staticRourer = router;
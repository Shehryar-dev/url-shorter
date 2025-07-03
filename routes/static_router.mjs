import express from 'express';
import  URL  from '../models/url_shortner_model.mjs';
import { HomeRender, LoginRender, SignupRender } from '../controllers/static_views_controller.mjs';
import { handleUserLogin } from '../controllers/user_controller.mjs';

const router = express.Router();

router.get('/', HomeRender);


router.get('/signup', SignupRender);
router.get('/login', LoginRender);

export const staticRourer = router;
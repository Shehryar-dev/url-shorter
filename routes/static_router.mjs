import express from 'express';
import  URL  from '../models/url_shortner_model.mjs';
import { AdminHome, HomeRender, LoginRender, SignupRender } from '../controllers/static_views_controller.mjs';
import { handleUserLogin } from '../controllers/user_controller.mjs';
import { restricTo } from '../middlewares/auth_middleware.mjs';

const router = express.Router();


router.get('/admin/urls', restricTo(["ADMIN"]), AdminHome )


router.get('/', restricTo(["NORMAL", "ADMIN"]), HomeRender);


router.get('/signup', SignupRender);
router.get('/login', LoginRender);

export const staticRourer = router;
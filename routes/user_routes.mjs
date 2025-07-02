import express from "express";
import {handleUserLogin, handleUserSignup} from '../controllers/user_controller.mjs'
const router = express.Router();

router.post('/', handleUserSignup)
router.post('/login', handleUserLogin)


export const userRoute = router;



import express from "express";
import {handleUserSignup} from '../controllers/user_controller.mjs'
const router = express.Router();

router.post('/', handleUserSignup)


export const user_route = router;



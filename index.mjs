import express from "express";
import connectToMongodb from './config/config.mjs';
import path from 'path'

import cookieParser from "cookie-parser";
import {urlRouter} from "./routes/url_routes.mjs";
import { staticRourer } from "./routes/static_router.mjs";
import { userRoute } from "./routes/user_routes.mjs";
import { checkForAuthentication, restricTo } from "./middlewares/auth_middleware.mjs";


const app = express();
const PORT = 3002;

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

connectToMongodb('mongodb://localhost:27017/short-url').then(()=> console.log('Mongodb Connected'))

//built-in middleware!
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser())
app.use(checkForAuthentication)
//routing lvl middleware....
app.use('/url',restricTo(["NORMAL", "ADMIN"]), urlRouter);
app.use('/',  staticRourer)
app.use('/user', userRoute);

app.listen(PORT, () => {
    console.log('✅ Server running on port 4000');
});

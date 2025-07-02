import express from "express";
import connectToMongodb from './config/config.mjs';
import { getUrlId } from "./controllers/url_shortner_controller.mjs";
import  URL  from "./models/url_shortner_model.mjs";
import path from 'path'


import {urlRouter} from "./routes/url_routes.mjs";
import { staticRourer } from "./routes/static_router.mjs";
import { userRoute } from "./routes/user_routes.mjs";

const app = express();
const PORT = 3000;


app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

connectToMongodb('mongodb://localhost:27017/short-url').then(()=> console.log('Mongodb Connected'))


// app.get('/:shortId', getUrlId);




app.use(express.json());
app.use(express.urlencoded({extended:false}));

//routing lvl middleware....
app.use('/url', urlRouter);
app.use('/', staticRourer)
app.use('/user', userRoute);

app.listen(PORT, () => {
    console.log('✅ Server running on port 4000');
});

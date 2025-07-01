import express from "express";
import {urlRouter} from "./routes/url_routes.mjs";
// import { user_route } from "./routes/user_routes.mjs";
import connectToMongodb from './config/config.mjs';
import { getUrlId } from "./controllers/url_shortner_controller.mjs";
import  URL  from "./models/url_shortner_model.mjs";
import path from 'path'
const app = express();
const PORT = 3000;


app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

connectToMongodb('mongodb://localhost:27017/short-url').then(()=> console.log('Mongodb Connected'))


app.get('/:shortId', getUrlId);

app.get('/',async (req, res)=>{
     let allURL = await URL.find({});
    return res.render('home', {
        allURL
    })
})


app.use(express.json());

//routing lvl middleware....
app.use('/url', urlRouter);
// app.use('/user', user_route);

app.listen(PORT, () => {
    console.log('✅ Server running on port 4000');
});

import express from "express";
import router from "./routes/url_routes.mjs";
import connectToMongodb from './config/config.mjs';
import url from './models/url_shortner_model.mjs';
import { getUrlId } from "./controllers/url_shortner_controller.mjs";
const app = express();
const PORT = 8001;


connectToMongodb('mongodb://localhost:27017/short-url').then(()=> console.log('Mongodb Connected'))


app.get('/:shortId', getUrlId);

app.get('/',(req, res)=>{
    return res.send('success')
})


app.use(express.json());
app.use('/url', router);

app.listen(3000, () => {
    console.log('✅ Server running on port 4000');
});

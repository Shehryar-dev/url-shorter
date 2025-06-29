import express from "express";
import router from "./routes/url_routes.mjs";
import connectToMongodb from './config/config.mjs';
import { getUrlId } from "./controllers/url_shortner_controller.mjs";
const app = express();
const PORT = 3000;


connectToMongodb('mongodb://localhost:27017/short-url').then(()=> console.log('Mongodb Connected'))


app.get('/:shortId', getUrlId);

app.get('/',(req, res)=>{
    return res.send('success')
})


app.use(express.json());
app.use('/url', router);

app.listen(PORT, () => {
    console.log('✅ Server running on port 4000');
});

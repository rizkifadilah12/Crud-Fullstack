import express from "express";
import Db from "./config/database.js";
import productRouter from './routes/index.js'
import cors from "cors";

const app = express();

try {
    await Db.authenticate();
    console.log('database conected');
} catch (error) {
    console.error('connection eror :', error);
}
app.use(cors());
app.use(express.json());
app.use('/products', productRouter);

app.listen(5000, () => console.log('server runing at port 5000'));
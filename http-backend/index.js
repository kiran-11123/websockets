import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());


app.listen(process.env.PORT , ()=>{
    console.log("Http server is running")
})
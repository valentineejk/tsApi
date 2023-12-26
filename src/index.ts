import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
import compression from "compression"
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();

const app = express();

app.use(cors({
    credentials: true
}))


app.use(compression())
app.use(bodyParser.json())
app.use(cookieParser())

const server = http.createServer(app);

server.listen(8080, () => {
    console.log('====================================');
    console.log('server started on http://localhost:8080');
    console.log('====================================');
})

mongoose.Promise = Promise;
mongoose.connect(process.env.MONGO_URI)
mongoose.connection.on('error', (error: Error) => console.log(error));
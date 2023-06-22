import express, { Application, Request, Response, NextFunction, Router } from "express";
import dotenv from "dotenv"
import path from "path";
import {router as userRoute} from "../src/routes/userRoute"
import mongoose  from 'mongoose';



const app: Application = express();
// initialize configuration
dotenv.config();

// DATABASE
mongoose.connect('mongodb://localhost:27017');

const db = mongoose.connection;
db.on("error", (err) => console.error(err));
db.once("open", () => console.log("Connected to Mongo"));


// port is now available to the Node.js runtime 
const port = process.env.SERVER_PORT;
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(userRoute)

app.listen(5000, () => console.log("server running!!"));

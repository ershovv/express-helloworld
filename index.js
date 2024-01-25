import express from "express";
import mongoose from "mongoose";
import postRouter from "./postRouter.js";

const  DB_URL = ``;

const PORT = 3000;

const app = express();

app.use(express.json())
app.use('/api', postRouter)


async function startApp() {
    try {
        await mongoose.connect(DB_URL);
        app.listen(PORT, () => {console.log('server working on port' + PORT)});
    } catch (e) {
        console.log(e);
    }
}

startApp();
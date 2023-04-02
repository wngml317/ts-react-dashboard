import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Router from "./router/index";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

mongoose.connect(process.env.DB_URL + "/" + process.env.DB_NAME)
    .then(() => console.log('✅ MongoDB Connect Success..'))
    .catch(e => console.log(e))


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.use("/api", Router);

app.listen(PORT, () => {
    console.log(`⚡ Server is running at http://localhost:${PORT}`)
})

import express from "express";
import dotenv from "dotenv";
import path from "path";
import Router from "./router/index";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// if (process.env.NODE_ENV === "production") {
//     app.use(express.static(path.join(__dirname, "../client/build")));
// }
// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "../client/build", "index.html"));
// });  


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.use("/api", Router);

app.listen(PORT, () => {
    console.log(`⚡ Server is running at http://localhost:${PORT}`)
})

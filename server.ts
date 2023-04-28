import express from "express";
import https from "https";
import fs from "fs";
import path from "path";

export const app = express();

//Initialize Request Data Type
app.use(express.json({ limit: "10mb" }));

app.get("/", (req, res) => res.send("Hello World!!"));

const port = 3000;
app.listen(port, () => {
    console.log(`Server is live on ${port}`);
});
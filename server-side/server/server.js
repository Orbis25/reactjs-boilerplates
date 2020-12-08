import React from "react";
import fs from "fs";

import express from "express";

import ReactDOMServer from "react-dom/server";
import App from "../src/App";
import path from "path";

const PORT = 8080;
const app = express();

app.use("^/$", (req, res, next) => {
  const content = ReactDOMServer.renderToString(<App />)
  fs.readFile(path.resolve("./build/index.html"), "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Some error happened");
    }
    return res.send(
      data.replace(
        "<div id='root'></div>",
        `<div id='root'>${content}</div>`
      )
    );
  });
});

app.use(express.static(path.resolve(__dirname, "..", "build")));
app.listen(PORT, () => {
  console.log(`APP LAUNCHED ON PORT ${PORT}`);
});

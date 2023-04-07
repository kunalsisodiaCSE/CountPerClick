// const http = require('http');
const express = require("express");
const app = express();
app.use(express.json()); //middleware function so that data is converted to json and not undefined
const port = 3000;
app.listen(port);
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

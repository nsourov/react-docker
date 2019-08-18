const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) =>
  res.send(`Hello World!, ENV= ${process.env.NODE_ENV}`)
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
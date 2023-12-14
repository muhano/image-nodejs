const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log("This app has been hit at " + new Date());
  res.send("This a simple Nodejs image");
});

app.listen(port, () => {
  console.log(`NodeJS app listening on port ${port}`);
});

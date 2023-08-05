const express = require("express");
const app = express();

// Middlewares
app.use(express.json());

app.route("/api").get((req, res) => {
  const data = req.body;

  res.send(data);
});
module.exports = app;

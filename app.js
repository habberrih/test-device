const express = require("express");
const app = express();

// Middlewares
app.use(express.text());

app.route("/api").post((req, res) => {
  let data = req.body;
   console.log(data)
res.set('content-type', 'text/plain'); 
  res.send(data)
});

module.exports = app;

const express = require('express');
const app = express();



// Middlewares
app.use(express.json());

app.post('/api', (req, res) => {
    const data = req.body;

    JSON.parse(data)
    return res.status(200).json(data);
});


app.get('/api', (req, res) => {
    const data = req.body;

    JSON.parse(data)
    return res.status(200).json('Hello');
});


module.exports = app;
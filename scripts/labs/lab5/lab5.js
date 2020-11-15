const express = require('express')
// const mysql = require("mysql")
const port = process.env.PORT || 8888
const app = express() 

app.get('/', (req, res) => {
    res.send('Hello World, from express');
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))

app.get('/api/words', (req, res) => {
    res.send(
        {
            "hello" : "world",
        }
    );
});
// app.post()


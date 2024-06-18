console.log("hello");

const express = require('express');

const app = express();
const PORT = 3000;


app.get('/',(req, res) => {
    res.send('Handing get request to/');
});

app.post('/user',(req, res) => {
    res.status(201);
    res.send('Handidng post request to/');
});


app.listen(PORT,() => {
   console.log(`Example running on port => ${PORT}`);
});
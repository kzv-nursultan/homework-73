const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;
const app = express();
const port = 8000;

app.get('/',(req, res)=>{
    res.send('My human understands me!');
});

app.get('/encode/:name', (req, res)=>{
    res.send(Vigenere.Cipher('laptop').crypt(req.params.name));
});

app.get('')

app.listen(port, ()=>{
    console.log('We are live on' + port);
});
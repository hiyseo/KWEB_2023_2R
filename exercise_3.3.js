const express = require('express');
const app = express();
const port = 3000;

app.get('/factorial', (req,res) => {
    const {number} = req.query;
    return res.redirect(`/factorial/${number}`);
});

app.get('/factorial/:number', (req,res) => {
    const { number } = req.params;
    const num = parseInt(number, 10);
    let fibo = 1;
    for (let i = 0; i < num; i++) fibo*= (i + 1);
    return res.send(`${num}! = ${fibo}`);
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
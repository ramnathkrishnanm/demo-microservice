const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.get('/',(req, res) => {
    res.send({
        status: 200,
        body: 'Welcome to root service'
    });
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
})
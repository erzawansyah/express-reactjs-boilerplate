const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
require('dotenv').config()



app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
    return res.send('<h1>Hello World</h1>');
});

app.listen(process.env.PORT, () => {
    console.log('Your server run in http://localhost:' + process.env.PORT)
});
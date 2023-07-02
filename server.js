require('dotenv').config();
const express = require('express');
const path = require('path');
const routerPush = require('./router');

const app = express();
const PORT = process.env.PORT || 8080;
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', routerPush);

app.listen(PORT, () => {
    console.log('Connected server');
})




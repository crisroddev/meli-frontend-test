const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const items = require('./routes/items');
const  categorias = require('./routes/categories');

const app = express();

app.use((req, res, next) => {
    const allowedDomains = ["http://localhost:3000", "http://0.0.0.0:3000"];
    const { origin } = req.headers;
    if(allowedDomains.indexOf(origin) > -1) {
        res.setHeader("Access-Control-Allow-Origin", origin);
    }
})
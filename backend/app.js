const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const port = 8000;

const items = require('./routes/items');
const  categorias = require('./routes/categories');

const app = express();

app.use((req, res, next) => {
    const allowedDomains = ["http://localhost:3000", "http://0.0.0.0:3000"];
    const { origin } = req.headers;
    if(allowedDomains.indexOf(origin) > -1) {
        res.setHeader("Access-Control-Allow-Origin", origin);
    }
    res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, PATCH, OPTIONS, DELETE"
      );
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      next();
});

app.use(express.json());
app.use(express.urlencoded( { extended: false }));
app.use(cookieParser());
app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/", items);
app.use("/api/categories", categorias);

app.listen(port, () => {
  console.log(`server listening on localhost:${port}`)
});


module.exports = app;


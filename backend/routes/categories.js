const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get('/', async (req, res) => {
    res.json({
        Categorias: 'Probando Categorias'
    })
})
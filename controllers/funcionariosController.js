
const express = require('express');
const roteador = express.Router();

roteador.get('/', async(req, res)=>{

});

roteador.get('/home', (req, res) => {
    res.render('home');
})

module.exports = roteador;
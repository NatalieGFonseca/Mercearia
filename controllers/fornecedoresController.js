const {Fornecedor} = require('../models');
const express = require('express');
const roteador = express.Router();

roteador.get('/cadastro', (req, res) =>{
    res.render('fornecedores/cadastro');
});

roteador.post('/cadastro', async (req, res) => {
    const {nome, tipo, telefone, email} = req.body;
    
    await Fornecedor.create({nome, tipo, telefone, email});
    res.redirect('/funcionarios/home');
});

module.exports = roteador;
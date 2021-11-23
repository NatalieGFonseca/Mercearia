const {Produto, Fornecedor} = require('../models');
const {Router} = require('express');

const roteador = Router();

roteador.get('/cadastro', (req, res) =>{
    res.render('fornecedores/cadastro');
});
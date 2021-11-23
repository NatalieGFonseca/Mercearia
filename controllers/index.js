const usuariosController = require('./usuariosController');
const produtosController = require('./produtosController');
const fornecedoresController = require('./fornecedoresController');
const funcionariosController = require('./funcionariosController');

controllers = {
    usuarios: usuariosController,
    produtos: produtosController,
    fornecedores: fornecedoresController,
    funcionarios: funcionariosController
}

module.exports = controllers;
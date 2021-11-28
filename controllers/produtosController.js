const {Produto, Fornecedor} = require('../models');
const express = require('express');
const roteador = express.Router();

roteador.get('/', async(req, res)=>{
    const produtos = await Produto.findAll({
        include: [
            {model: Fornecedor}
        ]
    });
    res.render('produtos/apresenta', {produtos});
});

roteador.get('/cadastro', (req, res) =>{
    res.render('produtos/cadastro');
});

roteador.get('/:id/edite', async (req, res)=>{
	const {id} = req.params;
    let produto = await Produto.findByPk(id);

    res.render('produtos/edite', {produto});
});

roteador.patch('/:id', async (req, res)=>{
	
    const {nome, preco_unitario, tipo} = req.body;

    await Produto.update(
        {nome},
        {preco_unitario},
        {tipo},
        {
            where: {id: req.params.id}
        }
    );

    res.redirect('/produtos');
});


roteador.post('/cadastro', async (req, res) => {
    const {nome, preco_unitario, tipo, id_fornecedor} = req.body;
    
    await Produto.create({nome, preco_unitario, tipo, id_fornecedor});
    res.redirect('/produtos');
});

roteador.delete('/:id', async (req, res)=>{
    await Produto.destroy(
        {
            where: {id: req.params.id}
        }
    );

    res.redirect('/produtos');
});

module.exports = roteador;

const {Produto, Fornecedor, Item, Venda} = require('../models');
const express = require('express');
const roteador = express.Router();
const { Op } = require("sequelize");

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

roteador.get('/fornecedor', async(req, res)=>{
    
    const {nome} = req.query;

    const produtos = await Produto.findAll({
        include: [
            {
                model: Fornecedor,
                where: {
                    nome: nome
                }
            }
        ]
    });

    res.render('produtos/apresenta', {produtos});

});


roteador.patch('/:id', async (req, res)=>{
	
    const {preco_unitario} = req.body;

    await Produto.update(
        {preco_unitario},
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

    console.log("Produto cadastrado com sucesso");
});

roteador.delete('/:id', async (req, res)=>{
    await Produto.destroy(
        {
            where: {id: req.params.id}
        }
    );

    console.log("Produto excluído com sucesso");

    res.redirect('/produtos');
});

module.exports = roteador;

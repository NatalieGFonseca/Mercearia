const {Produto, Fornecedor, Estoque} = require('../models');
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

roteador.get('/estoque', async (req, res) => {

    const {nome} = req.query;

    console.log(nome);

    const produtos = await Estoque.findAll({
        include: [
            {
                model: Produto,
                where: {
                    nome: nome
                }
            }
        ]
    });

    console.log(produtos);

    res.render('estoque/apresenta', {produtos});
});

roteador.get('/preco', async (req, res) => {

    const preco_unitario = req.body;

    console.log(preco_unitario);

    const produtos = await Estoque.findAll({
        include: [
            {
                model: Produto,
                where: {
                    preco_unitario: {
                        [Op.gte]: preco_unitario
                    }
                }
            }
        ]
    });

    console.log(produtos);

    res.render('estoque/apresenta', {produtos});
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

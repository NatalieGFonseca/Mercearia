const {Fornecedor} = require('../models');
const express = require('express');
const roteador = express.Router();

roteador.get('/', async(req, res)=>{
    const fornecedores = await Fornecedor.findAll();
    res.render('fornecedores/apresenta', {fornecedores});
});

roteador.get('/cadastro', (req, res) =>{
    res.render('fornecedores/cadastro');
});

roteador.post('/cadastro', async (req, res) => {
    const {nome, tipo, telefone, email} = req.body;
    
    await Fornecedor.create({nome, tipo, telefone, email});
    res.redirect('/fornecedores');
});

roteador.get('/:id/edite', async (req, res)=>{
	const {id} = req.params;
    let fornecedor = await Fornecedor.findByPk(id);

    res.render('fornecedores/edite', {fornecedor});
});

roteador.patch('/:id', async (req, res)=>{
	
    const {telefone} = req.body;

    await Fornecedor.update(
        {telefone},
        {
            where: {id: req.params.id}
        }
    );

    res.redirect('/fornecedores');
});

roteador.delete('/:id', async (req, res)=>{
    await Fornecedor.destroy(
        {
            where: {id: req.params.id}
        }
    );

    res.redirect('/fornecedores');
});
module.exports = roteador;
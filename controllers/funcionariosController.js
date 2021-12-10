const {Funcionario, Venda} = require('../models');
const express = require('express');
const roteador = express.Router();

roteador.get('/', async (req, res)=>{
    const funcionarios = await Funcionario.findAll();
    res.render('funcionarios/apresenta', {funcionarios});
});

roteador.get('/home', (req, res) => {
    res.render('home');
})

roteador.get('/consultas', (req, res) => {
    res.render('funcionarios/consultas');
});

roteador.get('/cadastro', (req, res) =>{
    res.render('funcionarios/cadastro');
});

roteador.post('/cadastro', async (req, res) => {
    const {nome, telefone, email, cpf, rua, bairro, funcao, data_nascimento} = req.body;
    
    await Funcionario.create({nome, telefone, email, cpf, rua, bairro, funcao, data_nascimento});
    res.redirect('/funcionarios');
});

roteador.get('/:id/edite', async (req, res)=>{
	const {id} = req.params;
    let funcionario = await Funcionario.findByPk(id);

    res.render('funcionarios/edite', {funcionario});
});

roteador.get('/vendas', async (req, res) => {

    const {nome} = req.query;

    const vendas = await Venda.findAll({
        include: [
            {
                model: Funcionario,
                where: {
                    nome: nome
                }
            }
        ]
    });

    res.render('venda/apresenta', {vendas});
});


roteador.patch('/:id', async (req, res)=>{

    const {funcao} = req.body;

    await Funcionario.update(
        {funcao},
        {
            where: {id: req.params.id}
        }
    );

    res.redirect('/funcionarios');
});

roteador.delete('/:id', async (req, res)=>{
    await Funcionario.destroy(
        {
            where: {id: req.params.id}
        }
    );

    res.redirect('/funcionarios');
});

module.exports = roteador;
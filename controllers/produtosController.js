const {Produto, Fornecedor} = require('../models');
const {Router} = require('express');

const roteador = Router();

roteador.get('/', async (req, res) =>{
    const produtos = await Produto.findAll({
        include: [
            {model: Fornecedor}
        ]
    });
    res.render('produtos/visualiza', {produtos});
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

roteador.delete('/:id', async (req, res)=>{
    
    await Produto.destroy(
        {
            where: {id: req.params.id}
        }
    );

    res.redirect('/produtos');
});

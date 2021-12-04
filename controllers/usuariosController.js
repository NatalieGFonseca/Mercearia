const {Usuario} = require('../models');
const express = require('express');
const roteador = express.Router();

roteador.get('/', async(req, res)=>{

});

roteador.get('/login', (req, res) => {
    res.render('usuarios/login');
});

roteador.get('/logoff', (req, res) => {
    req.session.destroy();
    res.redirect('usuarios/login');
});

roteador.get('/novo', (req, res) => {
    res.render('usuarios/novo');
});

roteador.post('/login', async (req, res) => {
    const {nome, senha} = req.body;

    const usuario = await Usuario.findOne({
        where: {
            nome: nome,
            senha: senha
        }
    });

    req.session.login = false;

    if(usuario){
        req.session.login = true;
        res.redirect('/funcionarios/home');
    }else{
        console.log("Usuário não encontrado");
        res.redirect('usuarios/login');
    }

});

roteador.post('/novo', async (req, res) => {
    const {nome, senha} = req.body;
    
    await Usuario.create({nome, senha});
    res.redirect('usuarios/login');
});

module.exports = roteador;
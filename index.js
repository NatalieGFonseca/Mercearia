const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

app.set('view engine','ejs');
app.set('views', path.join(__dirname,'/views'));

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(methodOverride('_method'));

/* ROTAS */
app.get('/home', (req, res)=>{
    res.render('home');
})

app.post('/home', (req, res)=>{
    const {usuario} = req.body;
    res.redirect('home');
})

app.get('/', (req, res) =>{
    res.render('login');
});

/* PRODUTOS */
app.get('/produtos', (req, res) =>{
    res.render('produtos/visualiza');
});

app.get('/cadastro/produtos', (req, res) =>{
    res.render('produtos/cadastro');
});

app.get('/produtos/:id/edite', (req, res)=>{
	const {id} = req.params;
    const produto = "";

    res.render('comentarios/edite', {produto});
});

app.patch('/produtos/:id', (req, res)=>{
	const {id} = req.params;

    const novoProduto = req.body.comentario;
    const produto = novoProduto;
    res.redirect('/comentarios');
});

app.delete('/produtos/:id',(req, res)=>{
    const {id}= req.params;
    res.redirect('/produtos');
});

/* FORNECEDORES */
app.get('/cadastro/fornecedores', (req, res) =>{
    res.render('fornecedores/cadastro');
});


/* CONSULTAS */
app.get('/consulta', (req, res) =>{
    res.render('consultas');
});

app.get('*', (req, res)=>{
    res.render('pageNotFound')
})

app.listen(80, () =>{
    console.log('Ouvindo na porta 80')
});
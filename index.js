const express = require('express');
const {usuarios, fornecedores, funcionarios, produtos} = require('./controllers');
const path = require('path');
var methodOverride = require('method-override');
const app = express();

const session = require('express-session');

const sessionOptions = {
    secret: 'autenticacao',
    resave: false,
    saveUninitialized: false
}

app.use(session(sessionOptions));

function authenticated_pass(req, res, next){
    if(req.session.login || req.path === '/login'){
        next();
    }else{
        res.redirect('/usuarios/login');
    }
}

app.set('view engine','ejs');
app.set('views', path.join(__dirname,'/views'));

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(methodOverride('_method'));

app.use('/usuarios', usuarios);
app.use(authenticated_pass);
app.use('/funcionarios', funcionarios);
app.use('/produtos', produtos);
app.use('/fornecedores', fornecedores);

app.get('*', (req, res)=>{
    res.render('pageNotFound')
})

app.listen(80, () =>{
    console.log('Listening at port 80')
});
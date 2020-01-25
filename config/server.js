/* Importando o módulo do framework Express */
var express = require('express');

/* Importando o módulo do Consign */
var consign = require('consign');

/* Importando o módulo Body Parser */
var body_parser = require('body-parser');

/* Importando o módulo do Express-Validator */
var expressValidator = require('express-validator');

/* Iniciando o objeto do express */
var app = express();


/* Incluir e configurar o EJS para views*/
app.set('view engine','ejs');
app.set('views','./app/views');


/* Configurando os middlewares */
app.use(express.static('./app/public'));


/* Configurando Body Parser */
app.use(body_parser.urlencoded({extended: true}));


/* Configurando o middleware Express Validator */
app.use(expressValidator());


/* Configurando o Consign(Autoload) */
consign()
    .include('./app/routes')
    .then('./app/models')
    .then('./app/controllers')
    .into(app);


/* Exportando o objeto app */
module.exports = app;
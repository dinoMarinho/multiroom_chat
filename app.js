/* Importando as configurações do servidor */
var app = require('./config/server');

/* Parametrizar a porta de escuta */
var server = app.listen(5500,function(){
    console.log('Servidor Online')
});


/* Integrando o WebSockets na aplicacao  */
var io = require('socket.io').listen(server);


/* Criando uma variavel global */
app.set('io',io);

/* Criar a conexão por WebSocket */
io.on('connect',function(socket){
    console.log('Usuário Conectou');

    socket.on('disconnect',function(){
        console.log('Usuário desconectou');
    });



});
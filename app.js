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
    var ip = socket.conn.remoteAddress;
    console.log('Uma nova conexão foi adquirida pelo IP: '+ip);

    socket.on('disconnect',function(){
        console.log('A conexão do IP: '+ip + ' foi desconectada');
    });

    socket.on('msgParaServidor',function(data){

        /* Dialogo */
        socket.emit(
            'msgParaCliente',
            { apelido: data.apelido, mensagem: data.mensagem }
        );
        socket.broadcast.emit(
            'msgParaCliente',
            { apelido: data.apelido, mensagem: data.mensagem }
        );


        /* Participantes */
        if(parseInt(data.apelido_atualizado_nos_clientes) == 0){
            socket.emit(
                'participantesParaCliente',
                { apelido: data.apelido }
            );
            socket.broadcast.emit(
                'participantesParaCliente',
                { apelido: data.apelido }
            );
        }

    });

});
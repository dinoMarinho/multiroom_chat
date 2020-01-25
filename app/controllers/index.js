/* Criando um controle para o index */
module.exports.home = function(application,req,res){
    res.render('index',{validacao : {}});
}
/* Criando a rota do index */
module.exports = function(application){
    application.get('/',function(req,res){
        application.app.controllers.index.home(application,req,res);
    });
}
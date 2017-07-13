// let connectionFactory = require('../infra/connectionFactory'); -> exŕess-load ja faz isso.

module.exports = (app)=>{
app.get('/produtos',(req,res)=>{
    let connect = app.infra.connectionFactory();

    connect.query('SELECT * FROM livros',(erro,result)=>{
      res.render('produtos/lista', { lista: result });
    });
    connect.end();// fechar conexão

});
}

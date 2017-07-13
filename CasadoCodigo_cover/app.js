let app = require('./config/express')();
//let rotasprodutos = require('./app/routes/produtos')(app);<X> express-load já faz isso.


app.listen(3000,()=>{
    console.log("Servidor ON");
});

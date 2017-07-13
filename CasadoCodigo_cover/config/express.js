let express = require("express");
let load = require("express-load");

module.exports = ()=>{
    let app = express();

    app.set('view engine', 'ejs');
    app.set('views','./app/views/');

    load('routes', {cwd: 'app/'}) //cwd : 'app' -> procurar routes apartir desta, e não de tudo.
      .then('infra')
      .into(app);

    return app;
}

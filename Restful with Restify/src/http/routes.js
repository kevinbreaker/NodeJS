const db = require('../services/mysql');

// db.categories().all();
// db.categories().save(name);
// db.categories().update(id, name);
// db.categories().del(id);

const routes = (server) => {
  server.get('/', (req, res, next) => {
    res.send('It works!');
    next();
  });

  server.get('category', async (req, res, next) => {
    try {
      res.send(await db.categories().all());
      next();
    } catch (error) {
      res.send(error);
      next();
    }
  });
  server.post('category', (req, res, next) => {
    const { name } = req.params;
    res.send(name);
    next();
  });
  // server.put('category',(req, res, next) =>{
  //     res.send();
  //     next();
  // });
  // server.delete('category',(req, res, next) =>{
  //     res.send();
  //     next();
  // });
}
module.exports = routes;

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
    } catch (error) {
      res.send(error);
      next();
    }
  });
  server.post('category', async (req, res, next) => {
    const { name } = req.params;
    try {
      res.send(await db.categories().save(name));
      next();
    } catch (error) {
      res.send(error);
      next();
    }
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

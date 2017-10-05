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
    }
    next();
  });
  server.post('category', async (req, res, next) => {
    const { name } = req.params;
    try {
      res.send(await db.categories().save(name));
    } catch (error) {
      res.send(error);
    }
    next();
  });
  server.put('category', async (req, res, next) => {
    const { id, name } = req.params;
    try {
      res.send(await db.categories().update(id, name));
    } catch (error) {
      res.send(error);
    }
    next();
  });
  server.del('category', async (req, res, next) => {
    const { id } = req.params;
    try {
      res.send(await db.categories().del(id));
    } catch (error) {
      res.send(error);
    }
    next();
  });
}
module.exports = routes;

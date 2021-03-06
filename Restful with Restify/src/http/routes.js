const db = require('../services/mysql');

const routes = (server) => {
  server.post('authentication', async (req, res, next) => {
    try {
      const { email, password } = req.params;
      res.send(await db.auth().authenticate(email, password));
    } catch (error) {
      res.send(error);
    }
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

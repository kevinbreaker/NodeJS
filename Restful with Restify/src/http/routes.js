const routes = (server) => {
  server.get('/', (req, res, next) => {
    res.send('It works!');
    next();
  });

  server.get('category', (req, res, next) => {
      res.send(['1', 'the get test has been succeeded!']);
      next();
  });
  server.post('category', (req, res, next) =>{
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

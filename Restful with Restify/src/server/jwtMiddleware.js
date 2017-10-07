const jwt = require('jsonwebtoken');

const jwtMiddleware = (deps) => {
  return async (req, res, next) => {
    if (!deps.exclusions.includes(req.href())) {
      const token = req.headers['x-access-token'];
      if (!token) {
        res.send(403, { error: "Token wasn't received" });
        return false;
      }
      await jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
        if (error) {
          res.send(403, { error: "Token wasn't received" });
        } else {
          req.decoded = decoded;
          console.table(decoded);
        }
      });
    }
    next();
  }
}
module.exports = jwtMiddleware;

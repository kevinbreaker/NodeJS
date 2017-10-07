const jwt = require('jsonwebtoken');

const jwtMiddleware = (deps) => {
  return async (req, res, next) => {
    if (!deps.exclusions.includes(req.href())) {
      const token = req.headers['x-access-token'];
      if (!token) {
        res.send(403, { error: "Token wasn't received" });
        return false;
      }

      try {
        req.decoded = jwt.verify(token, process.env.JWT_SECRET);
      } catch (err) {
        res.send(403, { error: "Token wasn't received" })
        return false;
      }
    }
    next();
  }
}
module.exports = jwtMiddleware;

const sha1 = require('sha1');
const jwt = require('jsonwebtoken');

const auth = (deps) => {
  return {
    authenticate: (email, password) => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps;
        const queryString = 'SELECT id, email FROM users WHERE email = ? AND password = ?';
        const queryData = [email, sha1(password)];
        connection.query(queryString, queryData, (error, results) => {
          if (error || !results.length) {
            errorHandler(error, 'failed to find user, try again or contact the developer (kevinbreaker2604@gmail.com)', reject);
            return false;
          }
          const { email, id } = results[0];
          // information sent for token,  verification word, time expire ( optional )
          const token = jwt.sign({ email, id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 });
          console.log(token);
          console.log(results[0]);
          resolve({ token });
        });
      });
    }
  }
}
module.exports = auth;

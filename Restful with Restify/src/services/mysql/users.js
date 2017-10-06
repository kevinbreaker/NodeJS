const sha1 = require('sha1');
const users = (deps) => {
  return {
    all: () => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps;
        connection.query('SELECT id, email FROM users', (error, results) => {
          if (error) {
            errorHandler(error, 'failed to list users, try again or contact the developer (kevinbreaker2604@gmail.com)', reject);
            return false;
          }
          resolve({ users: results });
        });
      });
    },
    save: (email, password) => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps;
        connection.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, sha1(password)], (error, results) => {
          if (error) {
            errorHandler(error, `Failed to insert user ${email}, try again or contact the developer (kevinbreaker2604@gmail.com)`, reject);
            return false;
          }
          resolve({ user: { email, id: results.insertId } });
        });
      });
    },
    update: (id, password) => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps;
        connection.query('UPDATE users SET password = ? WHERE id = ?', [sha1(password), id], (error, results) => {
          if (error || !results.affectedRows) {
            errorHandler(error, `Failed to update user id ${id}, try again or contact the developer (kevinbreaker2604@gmail.com)`, reject);
            return false;
          }
          resolve({ user: { id }, affectedRows: results.affectedRows });
        });
      });
    },
    del: (id) => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps;
        connection.query('DELETE FROM users WHERE id = ?', [id], (error, results) => {
          if (error || !results.affectedRows) {
            errorHandler(error, `Failed to delete this user, try again or contact the developer (kevinbreaker2604@gmail.com)`, reject);
            return false;
          }
          resolve({message: 'The user has been deleted successfully!', affectedRows: results.affectedRows});
        });
      });
    }
  }
}
module.exports = users;

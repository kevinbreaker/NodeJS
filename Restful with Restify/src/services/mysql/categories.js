const categories = (deps) => {
  return {
    all: () => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps;
        connection.query('SELECT * FROM categories', (error, results) => {
          if (error) {
            errorHandler(error, 'failed to list categories, try again or contact the developer (kevinbreaker2604@gmail.com)', reject);
            return false;
          }
          resolve({ categories: results });
        });
      });
    },
    save: (name) => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps;
        connection.query('INSERT INTO categories (name) VALUES (?)', [name], (error, results) => {
          if (error) {
            errorHandler(error, `Failed to insert category ${name}, try again or contact the developer (kevinbreaker2604@gmail.com)`, reject);
            return false;
          }
          resolve({ category: { name, id: results.insertId } });
        });
      });
    },
    update: (id, name) => { },
    del: (id) => { }
  }
}
module.exports = categories;

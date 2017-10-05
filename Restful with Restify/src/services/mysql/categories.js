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
    update: (id, name) => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps;
        connection.query('UPDATE categories SET name = ? WHERE id = ?', [name, id], (error, results) => {
          if (error || !results.affectedRows) {
            errorHandler(error, `Failed to update category ${name}, try again or contact the developer (kevinbreaker2604@gmail.com)`, reject);
            return false;
          }
          console.log(results);
          resolve({ category: { name, id }, affectedRows: results.affectedRows });
        });
      });
    },
    del: (id) => {
      return new Promise((resolve, reject) => {
        const { connection, errorHandler } = deps;
        connection.query('DELETE FROM categories WHERE id = ?', [id], (error, results) => {
          if (error || !results.affectedRows) {
            errorHandler(error, `Failed to delete this category, try again or contact the developer (kevinbreaker2604@gmail.com)`, reject);
            return false;
          }
          resolve({message: 'The category has been deleted successfully!', affectedRows: results.affectedRows});
        });
      });
    }
  }
}
module.exports = categories;

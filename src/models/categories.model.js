const connection = require('./connection');

const categorieId = async (categorieName) => {
    const [[{ id }]] = await connection.execute(
       'SELECT id FROM ExpensesController.categorias WHERE nome=?',
       [categorieName],
    );
 
    return id;
 };

 module.exports = { categorieId };
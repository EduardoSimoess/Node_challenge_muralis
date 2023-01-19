const connection = require('./connection');

const insert = async (paymentType) => {
   const [{ insertId }] = await connection.execute(
    'INSERT INTO ExpensesController.pagamento (tipo) VALUES (?)',
    [paymentType],
   ); 

   return insertId;
};

module.exports = { insert };
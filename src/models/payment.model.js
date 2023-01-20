const connection = require('./connection');

const paymentId = async (paymentType) => {
   const [[{ id }]] = await connection.execute(
      'SELECT id FROM ExpensesController.pagamento WHERE tipo=?',
      [paymentType],
   );

   return id;
};

const insert = async (paymentType) => {
   const [{ insertId }] = await connection.execute(
    'INSERT INTO ExpensesController.pagamento (tipo) VALUES (?)',
    [paymentType],
   ); 

   const id = await paymentId('Pix');
   console.log(id);

   return insertId;
};

module.exports = { insert, paymentId };
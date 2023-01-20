const connection = require('./connection');

const addExpense = async (expenseData) => {
    const [{ insertId }] = await connection.execute(
        `INSERT INTO ExpensesController.despesas (valor_cent, data_da_compra, descricao,
tipo_pagamento_id, categoria_id) VALUE (?, ?, ?, ?, ?)`,
        expenseData,
    );

    return insertId;
};

const listExpenses = async (month) => {
    const [list] = await connection.execute(
        'SELECT * FROM ExpensesController.despesas WHERE MONTH(data_da_compra)=?',
        [month],
    );

    return list;
};

module.exports = { addExpense, listExpenses };
const model = require('../models/expenses.model');
const paymentModel = require('../models/payment.model');
const categoriesModel = require('../models/categories.model');

const newExpense = async (expenseData) => {
    const { tipo, categoria, valor, descricao } = expenseData;
    const tipoPagamentoId = await paymentModel.paymentId(tipo);
    const categoriaId = await categoriesModel.categorieId(categoria);
    const fixedValue = valor.replace(',', '.');
    const valorCent = 100 * Number(fixedValue);
    const array = [valorCent, new Date(), descricao, tipoPagamentoId, categoriaId];

    const inserId = await model.addExpense(array);
    return inserId;
};

const listExpenses = async () => {
    const month = (new Date().getMonth()) + 1;
    const list = await model.listExpenses(month);
    const fixedList = list.map((item) => ({ id: item.id, 
        valor: item.valor_cent / 100,
        data_da_compra: item.data_da_compra,
        descricao: item.descricao,
        tipo_pagamento_id: item.tipo_pagamento_id,
        categoria_id: item.categoria_id }));
    return fixedList;
};

module.exports = { newExpense, listExpenses };
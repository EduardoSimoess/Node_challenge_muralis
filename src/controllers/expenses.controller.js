const service = require('../services/expenses.service');

const newExpense = async (req, res) => {
    const { tipo, categoria, valor, descricao } = req.body;
    const id = await service.newExpense({ tipo, categoria, valor, descricao });

    return res.status(201).json({ data: { id }, succes: true });
};

const listExpenses = async (_req, res) => {
    const list = await service.listExpenses();
    return res.status(201).json({ data: { list }, succes: true });
};

module.exports = { newExpense, listExpenses };
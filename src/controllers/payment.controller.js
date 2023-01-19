const paymentService = require('../services/payment.service');

const newPaymentType = async (req, res) => {
    const { type } = req.body;
    const id = await paymentService.newPaymentType(type);
    return res.status(201).json({ data: id, success: true });
};

module.exports = { newPaymentType };
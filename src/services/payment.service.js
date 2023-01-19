const paymentModel = require('../models/payment.model');

const newPaymentType = async (paymentType) => {
    const newTypeId = await paymentModel.insert(paymentType);
    return newTypeId;
};

module.exports = { newPaymentType };
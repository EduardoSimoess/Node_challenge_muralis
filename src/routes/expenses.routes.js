const express = require('express');

const router = express.Router();

const controller = require('../controllers/expenses.controller');

const typeMiddleware = require('../midllewares/type.midlleware');
const descriptionCategorieMidlleware = require('../midllewares/description.categorie.midlleware');
const valueMidlleware = require('../midllewares/value.midlleware');

router.get('/', controller.listExpenses);
router.post('/', typeMiddleware, 
descriptionCategorieMidlleware, valueMidlleware, controller.newExpense);

module.exports = router;
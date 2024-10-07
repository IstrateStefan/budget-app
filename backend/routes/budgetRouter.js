const express = require('express');
const {
  getBudget,
  changeBudgetAmount,
} = require('../controllers/budgetController');

const router = express.Router();
router.get('/budget/:userId', getBudget);
router.post('/budget/:userId', changeBudgetAmount);

module.exports = router;

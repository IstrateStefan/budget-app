const mongoose = require('mongoose');

const budgetHistorySchema = new mongoose.Schema({
  budgetId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Budget',
    required: true,
  },
  action: {
    type: String,
    required: true,
  },
  amountChange: {
    type: Number,
    required: true,
  },
});

const BudgetHistory = mongoose.Model(
  'BudgetHistory',
  budgetHistorySchema,
  'budgetsHistory'
);

module.exports = BudgetHistory;

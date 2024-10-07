const mongoose = require('mongoose');

const actionSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

const budgetHistorySchema = new mongoose.Schema({
  budgetId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Budget',
    required: true,
  },
  action: {
    type: actionSchema,
    required: true,
  },
  amountChange: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const BudgetHistory = mongoose.model(
  'BudgetHistory',
  budgetHistorySchema,
  'budgetsHistory'
);

module.exports = BudgetHistory;

const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({
  totalAmount: {
    type: Number,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const Budget = mongoose.model('Budget', budgetSchema);

module.exports = Budget;

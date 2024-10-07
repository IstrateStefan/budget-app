const Budget = require('../models/budgetModel');
const BudgetHistory = require('../models/budgetHistoryModel');

exports.getBudget = async (req, res) => {
  try {
    const { userId } = req.params;

    const budget = await Budget.findOne({ userId });

    res.status(200).json({
      status: 'success',
      data: {
        budget,
      },
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.changeBudgetAmount = async (req, res) => {
  try {
    const { userId } = req.params;
    let { category, amount } = req.body;

    const budget = await Budget.findOne({ userId });
    amount = category.type === 'Expense' ? -amount : amount;

    budget.totalAmount += amount;
    await budget.save();

    await BudgetHistory.create({
      budgetId: budget._id,
      action: category,
      amountChange: amount,
    });

    await res.status(200).json({
      message: 'Success',
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

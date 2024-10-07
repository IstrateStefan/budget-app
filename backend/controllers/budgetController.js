const Budget = require('../models/budgetModel');

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

    const budget = await Budget.findOne({ userId });

    constole.log(budget);
  } catch (error) {
    res.status(500).send(error);
  }
};

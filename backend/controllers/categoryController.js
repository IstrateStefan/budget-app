const Category = require('../models/categoryModel');
const fs = require('fs');

exports.getAll = async (req, res) => {
  try {
    const categories = await Category.find({});

    res.status(200).json({
      success: true,
      categories,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

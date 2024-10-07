const moongose = require('mongoose');

const categorySchema = new moongose.Schema({
  category: {
    type: String,
  },
  type: {
    type: String,
  },
});

const Category = moongose.model('Category', categorySchema);

module.exports = Category;

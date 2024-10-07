const express = require('express');
const { getAll, createCategory } = require('../controllers/categoryController');

const router = express.Router();
router.get('/categories', getAll);

module.exports = router;

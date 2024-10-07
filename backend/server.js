const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const signupRouter = require('./routes/signupRouter');
const categoryRouter = require('./routes/categoryRouter');
const budgetRouter = require('./routes/budgetRouter');
const cors = require('cors');

dotenv.config({ path: './.env' });

const app = express();
app.use(express.json());
app.use(cors());

const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => console.log('DB connection succesfull!'));

app.use('/', signupRouter);
app.use('/', categoryRouter);
app.use('/', budgetRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

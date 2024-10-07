const jwt = require('jsonwebtoken');

exports.generateToken = (user) => {
  const secretKey = process.env.JWT_SECRET;

  const token = jwt.sign({ user }, secretKey);
  return token;
};

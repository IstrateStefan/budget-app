const Joi = require('joi');
const User = require('../models/userModel');
const Budget = require('../models/budgetModel');
const { generateToken } = require('../utils/jtwUtils');

const userSchema = Joi.object({
  username: Joi.string().min(3).max(30).required().messages({
    'string.empty': 'Username cannot be empty',
    'string.min': 'Username must be at least 3 characters long',
    'string.max': 'Username must be at most 30 characters long',
    'any.required': 'Username is required',
  }),
  email: Joi.string().email().required().messages({
    'string.empty': 'Email cannot be empty',
    'string.email': 'Email must be a valid email address',
    'any.required': 'Email is required',
  }),
  password: Joi.string().min(8).required().messages({
    'string.empty': 'Password cannot be empty',
    'string.min': 'Password must be at least 6 characters long',
    'any.required': 'Password is required',
  }),
});

exports.signup = async (req, res) => {
  try {
    const { error } = userSchema.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
      return res.status(400).json({
        status: 'failed',
        errors: error.details.map((err) => ({
          path: err.path[0],
          message: err.message,
        })),
      });
    }

    const newUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    await Budget.create({
      userId: newUser._id,
      totalAmount: 0,
    });

    const token = generateToken(newUser._id);

    res.status(201).json({
      status: 'success',
      token,
      data: {
        user: newUser,
      },
    });
  } catch (error) {
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];

      return res.status(400).json({
        status: 'failed',
        errors: [
          {
            path: field,
            message: `${
              field.charAt(0).toUpperCase() + field.slice(1)
            } already exists!`,
          },
        ],
      });
    }
    res.status(500).send(error);
  }
};

exports.login = async (req, res) => {
  try {
    const userSchemaWithoutUsername = userSchema.fork(['username'], (field) =>
      field.optional()
    );

    const { error } = userSchemaWithoutUsername.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });

    if (error) {
      return res.status(400).json({
        status: 'failed',
        errors: error.details.map((err) => ({
          path: err.path[0],
          message: err.message,
        })),
      });
    }

    const user = await User.findOne({ email: req.body.email }).select(
      '+password'
    );

    if (!user) {
      return res.status(400).json({
        status: 'failed',
        errors: [
          {
            path: 'user',
            message: 'Incorect email or password',
          },
        ],
      });
    }

    if (await user.correctPassword(req.body.password, user.password)) {
      const userWithoutPassowrd = user.toObject();
      delete userWithoutPassowrd.password;
      const token = generateToken(userWithoutPassowrd);

      res.status(200).json({
        status: 'failed',
        message: 'Authentication successful!',
        token: token,
        data: {
          user: userWithoutPassowrd,
        },
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

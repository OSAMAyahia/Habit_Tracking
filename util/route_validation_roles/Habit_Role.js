const { body, check } = require('express-validator');
const validatorMiddleware = require('../validatormiddleware');

exports.createValidator = [
  body("name")
    .isLength({ min: 3 }).withMessage("The length must be bigger than 3")
    .isString().withMessage("The name must be a string"),
  
  body("description")
    .isLength({ min: 12 }).withMessage("The length must be bigger than 11")
    .isString().withMessage("The description must be a string"),
  
  check("frequency")
    .isNumeric().withMessage("The frequency must be a number"),
  
  check("start_date")
    .isDate().withMessage("The date must be in the format YYYY-MM-DD"),

  validatorMiddleware
];

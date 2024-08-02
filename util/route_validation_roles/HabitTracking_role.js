const { check, body } = require('express-validator');
const validatorMiddleware = require('../validatormiddleware');
const database = require('../../models/Habits');

exports.getCategoryValidator = [
  check("ID").isMongoId().withMessage("Invalid ID format"),
  validatorMiddleware
];

exports.createValidator = [
  body("habit_id")
    .isMongoId().withMessage("Invalid habit ID format")
    .custom(async value => {
      const id = await database.findById(value);
      if (!id) {
        throw new Error("Habit ID does not exist in the database");
      }
    }),
  validatorMiddleware
];

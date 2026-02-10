import { body } from "express-validator";

const allowedDifficulties = ["easy", "medium", "hard"];

const validateNewTour = [
  body().notEmpty().withMessage("Request body must conatin data"),

  //validate name field

  body("name")
    .isString()
    .withMessage("Name must be a string")
    .isLength({ min: 3, max: 10 })
    .withMessage("name must be between 3 and 10 symbols")
    .notEmpty()
    .withMessage("Name is required"),

  body("price")
    .isFloat({ min: 0 })
    .withMessage("Price mus be a positive number")
    .notEmpty()
    .withMessage("Price is required")
    .toFloat(),

  body("difficulty")
    .notEmpty()
    .withMessage("Difficulty is required")
    .custom(async (value) => {
      if (!allowedDifficulties.includes(value)) {
        throw new Error(
          "Difficulty mus be one of " + allowedDifficulties.join(", "),
        );
      }
      return true;
    }),
];

export default validateNewTour;

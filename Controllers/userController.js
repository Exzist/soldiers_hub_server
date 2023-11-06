const userService = require("../Services/userService");
const { validationResult } = require("express-validator");
const ApiError = require("../Exceptions/apiError");

class userController {
  async registration(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty) {
        return next(
          ApiError.BadRequest("Error during validation", errors.array)
        );
      }
      const { login, password } = req.body;
      const userData = await userService.registration(login, password);

      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.json(userData);
    } catch (error) {
      next(error);
    }
  }

  async login(req, res, next) {
    try {
    } catch (error) {
      next(error);
    }
  }

  async logout(req, res, next) {
    try {
    } catch (error) {
      next(error);
    }
  }

  async refresh(req, res, next) {
    try {
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new userController();
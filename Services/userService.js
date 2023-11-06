const UserModel = require("../Models/userModel");
const bcrypt = require("bcryptjs");
const tokenService = require("./tokenService");
const UserDto = require("../Dtos/userDto");
const ApiError = require("../Exceptions/apiError");
const userController = require("../Controllers/userController");

class UserService {
  async registration(login, password) {
    const candidate = await UserModel.findOne({ login });
    if (candidate) {
    }
  }

  async login() {}

  async logout() {}

  async refresh() {}
}

module.exports = new userController();

const UserModel = require("../Models/userModel");
const bcrypt = require("bcryptjs");
const tokenService = require("./tokenService");
const UserDto = require("../Dtos/userDto");
const ApiError = require("../Exceptions/apiError");
const userController = require("../Controllers/userController");
const tokenModel = require("../Models/tokenModel");

class UserService {
  async registration(login, password) {
    const candidate = await UserModel.findOne({ login });
    if (candidate) {
      throw ApiError.BadRequest("User with this login already exists");
    }
    const hashPassword = await bcrypt.hash(password, 3);
    const user = await UserModel.create({
      login,
      password: hashPassword,
    });
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }

  async login(login, password) {
    const user = await UserModel.findOne({ login });
    if (!user) {
      throw ApiError.BadRequest("User with this login doesn`t exist");
    }
    const isPassEqual = await bcrypt.compare(password, user.password);
    if (!isPassEqual) {
      throw ApiError.BadRequest("Wrong password");
    }
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });

    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }

  async logout(refreshToken) {
    const token = await tokenService.removeToken(refreshToken);
    return token;
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw ApiError.UnauthorizedError();
    }
    const userData = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await tokenService.findToken(refreshToken);
    if (!userData || !tokenFromDb) {
      throw ApiError.UnauthorizedError();
    }
    const user = await UserModel.findById(userData.id);
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });

    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }
}

module.exports = new UserService();

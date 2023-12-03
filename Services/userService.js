const UserModel = require("../Models/userModel");
const bcrypt = require("bcryptjs");
const tokenService = require("./tokenService");
const UserDto = require("../Dtos/userDto");
const ApiError = require("../Exceptions/apiError");

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
    // console.log(refreshToken);
    // console.log(userData);
    const tokenFromDb = await tokenService.findToken(refreshToken);
    // console.log(tokenFromDb);
    // console.log(
    //   refreshToken ==
    //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6ImFkbWluIiwiaWQiOiI2NTZjYmYxOWUwMDQ4M2VmMWU5ZDkzN2QiLCJpYXQiOjE3MDE2MjU4MTYsImV4cCI6MTcwNDIxNzgxNn0.3B-peBbdMakRER7KUb4hqqsBOSClm9J709ImyxTd4a8"
    // );
    if (!userData || !tokenFromDb) {
      console.log("error");

      throw ApiError.UnauthorizedError();
    }
    const user = await UserModel.findById(userData.id);
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    console.log(user);
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }
}

module.exports = new UserService();

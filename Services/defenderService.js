const Defender = require("../Models/defenderModel");
const FallenDefender = require("../Models/fallenDefenderModel");

class DefenderService {
  async getDefenders() {
    const defenders = await Defender.find();
    return defenders;
  }

  async createDefender(defender) {
    const createdDefender = await Defender.create(defender);
    return createdDefender;
  }

  async deleteDefender(id) {
    const deletedDefender = await Defender.findByIdAndDelete(id);
    return deletedDefender;
  }

  async createFallenDefender(defender) {
    const createdFallenDefender = await FallenDefender.create(defender);
    return createdFallenDefender;
  }

  async deleteFallenDefender(id) {
    const deletedFallenDefender = await FallenDefender.findByIdAndDelete(id);
    return deletedFallenDefender;
  }

  async getFallenDefenders() {
    const fallenDefenders = await FallenDefender.find();
    return fallenDefenders;
  }
}

module.exports = new DefenderService();

const DefenderService = require("../Services/defenderService");
const fs = require("fs");

class DefenderController {
  async getDefenders(req, res) {
    try {
      const defender = await DefenderService.getDefenders();
      return res.json(defender);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async createDefender(req, res) {
    console.log(req);
    try {
      const imageSrc = fs.readFileSync("uploads/" + req.file.filename);
      const defender = await DefenderService.createDefender({
        ...req.body,
        image: imageSrc,
      });
      return res.json(defender);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async deleteDefender(req, res) {
    try {
      const deletedDefender = await DefenderService.deleteDefender(
        req.params.id
      );
      return res.json(deletedDefender);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async createFallenDefender(req, res) {
    try {
      const imageSrc = fs.readFileSync("uploads/" + req.file.filename);
      const fallenDefender = await DefenderService.createFallenDefender({
        ...req.body,
        image: imageSrc,
      });
      return res.json(fallenDefender);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async deleteFallenDefender(req, res) {
    try {
      const deletedFallenDefender = await DefenderService.deleteFallenDefender(
        req.params.id
      );
      return res.json(deletedFallenDefender);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getFallenDefenders(req, res) {
    try {
      const fallenDefender = await DefenderService.getFallenDefenders();
      return res.json(fallenDefender);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

module.exports = new DefenderController();

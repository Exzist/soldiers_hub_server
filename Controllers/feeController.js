const FeeService = require("../Services/feeService");
const fs = require("fs");

class FeeController {
  async createApplication(req, res) {
    try {
      const imageSrc = fs.readFileSync("uploads/" + req.file.filename);
      const fee = await FeeService.createApplication({ ...req.body, imageSrc });
      return res.json(fee);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getApplications(req, res) {
    try {
      const applications = await FeeService.getApplicationsFee();
      return res.json(applications);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async acceptFeeApplication(req, res) {
    try {
      const acceptedApplication = await FeeService.acceptFeeApplication(
        req.params.id
      );
      return res.json(acceptedApplication);
    } catch (e) {
      console.log(e);
      res.status(500).json(e);
    }
  }

  async refuseFeeApplication(req, res) {
    try {
      const refusedApplication = await FeeService.refuseFeeApplication(
        req.params.id
      );
      return res.json(refusedApplication);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getFees(req, res) {
    try {
      const fees = await FeeService.getFees();
      return res.json(fees);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getVolunteersFees(req, res) {
    try {
      const fees = await FeeService.getVolunteersFees();
      return res.json(fees);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getMilitaryFees(req, res) {
    try {
      const fees = await FeeService.getMilitaryFees();
      return res.json(fees);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getRebuildingFees(req, res) {
    try {
      const fees = await FeeService.getRebuildingFees();
      return res.json(fees);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getDonnuFees(req, res) {
    try {
      const fees = await FeeService.getDonnuFees();
      return res.json(fees);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

module.exports = new FeeController();

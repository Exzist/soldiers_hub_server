const FeeService = require("../Services/feeService");

class FeeController {
	async createApplication(req, res) {
		try {
			const fee = await FeeService.createApplication(req.body);
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

	async getAcceptedFees(req, res) {
		try {
			const fees = await FeeService.getAcceptedFees();
			return res.json(fees);
		} catch (e) {
			res.status(500).json(e);
		}
	}
}

module.exports = new FeeController();

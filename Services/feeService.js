const Fee = require("../Models/feeModel");

class FeeService {
	async createApplication(fee) {
		const createdFeeApplication = await Fee.create(fee);
		return createdFeeApplication;
	}

	async getApplicationsFee() {
		const feeApplications = await Fee.find({ isAccepted: false });
		return feeApplications;
	}

	async acceptFeeApplication(id) {
		const acceptedFee = await Fee.findByIdAndUpdate(id, {
			isAccepted: true,
		});
		return acceptedFee;
	}
	async refuseFeeApplication(id) {
		const refusedFee = await Fee.findByIdAndDelete(id);
		return refusedFee;
	}

	async getAcceptedFees() {
		const fees = await Fee.find({ isAccepted: true });
		return fees;
	}
}

module.exports = new FeeService();

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

	async getFees() {
		const fees = await Fee.find({ isAccepted: true });
		return fees;
	}

	async getVolunteersFees() {
		const fees = await Fee.find({ isAccepted: true, type: "Волонтерський" });
		return fees;
	}

	async getMilitaryFees() {
		const fees = await Fee.find({ isAccepted: true, type: "Військовий" });
		return fees;
	}

	async getRebuildingFees() {
		const fees = await Fee.find({ isAccepted: true, type: "На відбудову" });
		return fees;
	}
}

module.exports = new FeeService();

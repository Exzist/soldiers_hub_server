const Router = require("express").Router;
const FeeController = require("../Controllers/feeController");

const feesRouter = new Router();

feesRouter.post("/createApplication", FeeController.createApplication);
feesRouter.get("/applications", FeeController.getApplications);
feesRouter.put("/acceptApplication/:id", FeeController.acceptFeeApplication);
feesRouter.delete("/refuseApplication/:id", FeeController.refuseFeeApplication);
feesRouter.get("/getVolunteersFees", FeeController.getVolunteersFees);
feesRouter.get("/getMilitaryFees", FeeController.getMilitaryFees);
feesRouter.get("/getRebuildingFees", FeeController.getRebuildingFees);
feesRouter.get("/getFees", FeeController.getFees);

module.exports = feesRouter;

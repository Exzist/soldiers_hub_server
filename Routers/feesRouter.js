const Router = require("express").Router;
const FeeController = require("../Controllers/feeController");

const feesRouter = new Router();

feesRouter.post("/createApplication", FeeController.createApplication);
feesRouter.get("/applications", FeeController.getApplications);
feesRouter.put("/acceptApplication/:id", FeeController.acceptFeeApplication);
feesRouter.delete("/refuseApplication/:id", FeeController.refuseFeeApplication);
feesRouter.get("/getFees", FeeController.getAcceptedFees);

module.exports = feesRouter;

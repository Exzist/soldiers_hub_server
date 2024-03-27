const Router = require("express").Router;
const FeeController = require("../Controllers/feeController");
const { upload } = require("../Services/uploadService");
const feesRouter = new Router();

feesRouter.post(
  "/createApplication",
  upload.single("image"),
  FeeController.createApplication
);
feesRouter.get("/applications", FeeController.getApplications);
feesRouter.put("/acceptApplication/:id", FeeController.acceptFeeApplication);
feesRouter.delete("/refuseApplication/:id", FeeController.refuseFeeApplication);
feesRouter.get("/getVolunteersFees", FeeController.getVolunteersFees);
feesRouter.get("/getMilitaryFees", FeeController.getMilitaryFees);
feesRouter.get("/getRebuildingFees", FeeController.getRebuildingFees);
feesRouter.get("/getDonnuFees", FeeController.getDonnuFees);
feesRouter.get("/getFees", FeeController.getFees);

module.exports = feesRouter;

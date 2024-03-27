const Router = require("express").Router;
const DefenderController = require("../Controllers/defenderController");
const { upload } = require("../Services/uploadService");
const defendersRouter = new Router();

defendersRouter.post(
  "/createDefender",
  upload.single("image"),
  DefenderController.createDefender
);
defendersRouter.post(
  "/createFallenDefender",
  upload.single("image"),
  DefenderController.createFallenDefender
);
defendersRouter.get("/defenders", DefenderController.getDefenders);
defendersRouter.get("/fallenDefenders", DefenderController.getFallenDefenders);
defendersRouter.delete(
  "/deleteDefender/:id",
  DefenderController.deleteDefender
);
defendersRouter.delete(
  "/deleteFallenDefender/:id",
  DefenderController.deleteFallenDefender
);

module.exports = defendersRouter;

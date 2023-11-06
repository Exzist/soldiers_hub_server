const Router = require("express").Router;
const { body } = require("express-validator");
const userController = require("../Controllers/userController");
//authmiddle
const router = new Router();

router.post(
  "/registration",
  body("password").isLength({ min: 5, max: 32 }),
  userController.registration
);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.get("/refresh", userController.refresh);

module.exports = router;

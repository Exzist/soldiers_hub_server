const Router = require("express").Router;
const body = require("express-validator");
const userController = require("../Controllers/userController");
//authmiddle
const router = new Router();

router.post("/registration", userController.registration);
router.post("/login");
router.post("/logout");
router.post("/refresh");

module.exports = router;

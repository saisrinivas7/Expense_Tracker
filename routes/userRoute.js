const express = require("express");
const {
  loginController,
  registerController,
} = require("../controllers/userController");

//router object
const router = express.Router();

//routers Post || Login Page
router.post("/login", loginController);

//Post || Register Page
router.post("/register", registerController);
module.exports = router;

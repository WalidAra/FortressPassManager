const express = require("express");
const Auth = require("../../../controllers/user/auth.controller");
const checkRegister = require("../../../middlewares/checkRegister");
const checkLogin = require("../../../middlewares/checkLogin");
const router = express.Router();

router.post("/login", checkLogin, Auth.HandleLogin);
router.post("/register", checkRegister, Auth.handleNewUser);

module.exports = router;

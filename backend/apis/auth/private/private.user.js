const express = require("express");
const router = express.Router();
const themeController = require("../../../controllers/theme/themeController");
const Auth = require("../../../controllers/user/auth.controller");

// user
router.get("/profile", Auth.Profile);
router.post("/update", Auth.UpdateProfile);
router.get("/delete", Auth.DeleteUser);

// theme
router.get("/get-user-theme", themeController.getUserTheme);
router.post("/set-user-theme", themeController.setUserTheme);

module.exports = router;

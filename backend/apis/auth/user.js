const express = require("express");
const checkAuth = require("../../middlewares/checkAuth");
const router = express.Router();

router.use("/public", require("./public/public.user"));
router.use("/private", checkAuth, require("./private/private.user"));

module.exports = router;

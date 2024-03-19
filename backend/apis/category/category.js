const express = require("express");
const categoryController = require("../../controllers/category/category.controller");
const router = express.Router();

router.get("/categories", categoryController.getAllCategory);
router.get("/categories/:id", categoryController.getCategory);

module.exports = router;

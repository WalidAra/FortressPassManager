const Category = require("../../models/category/category.model");

const categoryController = {
  getAllCategory: async (req, res) => {
    try {
      const result = await Category.getAllCategory();
      return res.status(200).json({
        status: true,
        data: result,
        message: "got all categories successfully",
      });
    } catch (error) {
      console.error("Failed to get categories (controller) : " + error.message);
      return res.status(500).json({
        status: true,
        data: result,
        message: "Internal server error ",
      });
    }
  },

  getCategory: async (req, res) => {
    const id = req.params.id;
    try {
      const result = await Category.getCategory(id);
      if (result) {
        return res.status(200).json({
          status: true,
          data: result,
          message: "got category successfully",
        });
      } else {
        return res.status(400).json({
          status: false,
          data: null,
          message: "md5ltch id mli7",
        });
      }
    } catch (error) {
      console.error(
        "Failed to get category by id (controller) : " + error.message
      );
      return res.status(500).json({
        status: true,
        data: result,
        message: "Internal server error ",
      });
    }
  },
};

module.exports = categoryController;

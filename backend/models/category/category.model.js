const prisma = require("../../config/prisma");

const Category = {
  getAllCategory: async () => {
    try {
      const categories = await prisma.category.findMany();
      return categories;
    } catch (error) {
      console.error("Could not get all categories (model): " + error.message);
    }
  },

  getCategory: async (id) => {
    try {
      const category = await prisma.category.findUnique({
        where: {
          id: id,
        },
      });
      return category;
    } catch (error) {
      console.error("Could not category by id  (model): " + error.message);
    }
  },
};

module.exports = Category;

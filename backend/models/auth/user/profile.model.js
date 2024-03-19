const prisma = require("../../../config/prisma");

const ProfileModel = async (id) => {
  try {
    const result = await prisma.user.findUnique({ where: { id: id } });
    return result;
  } catch (error) {
    console.error("cant get user profile (model) : " + error.message);
  }
};

module.exports = ProfileModel;

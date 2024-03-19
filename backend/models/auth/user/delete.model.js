const prisma = require("../../../config/prisma");

const deleteUser = async (id) => {
  try {
    const result = await prisma.user.delete({
      where: { id: id },
    });

    return result ? true : false;
  } catch (error) {
    console.error("Error deleting user:", error.message);
  }
};

module.exports = deleteUser;
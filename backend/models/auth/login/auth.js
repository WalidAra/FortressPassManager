const client = require("../../../config/prisma");
const bcrypt = require("bcrypt");

const Auth = async (email, password) => {
  try {
    const result = await client.user.findUnique({ where: { email: email } });
    if (!result) {
      return false;
    }
    const isMatch = await bcrypt.compare(password, result.password);
    return isMatch;
  } catch (error) {
    console.error("Couldn't login (auth) : ", error.message);
  }
};

module.exports = Auth;

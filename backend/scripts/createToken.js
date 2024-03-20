const jwt = require("jsonwebtoken");
const createToken = async (id) => {
  const token = await jwt.sign({ id: id }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "2d",
  });
  return token;
};

module.exports = createToken;
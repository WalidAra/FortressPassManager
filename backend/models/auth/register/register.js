const client = require("../../../config/prisma");

const Register = async (username, email, password) => {
  const newUser = {
    username,
    picture: "",
    email,
    password,
  };
  try {
    const result = await client.user.create({ data: newUser });
    return result;
  } catch (error) {
    console.error("registration Error at (register model) : ", error.message);
  }
};

module.exports = Register;

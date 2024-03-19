const prisma = require("../config/prisma");

const checkRegister = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password)
    return res.status(400).json({
      message: "All fields are required ",
      status: false,
      data: null,
    });
    
  try {
    const isUser = await prisma.user.findUnique({ where: { email: email } });
    if (isUser) {
      return res
        .status(405)
        .json({ status: false, message: "user already exists", data: null });
    }
    next();
  } catch (error) {
    console.error("error at check user middleware", error.message);
    return res.status(500).json({
      status: false,
      message: error.message,
      data: null,
    });
  }
};

module.exports = checkRegister;

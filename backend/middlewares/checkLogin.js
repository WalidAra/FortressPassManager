const checkLogin = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({
      message: "All fields are required ",
      status: false,
      data: null,
    });

  next();
};


module.exports = checkLogin;
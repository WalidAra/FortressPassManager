const checkTheme = (req, res, next) => {
  const { theme, color } = req.body;

  if (!theme || !color)
    return res.status(400).json({
      message: "All fields are required ",
      status: false,
      data: null,
    });

  next();
};

module.exports = checkTheme;

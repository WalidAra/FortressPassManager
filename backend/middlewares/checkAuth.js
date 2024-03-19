const jwt = require("jsonwebtoken");

const checkAuth = (req, res, next) => {
  const token = req.headers["fortress-auth-token"];

  if (!token) {
    return res.status(401).json({
      status: false,
      message: "Unauthorized - No token provided",
      data: null,
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
    req.user = decoded;
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      return res.status(401).json({
        status: false,
        message: "Unauthorized - Token expired",
        data: null,
      });
    }

    next(); 
  } catch (error) {
    console.error(error);
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({
        status: false,
        message: "Unauthorized - Invalid token",
        data: null,
      });
    } else {
      return res.status(500).json({
        status: false,
        message: "Internal Server Error",
        data: null,
      });
    }
  }
};

module.exports = checkAuth;

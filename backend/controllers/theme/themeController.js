const Theme = require("../../models/theme/theme.model");
const { destructTheme } = require("../../scripts/destructObj");

const themeController = {
  getUserTheme: async (req, res) => {
    const { id } = req.user;
    try {
      const result = await Theme.getUserTheme(id);
      if (result) {
        const final = destructTheme(result);
        return res.status(200).json({
          status: final ? true : false,
          message: "got user theme",
          data: final ? final : null,
        });
      } else {
        return res.status(401).json({
          status: false,
          message: "no user theme",
          data: null,
        });
      }
    } catch (error) {
      console.error(
        "Failed to get user theme (theme controller) : " + error.message
      );

      res.status(500).json({
        status: false,
        message: error.message,
        data: null,
      });
    }
  },

  setUserTheme: async (req, res) => {
    const { id } = req.user;
    try {
      const result = await Theme.setTheme(id, req.body);
      const final = destructTheme(result);
      return res.status(200).json({
        status: true,
        message: "set user theme",
        data: final,
      });
    } catch (error) {
      console.error(
        "Failed to set user theme (theme controller) : " + error.message
      );
      res.status(500).json({
        status: false,
        message: "Internal server error",
        data: null,
      });
    }
  },
};

module.exports = themeController;

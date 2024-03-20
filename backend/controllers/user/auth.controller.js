const prisma = require("../../config/prisma");
const createToken = require("../../scripts/createToken");
const { destructUser } = require("../../scripts/destructObj");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const Register = require("../../models/auth/register/register");
const ProfileModel = require("../../models/auth/user/profile.model");
const deleteUser = require("../../models/auth/user/delete.model");

const Auth = {
  DeleteUser: async (req, res) => {
    const { id } = req.user;
    try {
      const result = await deleteUser(id);
      return res.status(200).json({
        status: result ? true : false,
        message: result ? "deleted user successfully " : "failed user deletion",
        data: null,
      });
    } catch (error) {
      console.error("error deleting user ", error.message);
      return res.status(500).json({
        status: false,
        message: "Internal server error",
        data: null,
      });
    }
  },

  UpdateProfile: async (req, res) => {
    const { id } = req.user;
    try {
      const user = await prisma.user.findUnique({ where: { id: id } });
      const updatedUser = { ...user, ...req.body };

      const finalUser = await prisma.user.update({
        where: { id: id },
        data: updatedUser,
      });
      const userWithoutPassword = destructUser(finalUser);
      return res.status(200).json({
        status: true,
        message: "updated profile successfully ",
        data: userWithoutPassword,
      });
    } catch (error) {
      console.error("error updating user profile", error.message);
      return res.status(500).json({
        status: false,
        message: "Internal server error",
        data: null,
      });
    }
  },
  Profile: async (req, res) => {
    const { id } = req.user;
    try {
      const user = await ProfileModel(id);
      if (user) {
        const userWithoutPassword = destructUser(user);
        return res.status(200).json({
          status: true,
          message: "got user profile successfully ",
          data: userWithoutPassword,
        });
      } else {
        return res.status(403).json({
          status: false,
          message: "user not found",
          data: null,
        });
      }
    } catch (error) {
      console.error("error getting user profile", error.message);
      return res.status(500).json({
        status: false,
        message: "Internal server error",
        data: null,
      });
    }
  },
  HandleLogin: async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await prisma.user.findUnique({ where: { email: email } });
      if (!user) {
        return res.status(405).json({
          status: false,
          message: "there is no user with that email",
          data: null,
        });
      }
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        const updatedUser = await prisma.user.update({
          where: { id: user.id },
          data: { lastLoginAt: new Date(Date.now()) },
        });
        const token = await createToken(user.id);
        const userWithoutPassword = destructUser(updatedUser);
        return res.status(200).json({
          status: true,
          message: "User authorized successfully",
          data: userWithoutPassword,
          accessToken: token,
        });
      } else {
        return res.status(403).json({
          status: false,
          message: "incorrect password or email address",
          data: null,
        });
      }
    } catch (error) {
      console.error("error at login controller", error.message);
      return res.status(500).json({
        status: false,
        message: "Internal server error",
        data: null,
      });
    }
  },

  handleNewUser: async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPwd = await bcrypt.hash(password, saltRounds);

    try {
      const newUser = await Register(username, email, hashedPwd);
      const token = await createToken(newUser.id);
      const userWithoutPassword = destructUser(newUser);
      res.status(201).json({
        status: true,
        message: "User created successfully",
        data: userWithoutPassword,
        accessToken: token,
      });
    } catch (error) {
      console.error(
        "Handling adding new user Error (controller) : ",
        error.message
      );
      res
        .status(500)
        .json({ message: "Internal server error", status: false, data: null });
    }
  },
};

module.exports = Auth;

const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user-schema");
const verifyToken = require("../controllers/verifytoken");
require("dotenv").config();

const router = express.Router();

// sign-up route
router.post("/signup", async (req, res) => {
  try {
    const data = new User({
      user_name: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    const existinguser = await User.findOne({ email: data.email });
    if (existinguser) {
      return res.status(401).json({
        success: false,
        errors: ["This email is already taken!"],
      });
    } else {
      bcrypt
        .hash(req.body.password, 10)
        .then((hashedPassword) => {
          data.password = hashedPassword;
          data.save().then((result) => {
            setTimeout(() => {
              return res.status(200).json({
                success: true,
                message: "Account created successfully",
              });
            }, 2000);
          });
        })
        .catch((err) => {
          return res.status(401).json({
            success: false,
            errors: ["ERROR in generating password!"],
          });
        });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong!",
    });
  }
});

// login route
router.post("/login", async (req, res) => {
  try {
    const logged_user = await User.findOne({ email: req.body.email });
    if (!logged_user) {
      return res.status(401).json({
        success: false,
        errors: ["User with this email doesn't exists!"],
      });
    } else {
      bcrypt.compare(req.body.password, logged_user.password, (err, result) => {
        if (err) console.log(err);
        if (!result) {
          return res.status(401).json({
            success: false,
            errors: ["Invalid password!"],
          });
        }

        const payload = { id: logged_user._id };
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: "10h",
        });
        if (token) {
          res.cookie("token", token, {
            httpOnly: true,
            maxAge: 10 * 60 * 60 * 1000,
          });
        }
        setTimeout(() => {
          return res.status(200).json({
            success: true,
            token,
            message: "Login Successful",
          });
        }, 2000);
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong!",
    });
  }
});

// verify-token expiration
router.get("/verifytoken", verifyToken, async (req, res) => {
  const {_id, user_name: username, email, timestamp, profile_pic} = req.user
  return res.status(200).json({
    valid: true,
    message: "User Authenticated.",
    user: {
      _id,
      username,
      email,
      timestamp,
      profile_pic
    },
  });
});

// get user profile
router.get("/profile", verifyToken, (req, res) => {
  const {_id, user_name: username, email, timestamp, profile_pic} = req.user
  return res.status(200).json({
    sucess: true,
    user: {
      _id,
      username,
      email,
      timestamp,
      profile_pic
    },
  });
});

// logout
router.get("/logout", async (req, res) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(400).json({
        sucess: false,
        confirmMsg: "Failed to logout!",
      });
    } else {
      res.clearCookie("token", {
        httpOnly: true,
      });
      return res.status(200).json({
        sucess: true,
        message: "Logout Successful",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong!",
    });
  }
});

module.exports = router;

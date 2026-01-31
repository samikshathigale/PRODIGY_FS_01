import express from "express";
import {
  register,
  login,
  logout,
  sendVerifyOtp,
  verifyEmail,
  isAuthenticated,
  sendResetOtp,
  verifyResetOtp
} from "../controllers/authController.js";

import userAuth from "../middleware/userAuth.js";

const authRoutes = express.Router();

// auth
authRoutes.post("/register", register);
authRoutes.post("/login", login);
authRoutes.post("/logout", userAuth, logout);

// email verification (logged-in user)
authRoutes.post("/sendVerifyOtp", userAuth, sendVerifyOtp);
authRoutes.post("/verify-account", userAuth, verifyEmail);

// check auth
authRoutes.get("/is-auth", userAuth, isAuthenticated);

// password reset (NOT logged in)
authRoutes.post("/send-reset-otp", sendResetOtp);
authRoutes.post("/reset-password", verifyResetOtp);

export default authRoutes;

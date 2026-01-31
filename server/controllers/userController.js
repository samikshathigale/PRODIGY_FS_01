// controllers/userController.js
import UserModel from "../models/userModel.js";

export const getUserData = async (req, res) => {
  try {
    const userId = req.user.id; // ✅ corrected from req.body.userId
    const user = await UserModel.findById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.json({
      success: true,
      userData: {
        name: user.name,
        email: user.email,
        isAccountVerified: user.isAccountVerified,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

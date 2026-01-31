// middleware/userAuth.js
import jwt from "jsonwebtoken";


function userAuth(req, res, next) {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Not Authorized. Login Again",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({
        success: false,
        message: "Not Authorized. Login Again",
      });
    }

    // Attach user info to req.user
    req.user = { id: decoded.id };

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }
}

export default userAuth;

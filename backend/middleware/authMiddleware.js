import User from "../models/user.Model.js";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";

const { sign, verify } = jwt;

const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      //decodes token id
      const decoded = verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorizated, token failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorizated, no token");
  }
});

export default protect;

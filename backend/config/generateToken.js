import jwt from "jsonwebtoken";

const { sign, verify } = jwt;

const generateToken = (id) => {
  return sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

export default generateToken;

// utils/jsonwebtoken.js
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config({
  path: "./.env",
});

const privateKey = process.env.PRIVATE_KEY;
const tokenExpiration = process.env.JWT_EXPIRATION || "1h"; // Default to 1 hour

/**
 * Generates a JWT token with the given payload.
 * @param {Object} payload - The payload to sign.
 * @returns {Promise<string>} - The generated JWT token.
 */
const generateToken = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      privateKey,
      { algorithm: "RS256", expiresIn: tokenExpiration },
      (err, token) => {
        if (err) {
          reject(err);
        } else {
          resolve(token);
        }
      }
    );
  });
};

export default generateToken;

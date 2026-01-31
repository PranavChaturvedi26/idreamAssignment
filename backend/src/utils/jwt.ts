import { config } from "../config/index.js";
import jwt from "jsonwebtoken";

export type JwtPayload = {
  user: string;
  role: "ADMIN" | "CLIENT";
};

export function signToken(payload: JwtPayload) {
  return jwt.sign(payload, config.jwt.secret, {
    expiresIn: config.jwt.expiresIn,
  });
}

export function verifyToken(token: string) {
  return jwt.verify(token, config.jwt.secret) as JwtPayload;
}

import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt.js";

export type AuthedRequest = Request & {
  user?: { id: string; role: "ADMIN" | "CLIENT" };
};

export function authMiddleware(
  req: AuthedRequest,
  res: Response,
  next: NextFunction,
) {
  const header = req.headers.authorization;
  if (!header?.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ message: "Missing or invalid Authorization header" });
  }

  const token = header.split(" ")[1];
  try {
    const payload = verifyToken(token);
    req.user = { id: payload.userId, role: payload.role };
    next();
  } catch {
    return res.status(401).json({ message: "Invalid/expired token" });
  }
}

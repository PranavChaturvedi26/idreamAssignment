import type { Response, NextFunction } from "express";
import type { AuthedRequest } from "./auth.middleware.js";

export function requireAdmin(
  req: AuthedRequest,
  res: Response,
  next: NextFunction,
) {
  if (req.user?.role !== "ADMIN") {
    return res.status(403).json({ message: "Admin access required" });
  }
  next();
}

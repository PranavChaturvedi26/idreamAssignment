import Express from "express";

export function errorMiddleware(
  err: Error,
  _req: Express.Request,
  res: Express.Response,
  _next: Express.NextFunction,
) {
  console.error("Error:", err);

  const status = (err as any)?.statusCode || 500;
  const message = err?.message || "Internal Server Error";
  res.status(status).json({ message });
}

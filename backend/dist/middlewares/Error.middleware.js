import Express from "express";
export function errorMiddleware(err, _req, res, _next) {
    console.error("Error:", err);
    const status = err?.statusCode || 500;
    const message = err?.message || "Internal Server Error";
    res.status(status).json({ message });
}
//# sourceMappingURL=error.middleware.js.map
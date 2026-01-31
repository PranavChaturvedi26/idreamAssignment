import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import authRoutes from "./routes/auth.route.js";
import adminRoutes from "./routes/admin.route.js";
import projectRoutes from "./routes/project.route.js";
import { errorMiddleware } from "./middlewares/Error.middleware.js";
const app = express();
// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
// Health check
app.get("/health", (req, res) => {
    res.status(200).json({ status: "ok", timestamp: new Date().toISOString() });
});
// Routes
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/projects", projectRoutes);
// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: "Not found" });
});
// Error handler
app.use(errorMiddleware);
export default app;
//# sourceMappingURL=index.js.map
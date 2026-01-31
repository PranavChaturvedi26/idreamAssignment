import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { requireAdmin } from "../middlewares/requireAdmin.middleware.js";
import {
  createProject,
  createUser,
  viewAllProjects,
  viewAllUsers,
  listProjectRequests,
  reviewProjectRequest,
} from "../controllers/admin.controller.js";

const adminRoutes = Router();

adminRoutes.use(authMiddleware, requireAdmin);

adminRoutes.post("/users", createUser);
adminRoutes.get("/users", viewAllUsers);

adminRoutes.post("/projects", createProject);
adminRoutes.get("/projects", viewAllProjects);

adminRoutes.get("/project-requests", listProjectRequests);
adminRoutes.patch("/project-requests/:id", reviewProjectRequest);

export default adminRoutes;

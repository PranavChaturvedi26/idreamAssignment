import mongoose from "mongoose";
import { Project } from "../models/project.model.js";
import { ProjectRequest } from "../models/projectRequest.model.js";
import type { AuthedRequest } from "../middlewares/auth.middleware.js";
import type { Response, NextFunction } from "express";

export const listProjects = async (
  req: AuthedRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    return res.json({ projects });
  } catch (err) {
    next(err);
  }
};

export const requestProject = async (
  req: AuthedRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id: projectId } = req.params;

    // ✅ validate ObjectId early (prevents CastError)
    if (!mongoose.Types.ObjectId.isValid(projectId)) {
      return res.status(400).json({ message: "Invalid project id" });
    }

    const project = await Project.findById(projectId);
    if (!project) return res.status(404).json({ message: "Project not found" });

    // ✅ Mongoose will cast string to ObjectId automatically
    const existing = await ProjectRequest.findOne({
      projectId,
      requestedBy: req.user!.id,
      status: "PENDING",
    });

    if (existing) {
      return res.status(409).json({
        message: "You already have a pending request for this project",
      });
    }

    const pr = await ProjectRequest.create({
      projectId,
      requestedBy: req.user!.id,
      status: "PENDING",
    });

    return res
      .status(201)
      .json({ message: "Project request created", request: pr });
  } catch (err) {
    next(err);
  }
};

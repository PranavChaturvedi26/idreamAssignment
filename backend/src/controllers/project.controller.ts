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
    //  force params.id into a string safely
    const rawId = (req.params as { id?: string }).id;

    if (!rawId) {
      return res.status(400).json({ message: "Project id is required" });
    }

    if (!mongoose.Types.ObjectId.isValid(rawId)) {
      return res.status(400).json({ message: "Invalid project id" });
    }

    const projectId = new mongoose.Types.ObjectId(rawId);
    const userId = new mongoose.Types.ObjectId(req.user!.id);

    const project = await Project.findById(projectId);
    if (!project) return res.status(404).json({ message: "Project not found" });

    //  types match schema: projectId: ObjectId, requestedBy: ObjectId
    const existing = await ProjectRequest.findOne({
      projectId,
      requestedBy: userId,
      status: "PENDING",
    });

    if (existing) {
      return res.status(409).json({
        message: "You already have a pending request for this project",
      });
    }

    const pr = await ProjectRequest.create({
      projectId,
      requestedBy: userId,
      status: "PENDING",
    });

    return res
      .status(201)
      .json({ message: "Project request created", request: pr });
  } catch (err) {
    next(err);
  }
};

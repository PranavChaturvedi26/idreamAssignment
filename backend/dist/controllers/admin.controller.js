import bcrypt from "bcrypt";
import { z } from "zod";
import { User } from "../models/user.models.js";
import { Project } from "../models/project.model.js";
import { ProjectRequest } from "../models/projectRequest.model.js";
const createUserSchema = z.object({
    username: z.string().min(3),
    password: z.string().min(6),
    role: z.enum(["ADMIN", "CLIENT"]).default("CLIENT"),
});
const createProjectSchema = z.object({
    name: z.string().min(2),
    description: z.string().optional().default(""),
});
const reviewRequestSchema = z.object({
    action: z.enum(["APPROVE", "DENY"]),
});
export const createUser = (async (req, res) => {
    const { username, password, role } = createUserSchema.parse(req.body);
    const existing = await User.findOne({ username });
    if (existing)
        return res.status(409).json({ message: "Username already exists" });
    const passwordHash = await bcrypt.hash(password, 10);
    const user = await User.create({ username, password: passwordHash, role });
    return res.status(201).json({
        message: "User created",
        user: { id: user._id, username: user.username, role: user.role },
    });
});
export const viewAllUsers = (async (_req, res) => {
    const users = await User.find({}, { passwordHash: 0 }).sort({
        createdAt: -1,
    });
    return res.json({ users });
});
export const createProject = (async (req, res) => {
    const { name, description } = createProjectSchema.parse(req.body);
    const project = await Project.create({
        name,
        description,
        createdBy: req.user.id,
    });
    return res.status(201).json({ message: "Project created", project });
});
export const viewAllProjects = (async (_req, res) => {
    const projects = await Project.find().sort({ createdAt: -1 });
    return res.json({ projects });
});
export const listProjectRequests = (async (_req, res) => {
    const requests = await ProjectRequest.find()
        .populate("projectId", "name")
        .populate("requestedBy", "username role")
        .sort({ createdAt: -1 });
    return res.json({ requests });
});
export const reviewProjectRequest = (async (req, res) => {
    const { action } = reviewRequestSchema.parse(req.body);
    const requestId = req.params.id;
    const pr = await ProjectRequest.findById(requestId);
    if (!pr)
        return res.status(404).json({ message: "Request not found" });
    if (pr.status !== "PENDING") {
        return res.status(400).json({ message: `Request already ${pr.status}` });
    }
    pr.status = action === "APPROVE" ? "APPROVED" : "DENIED";
    pr.reviewedBy = req.user.id;
    pr.reviewedAt = new Date();
    await pr.save();
    return res.json({
        message: `Request ${pr.status.toLowerCase()}`,
        request: pr,
    });
},
);
//# sourceMappingURL=admin.controller.js.map
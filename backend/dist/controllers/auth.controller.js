import bcrypt from "bcrypt";
import { z } from "zod";
import { User } from "../models/user.models.js";
import { signToken } from "../utils/jwt.js";
const signupSchema = z.object({
    username: z.string().min(3),
    password: z.string().min(6),
});
const loginSchema = z.object({
    username: z.string().min(3),
    password: z.string().min(6),
});
export const signup = async (req, res, next) => {
    try {
        const { username, password } = signupSchema.parse(req.body);
        const existing = await User.findOne({ username });
        if (existing)
            return res.status(409).json({ message: "Username already exists" });
        const passwordHash = await bcrypt.hash(password, 10);
        // Default role = CLIENT admin should be created manually
        const user = await User.create({
            username,
            password: passwordHash,
            role: "CLIENT",
        });
        const token = signToken(user);
        return res.status(201).json({
            message: "Signup successful",
            token,
            user: { id: user._id, username: user.username, role: user.role },
        });
    }
    catch (err) {
        next(err);
    }
};
export const login = async (req, res, next) => {
    try {
        const { username, password } = loginSchema.parse(req.body);
        const user = await User.findOne({ username });
        if (!user)
            return res.status(401).json({ message: "Invalid credentials" });
        const ok = await bcrypt.compare(password, user.password);
        if (!ok)
            return res.status(401).json({ message: "Invalid credentials" });
        const token = signToken(user.username.toString());
        return res.json({
            message: "Login successful",
            token,
            user: { id: user._id, username: user.username, role: user.role },
        });
    }
    catch (err) {
        next(err);
    }
};
//# sourceMappingURL=auth.controller.js.map
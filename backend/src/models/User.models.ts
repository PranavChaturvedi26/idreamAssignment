import mongoose, { Schema } from "mongoose";
export type UserRole = "ADMIN" | "CLIENT";

const UserSchema = new Schema(
  {
    username: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["ADMIN", "CLIENT"], default: "CLIENT" },
  },
  { timestamps: true },
);
export const User = mongoose.model("Users", UserSchema);

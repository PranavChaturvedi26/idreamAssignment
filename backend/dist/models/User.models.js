import mongoose, { Schema } from "mongoose";
const UserSchema = new Schema({
    username: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["ADMIN", "CLIENT"], default: "CLIENT" },
}, { timestamps: true });
export const User = mongoose.model("Users", UserSchema);
//# sourceMappingURL=User.models.js.map
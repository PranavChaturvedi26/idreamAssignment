import mongoose, { Schema } from "mongoose";
const activityLogSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    method: { type: String, required: true },
    path: { type: String, required: true },
    statusCode: { type: Number, required: true },
    durationMs: { type: Number, required: true },
    ip: { type: String, default: "" },
    userAgent: { type: String, default: "" },
}, { timestamps: true });
export const ActivityLog = mongoose.model("ActivityLog", activityLogSchema);
//# sourceMappingURL=ActivityLog.model.js.map
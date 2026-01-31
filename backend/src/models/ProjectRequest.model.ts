import mongoose, { Schema } from "mongoose";

const projectRequestSchema = new Schema(
  {
    projectId: { type: Schema.Types.ObjectId, ref: "Projects", required: true },
    requestedBy: { type: Schema.Types.ObjectId, ref: "Users", required: true },
    status: {
      type: String,
      enum: ["PENDING", "APPROVED", "DENIED"],
      default: "PENDING",
    },
    reviewedBy: { type: Schema.Types.ObjectId, ref: "Users" },
    reviewedAt: { type: Date },
  },
  { timestamps: true },
);

export const ProjectRequest = mongoose.model(
  "ProjectRequests",
  projectRequestSchema,
);

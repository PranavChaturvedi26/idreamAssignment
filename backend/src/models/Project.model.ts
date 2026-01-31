import mongoose, { Schema } from "mongoose";
//New Schema to store the timelines, id should be false for nested schema
const timelineSchema = new Schema(
  {
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
  },
  { _id: false },
);

const projectSchema = new Schema(
  {
    projectName: { type: String, required: true, trim: true, minlength: 2 },
    emailAddress: { type: String, required: true, lowercase: true, trim: true },
    contactNumber: { type: String, required: true, trim: true }, // store as string (keeps leading zeros, +91, etc.)
    timeline: { type: timelineSchema, required: true },

    createdBy: { type: Schema.Types.ObjectId, ref: "Users", required: true },
  },
  { timestamps: true },
);

// fast search index on projectName and emailAddress
projectSchema.index({ projectName: 1, emailAddress: 1 });

export const Project = mongoose.model("Projects", projectSchema);

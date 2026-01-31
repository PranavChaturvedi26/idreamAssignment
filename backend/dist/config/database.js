import { config } from "./index.js";
import mongoose from "mongoose";
export const connectDatabase = async () => {
    try {
        await mongoose.connect(config.mongodb.uri);
        console.log("MongoDB connected successfully");
    }
    catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};
mongoose.connection.on("disconnected", () => {
    console.log("Mongoose disconnected from DB");
});
mongoose.connection.on("error", (err) => {
    console.error("Mongoose connection error:", err);
});
//# sourceMappingURL=database.js.map
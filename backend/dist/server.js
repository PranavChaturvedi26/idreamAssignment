import app from "./index.js";
import { config } from "./config/index.js";
import { connectDatabase } from "./config/database.js";
async function startServer() {
    try {
        // Connect to MongoDB
        await connectDatabase();
        // Start Express server
        app.listen(config.port, () => {
            console.log(`Server running on port ${config.port}`);
            console.log(`Health check: http://localhost:${config.port}/health`);
        });
    }
    catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
}
// Handle graceful shutdown
process.on("SIGTERM", () => {
    console.log("SIGTERM received. Shutting down gracefully...");
    process.exit(0);
});
process.on("SIGINT", () => {
    console.log("SIGINT received. Shutting down gracefully...");
    process.exit(0);
});
startServer();
//# sourceMappingURL=server.js.map
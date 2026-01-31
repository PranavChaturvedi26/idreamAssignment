import dotenv from "dotenv";

dotenv.config();

export const config = {
  port: parseInt(process.env.PORT || "3000", 10),

  mongodb: {
    uri: process.env.MONGODB_URI || "mongodb://localhost:27017/idream_db",
  },
  jwt: {
    secret: process.env.JWT_SECRET || "abjhsadbajbd",
    expiresIn: String(process.env.JWT_EXPIRES_IN) || "1d",
  },
};

import { config } from "../config/index.js";
import jwt from "jsonwebtoken";
export function signToken(payload) {
    return jwt.sign({ payload }, config.jwt.secret, {
        expiresIn: config.jwt.expiresIn,
    });
}
export function verifyToken(token) {
    return jwt.verify(token, config.jwt.secret);
}
//# sourceMappingURL=jwt.js.map
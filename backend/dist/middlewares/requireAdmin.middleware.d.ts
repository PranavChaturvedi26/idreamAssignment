import type { Response, NextFunction } from "express";
import type { AuthedRequest } from "./auth.middleware.js";
export declare function requireAdmin(req: AuthedRequest, res: Response, next: NextFunction): Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=requireAdmin.middleware.d.ts.map
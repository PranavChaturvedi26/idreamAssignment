import type { AuthedRequest } from "../middlewares/auth.middleware.js";
import type { Response, NextFunction } from "express";
export declare const listProjects: (req: AuthedRequest, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const requestProject: (req: AuthedRequest, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=project.controller.d.ts.map
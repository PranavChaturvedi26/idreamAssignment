import type { AuthedRequest } from "../middlewares/auth.middleware.js";
import type { Response } from "express";
export declare const createUser: (req: AuthedRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const viewAllUsers: (req: AuthedRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const createProject: (req: AuthedRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const viewAllProjects: (req: AuthedRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const listProjectRequests: (req: AuthedRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const reviewProjectRequest: (req: AuthedRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=admin.controller.d.ts.map
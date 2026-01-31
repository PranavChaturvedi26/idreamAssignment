import type { AuthedRequest } from "../middlewares/auth.middleware.js";
export declare const createUser: (req: AuthedRequest, res: Response) => Promise<any>;
export declare const viewAllUsers: (_req: any, res: any) => Promise<any>;
export declare const createProject: (req: AuthedRequest, res: any) => Promise<any>;
export declare const viewAllProjects: (_req: any, res: any) => Promise<any>;
export declare const listProjectRequests: (_req: any, res: any) => Promise<any>;
export declare const reviewProjectRequest: any;
//# sourceMappingURL=admin.controller.d.ts.map
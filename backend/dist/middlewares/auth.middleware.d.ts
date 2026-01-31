import type { Request, Response, NextFunction } from "express";
export type AuthedRequest = Request & {
    user?: {
        id: string;
        role: "ADMIN" | "CLIENT";
    };
};
export declare function authMiddleware(req: AuthedRequest, res: Response, next: NextFunction): Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=auth.middleware.d.ts.map
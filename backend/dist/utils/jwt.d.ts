export type JwtPayload = {
    user: string;
    role: "ADMIN" | "CLIENT";
};
export declare function signToken(payload: string): string;
export declare function verifyToken(token: string): JwtPayload;
//# sourceMappingURL=jwt.d.ts.map
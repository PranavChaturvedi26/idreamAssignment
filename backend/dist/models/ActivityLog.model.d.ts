import mongoose from "mongoose";
export declare const ActivityLog: mongoose.Model<{
    method: string;
    path: string;
    statusCode: number;
    durationMs: number;
    ip: string;
    userAgent: string;
    userId?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    method: string;
    path: string;
    statusCode: number;
    durationMs: number;
    ip: string;
    userAgent: string;
    userId?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    method: string;
    path: string;
    statusCode: number;
    durationMs: number;
    ip: string;
    userAgent: string;
    userId?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    method: string;
    path: string;
    statusCode: number;
    durationMs: number;
    ip: string;
    userAgent: string;
    userId?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    method: string;
    path: string;
    statusCode: number;
    durationMs: number;
    ip: string;
    userAgent: string;
    userId?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>> & Omit<{
    method: string;
    path: string;
    statusCode: number;
    durationMs: number;
    ip: string;
    userAgent: string;
    userId?: mongoose.Types.ObjectId | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        method: string;
        path: string;
        statusCode: number;
        durationMs: number;
        ip: string;
        userAgent: string;
        userId?: mongoose.Types.ObjectId | null;
    } & mongoose.DefaultTimestampProps, {
        id: string;
    }, mongoose.ResolveSchemaOptions<{
        timestamps: true;
    }>> & Omit<{
        method: string;
        path: string;
        statusCode: number;
        durationMs: number;
        ip: string;
        userAgent: string;
        userId?: mongoose.Types.ObjectId | null;
    } & mongoose.DefaultTimestampProps & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    method: string;
    path: string;
    statusCode: number;
    durationMs: number;
    ip: string;
    userAgent: string;
    userId?: mongoose.Types.ObjectId | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    method: string;
    path: string;
    statusCode: number;
    durationMs: number;
    ip: string;
    userAgent: string;
    userId?: mongoose.Types.ObjectId | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=ActivityLog.model.d.ts.map
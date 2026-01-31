import mongoose from "mongoose";
export declare const ProjectRequest: mongoose.Model<{
    projectId: mongoose.Types.ObjectId;
    requestedBy: mongoose.Types.ObjectId;
    status: "PENDING" | "APPROVED" | "DENIED";
    reviewedBy?: mongoose.Types.ObjectId | null;
    reviewedAt?: NativeDate | null;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    projectId: mongoose.Types.ObjectId;
    requestedBy: mongoose.Types.ObjectId;
    status: "PENDING" | "APPROVED" | "DENIED";
    reviewedBy?: mongoose.Types.ObjectId | null;
    reviewedAt?: NativeDate | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    projectId: mongoose.Types.ObjectId;
    requestedBy: mongoose.Types.ObjectId;
    status: "PENDING" | "APPROVED" | "DENIED";
    reviewedBy?: mongoose.Types.ObjectId | null;
    reviewedAt?: NativeDate | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    projectId: mongoose.Types.ObjectId;
    requestedBy: mongoose.Types.ObjectId;
    status: "PENDING" | "APPROVED" | "DENIED";
    reviewedBy?: mongoose.Types.ObjectId | null;
    reviewedAt?: NativeDate | null;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    projectId: mongoose.Types.ObjectId;
    requestedBy: mongoose.Types.ObjectId;
    status: "PENDING" | "APPROVED" | "DENIED";
    reviewedBy?: mongoose.Types.ObjectId | null;
    reviewedAt?: NativeDate | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>> & Omit<{
    projectId: mongoose.Types.ObjectId;
    requestedBy: mongoose.Types.ObjectId;
    status: "PENDING" | "APPROVED" | "DENIED";
    reviewedBy?: mongoose.Types.ObjectId | null;
    reviewedAt?: NativeDate | null;
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
        projectId: mongoose.Types.ObjectId;
        requestedBy: mongoose.Types.ObjectId;
        status: "PENDING" | "APPROVED" | "DENIED";
        reviewedBy?: mongoose.Types.ObjectId | null;
        reviewedAt?: NativeDate | null;
    } & mongoose.DefaultTimestampProps, {
        id: string;
    }, mongoose.ResolveSchemaOptions<{
        timestamps: true;
    }>> & Omit<{
        projectId: mongoose.Types.ObjectId;
        requestedBy: mongoose.Types.ObjectId;
        status: "PENDING" | "APPROVED" | "DENIED";
        reviewedBy?: mongoose.Types.ObjectId | null;
        reviewedAt?: NativeDate | null;
    } & mongoose.DefaultTimestampProps & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    projectId: mongoose.Types.ObjectId;
    requestedBy: mongoose.Types.ObjectId;
    status: "PENDING" | "APPROVED" | "DENIED";
    reviewedBy?: mongoose.Types.ObjectId | null;
    reviewedAt?: NativeDate | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    projectId: mongoose.Types.ObjectId;
    requestedBy: mongoose.Types.ObjectId;
    status: "PENDING" | "APPROVED" | "DENIED";
    reviewedBy?: mongoose.Types.ObjectId | null;
    reviewedAt?: NativeDate | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=ProjectRequest.model.d.ts.map
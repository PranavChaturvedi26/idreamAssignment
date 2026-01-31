import mongoose from "mongoose";
export declare const Project: mongoose.Model<{
    projectName: string;
    emailAddress: string;
    contactNumber: string;
    timeline: {
        startDate: NativeDate;
        endDate: NativeDate;
    };
    createdBy: mongoose.Types.ObjectId;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    projectName: string;
    emailAddress: string;
    contactNumber: string;
    timeline: {
        startDate: NativeDate;
        endDate: NativeDate;
    };
    createdBy: mongoose.Types.ObjectId;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    projectName: string;
    emailAddress: string;
    contactNumber: string;
    timeline: {
        startDate: NativeDate;
        endDate: NativeDate;
    };
    createdBy: mongoose.Types.ObjectId;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    projectName: string;
    emailAddress: string;
    contactNumber: string;
    timeline: {
        startDate: NativeDate;
        endDate: NativeDate;
    };
    createdBy: mongoose.Types.ObjectId;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    projectName: string;
    emailAddress: string;
    contactNumber: string;
    timeline: {
        startDate: NativeDate;
        endDate: NativeDate;
    };
    createdBy: mongoose.Types.ObjectId;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>> & Omit<{
    projectName: string;
    emailAddress: string;
    contactNumber: string;
    timeline: {
        startDate: NativeDate;
        endDate: NativeDate;
    };
    createdBy: mongoose.Types.ObjectId;
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
        projectName: string;
        emailAddress: string;
        contactNumber: string;
        timeline: {
            startDate: NativeDate;
            endDate: NativeDate;
        };
        createdBy: mongoose.Types.ObjectId;
    } & mongoose.DefaultTimestampProps, {
        id: string;
    }, mongoose.ResolveSchemaOptions<{
        timestamps: true;
    }>> & Omit<{
        projectName: string;
        emailAddress: string;
        contactNumber: string;
        timeline: {
            startDate: NativeDate;
            endDate: NativeDate;
        };
        createdBy: mongoose.Types.ObjectId;
    } & mongoose.DefaultTimestampProps & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    projectName: string;
    emailAddress: string;
    contactNumber: string;
    timeline: {
        startDate: NativeDate;
        endDate: NativeDate;
    };
    createdBy: mongoose.Types.ObjectId;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    projectName: string;
    emailAddress: string;
    contactNumber: string;
    timeline: {
        startDate: NativeDate;
        endDate: NativeDate;
    };
    createdBy: mongoose.Types.ObjectId;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=project.model.d.ts.map
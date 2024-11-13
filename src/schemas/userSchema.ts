import mongoose, { Schema } from 'mongoose';
import { IResource, IUser  } from '../models/userModel';



const UserSchema = new Schema<IUser>(
    {
        username: {
            type: String,
            required: [true, "Please enter username"],
            trim: true
        },
        password: {
            type: String,
            required: [true, "Please enter password"],
            trim: true
        },
        organizationName: {
            type: String,
            required: [true, "Please enter organization name"],
            trim: true
        },
        zone: {
            type: String,
            trim: true
        },
        resources:{
            type: [Schema.Types.ObjectId],
            ref: "Resources",
        } ,
       
        budget: {
            type: Number,
            trim: true
        }
       
    }
);




export default mongoose.model("User",UserSchema);


import mongoose, { Schema } from 'mongoose';
import { IUser  } from '../models/userModel';
import resourceSchema from './resourceSchema';


  




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
            required: [true, "Please enter zone"],
            trim: true
        },
        resources: {
            type: [resourceSchema],
            trim: true
        },
        budget: {
            type: Number,
            required: [true, "Please enter budget"],
            trim: true
        }
       
    }
);




export default mongoose.model("User",UserSchema);


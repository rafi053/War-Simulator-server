import mongoose, { Schema } from 'mongoose';
import { IUser } from '../models/userModel';


  




const UserSchema = new Schema<IUser>(
    {
        username: {
            type: String,
            required: [true, "Please enter username"],
            trim: true,
            unique: true
        },
        password: {
            type: String,
            required: [true, "Please enter password"],
            trim: true
        },
        isAdmin: {
            type: Boolean,
            default: false
        },
        hasVoted: {
            type: Boolean,
            default: false
        },
        votedFor: {
            type: Schema.Types.ObjectId,
            ref: "Candidate",
            default: null
        },
       
    }
    
       
);




export default mongoose.model("User",UserSchema);


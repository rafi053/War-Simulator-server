import mongoose, { Schema } from 'mongoose';
import { IMissiles, IResource } from '../models/userModel';

const  ResourcesSchema = new Schema<IResource>(
    {
        missile: {
            type: Schema.Types.ObjectId,
            ref: "Missiles",
            required: [true, "Please enter candidate name"],
            trim: true
        },
        amount: {
            type: Number,
            required: [true, "Please enter candidate description"],
            trim: true
        },
    }
);






export default mongoose.model("Resources", ResourcesSchema);


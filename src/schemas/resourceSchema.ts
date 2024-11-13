import mongoose, { Schema } from 'mongoose';
import { IMissiles, IResource } from '../models/userModel';


const MissilesSchema = new Schema<IMissiles>(
    {
        name: {
            type: String,
            required: [true, "Please enter candidate name"],
            trim: true
        },
        description: {
            type: String,
            required: [true, "Please enter candidate description"],
            trim: true
        },
        speed: {
            type: Number,
            required: [true, "Please enter candidate speed"],
            trim: true
        },
        intercepts: {
            type: [String],
            required: [true, "Please enter candidate intercepts"],
            trim: true
        },
        price: {
            type: Number,
            required: [true, "Please enter candidate price"],
            trim: true
        }
    }
);

const  ResourcesSchema = new Schema<IResource>(
    {
       missile: [MissilesSchema],
        amount: {
            type: Number,
            required: [true, "Please enter candidate description"],
            trim: true
        },
    }
);






export default mongoose.model("Resources", ResourcesSchema);


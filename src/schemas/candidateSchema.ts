import mongoose, { Schema } from 'mongoose';
import { ICandidate } from "../models/candidateModel";

const CandidatesSchema = new Schema<ICandidate>(
    {
        name: {
            type: String,
            required: [true, "Please enter candidate name"],
            trim: true
        },
        image: {
            type: String,
            required: [true, "Please enter candidate image"],
            trim: true
        },
        votes: {
            type: Number,
            required: [true, "Please enter candidate votes"],
            trim: true
        }
    }
);






export default mongoose.model("Candidate", CandidatesSchema);


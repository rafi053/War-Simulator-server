import  { Document, Types } from 'mongoose';

  export interface ICandidate extends Document{
    _id: Types.ObjectId;
    name: string;
    image: string;
    votes: number;
  }
  
  
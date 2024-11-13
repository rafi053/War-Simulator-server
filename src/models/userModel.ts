import { Types, Document } from "mongoose";

export interface IUser extends Document {
  username: string;
  password: string;
  isAdmin: boolean;
  hasVoted: boolean;
  votedFor: string | null;
}
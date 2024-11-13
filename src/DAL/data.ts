import { IUser } from "../models/userModel";
import { ICandidate }  from "../models/candidateModel"
import userSchema from "../schemas/userSchema";
import candidateSchema from "../schemas/candidateSchema";



export const createUser = async (user: IUser): Promise<IUser | undefined> => {
        try{
        const userToAdd: IUser = await userSchema.create(user);
        return userToAdd;
        }
        catch(error){
            console.log(error);
        }
};

export const findUserById = async (id: string): Promise<IUser | null> => {
        const userFind: IUser | null = await userSchema.findById({ _id: id });
        return userFind;
};

export const findUserByUsername = async (username: string): Promise<IUser | null> => {
        const userFind: IUser | null = await userSchema.findOne({ username: username });
        return userFind;
}


export const getAllUsers = async (): Promise<IUser[] | null> => {
        const users: IUser[] | null = await userSchema.find();
        return users;
};

export const getCandidates = async (): Promise<ICandidate[] | null> => {
        const candidates: ICandidate[] | null = await candidateSchema.find();
        return candidates;
}


export const deleteUser = async (id: string): Promise<IUser[] | null> => {
        await userSchema.deleteOne({ _id: id });
        const users: IUser[] | null = await userSchema.find();
        return users;
};
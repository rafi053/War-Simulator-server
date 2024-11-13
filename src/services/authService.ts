import  { IUser } from "../models/userModel";
import bcrypt from "bcrypt"
import userSchema from "../schemas/userSchema";


import { createUser, findUserByUsername } from "../DAL/data";

export const authRegister = async (username: string, password: string): Promise<IUser | undefined> => {
  
  const existingUser: IUser | null = await findUserByUsername(username);
  
  if (existingUser) {
    console.log("Username already exists.");
  }

  const hashedPassword = bcrypt.hashSync(password, 10);

  const newUser = new userSchema ({
    username: username,
    password: hashedPassword,
    
    });
   
    const userToAdd: IUser | undefined = await createUser(newUser);  
    return userToAdd;
    
  };


export const authLogin = async (username: string, password: string): Promise<IUser | null> => {
  const userFind: IUser | null = await findUserByUsername(username );
  if (!userFind) {
    return null;
  
  }
  const comparePassword =  bcrypt.compare(password ,userFind.password);
  if(!comparePassword){
    return null;
  }
  return userFind;
};
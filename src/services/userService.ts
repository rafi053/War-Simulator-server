import  { IUser } from "../models/userModel";
import { getAllUsers } from "../DAL/data";


export const getAllUsersService = async (): Promise<IUser[] | null> => {
  const users: IUser[] | null = await getAllUsers();
  return users;
};
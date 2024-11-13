import { NextFunction, Request, Response } from "express";
import { IUser } from "../models/userModel";
import { getAllUsersService } from "../services/userService";

export const getAllUsers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try{
    const users: IUser[] | null = await getAllUsersService();
    res.json({ users });
  } catch (error) {
    next(error);
  }
};
import { NextFunction, Request, Response } from "express";
import { informationService } from "../services/informationService";


export const information = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try{
    const { username } = req.body;
    const information   = await informationService(username);
    res.json( information );
  } catch (error) {
    next(error);
  }
};
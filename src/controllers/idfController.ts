import { NextFunction, Request, Response } from "express";
import { getAllInformation } from "../services/informationService";


export const information = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try{
    const information   = await getAllInformation();
    res.json( information );
  } catch (error) {
    next(error);
  }
};
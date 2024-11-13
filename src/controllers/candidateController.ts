import { NextFunction, Request, Response } from "express";
import { getCandidates } from "../DAL/data";
import { ICandidate } from "../models/candidateModel";

export const candidates = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try{
    const candidates: ICandidate[] | null = await getCandidates();
    res.json( candidates );
  } catch (error) {
    next(error);
  }
};
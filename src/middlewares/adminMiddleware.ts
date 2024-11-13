import { NextFunction, Request, Response } from "express";

const adminMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if ((req as any).user && (req as any).user.isAdmin) next();
  else res.status(403).json({ message: "Access denied" });
};

export default adminMiddleware;

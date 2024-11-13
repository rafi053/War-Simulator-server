import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from "dotenv"
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET as  string;
console.log("middleware",JWT_SECRET);

const authMiddleware = (req: Request, res: Response, next: NextFunction):void => {
  const authHeader = req.headers['authorization'];
  let token: string | null = null
  if(authHeader){
    token = authHeader && authHeader.split(' ')[1]; // Assuming Bearer token
  }else{
    token = req.cookies.token
  }
 console.log("token: ",token)
  if (!token) {
     res.status(401).json({ message: 'Access token missing' });
     return
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    (req as any).user = decoded; // Attach user info to request object
    next();
  } catch (error) {
    res.status(403).json({ message: 'Invalid token' });
  }
};

export default authMiddleware;

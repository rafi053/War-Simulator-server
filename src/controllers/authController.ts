import { Request, Response, NextFunction } from 'express';
import { authRegister, authLogin } from '../services/authService';
import jwt from 'jsonwebtoken';
import { IUser } from '../models/userModel';
import dotenv from "dotenv"
import { log } from 'console';

dotenv.config();

const JWT_SECRET:string = process.env.JWT_SECRET as string;


export const register = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { username, password, organizationName } = req.body;
    if (organizationName === "IDF") {
      const { zone } = req.body;
      const createUser: IUser | undefined = await authRegister( username, password, organizationName, zone); 
      res.json( createUser );
    }
    else {
      const createUser: IUser | undefined = await authRegister( username, password, organizationName);
      res.json( createUser );
    }
  } catch (error) {
    next(error);
  }
};

export const login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { username, password } = req.body;
    const user = await authLogin(username, password);
    if (user) {
      const token = jwt.sign({  userName: user.username, id: user._id, organizationName: user.organizationName }, JWT_SECRET, { expiresIn: '1h' });
      res.cookie('token', token, { httpOnly: true ,  maxAge: 3600000 } );
      res.json({ token });
    } else {
      res.status(401).json({ message: 'Authentication failed' });
    }
  } catch (error) {
    next(error);
  }
};




import express, { Application } from 'express';
import  authMiddleware  from "./middlewares/authMiddleware";
import userRouter from './routes/usersRouter';
import authRouter from './routes/authRouter';
import candidatesRouter from './routes/candidatesRouter';
import adminMiddleware from "./middlewares/adminMiddleware";
import connectDb from './config/db';
import cookieParser from "cookie-parser";
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './swagger';
import dotenv from "dotenv"
import cors from "cors"

dotenv.config();
const PORT = process.env.PORT ? process.env.PORT : 3000;

const app: Application = express();

app.use(cors())



connectDb();
app.use(cookieParser())

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/", authRouter);


app.use(authMiddleware);
app.use('/candidates', candidatesRouter);
app.use(adminMiddleware);
app.use('/users', userRouter);
   


app.listen(PORT, ()=> {console.log(`server listen to port:  ${PORT}`);
});

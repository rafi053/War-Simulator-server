import express, { Router } from 'express';

import { getAllUsers} from "../controllers/userController";

const router: Router = express.Router();

router.route("/").get(getAllUsers);

export default router;

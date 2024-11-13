import express, { Router } from 'express';

import { candidates } from "../controllers/candidateController";

const router: Router = express.Router();

router.route("/").get(candidates);

export default router;

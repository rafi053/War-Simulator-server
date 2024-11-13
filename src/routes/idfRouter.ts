import express from "express";
import { information } from "../controllers/idfController";
const router = express.Router();

router.route("information").get(information);

export default router;

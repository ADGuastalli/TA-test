import express from "express";
import { getData } from "../controllers/controllers";

const router = express.Router();

router.get("/soyTA", getData);

export default { router };

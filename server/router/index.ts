import express from "express";
import todoRouter from "./todoRouter";
import boardRouter from "./boardRouter";
import chartRouter from "./chartRouter";

const router = express.Router();

router.use("/todo", todoRouter);
router.use("/board", boardRouter);
router.use("/chart", chartRouter);

export default router;
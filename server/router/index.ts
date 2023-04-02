import express from "express";
import todoRouter from "./todoRouter";
import boardRouter from "./boardRouter";

const router = express.Router();

router.use("/todo", todoRouter);
router.use("/board", boardRouter);

export default router;
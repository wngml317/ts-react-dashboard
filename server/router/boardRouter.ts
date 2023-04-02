import express from "express";
import { boardAdd, boardAll, boardRemove, boardUpdate } from "../api/board";

const router = express.Router();

router.post("/add", boardAdd);
router.get("/all", boardAll);
router.put("/update/:_id", boardUpdate);
router.delete("/remove/:_id", boardRemove);

export default router;
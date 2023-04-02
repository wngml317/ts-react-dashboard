import { Request, Response } from "express";
import BOARD from "../model/BOARD";

export const boardAdd = async (req: Request, res: Response) => {
    const post = new BOARD(req.body);
    await post.save();
    return res.status(200).json({
        message: "저장 성공",
        // post
    })
} 

export const boardAll = async (req: Request, res: Response) => {
    const boardList = await BOARD.find();
    return res.status(200).json({
        message: "조회 성공",
        boardList
    })
}

export const boardUpdate =async (req: Request, res: Response) => {
    await BOARD.findByIdAndUpdate(req.params, req.body)
    return res.status(200).json({
        message: "수정 성공",
    })
}

export const boardRemove = async (req: Request, res: Response) => {
    await BOARD.findByIdAndRemove(req.params);
    return res.status(200).json({
        message: "삭제 성공"
    })
}
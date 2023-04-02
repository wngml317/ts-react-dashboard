import { Request, Response } from "express";
import TODO from "../model/TODO"

export const todoAdd = async (req: Request, res: Response) => {
    const todo = new TODO(req.body);
    await todo.save();
    return res.status(200).json({
        message: "추가 성공",
        todo
    })    
}

export const todoAll = async (req: Request, res: Response) => {
    const todoList = await TODO.find();
    return res.status(200).json({
        message: "조회 성공",
        todoList
    })
    
}

export const todoUpdate = async (req: Request, res: Response) => {
    const todo = await TODO.findByIdAndUpdate(req.params, req.body)
    return res.status(200).json({
        message: "수정 성공",
        todo
    })
};

export const todoRemove = async (req: Request, res: Response) => {
    const todo = await TODO.findByIdAndRemove(req.params);
    return res.status(200).json({
        message: "삭제 성공",
        todo
    }) 
}
import { Request, Response } from "express";
import TODO, { TodoSchema } from "../model/TODO"
import { dbClose, dbConnect } from "../connect/connect";
import mongoose, { Connection } from "mongoose";

mongoose.pluralize(null);

export const todoAdd = async (req: Request, res: Response) => {
    const conn = await dbConnect();
    const todo = new TODO(req.body);
    await todo.save();
    await dbClose(conn)

    return res.status(200).json({
        message: "추가 성공",
        todo
    })    
}

export const todoAll = async (req: Request, res: Response) => {
    // const conn = await dbConnect();
    // const todoList = await TODO.find();
    // await dbClose(conn)
    
    try {
        const conn = await dbConnect();
        const chartModel = await conn.model("TODO", TodoSchema)
        const todoList = await chartModel.find({});
        
        await dbClose(conn);
        return res.status(200).json({
            message: "수정 성공",
            todoList
        })
    } catch (error) {
        
    }
    
}

export const todoUpdate = async (req: Request, res: Response) => {
    const conn = await dbConnect();
    const todo = await TODO.findByIdAndUpdate(req.params, req.body);
    await dbClose(conn);

    return res.status(200).json({
        message: "수정 성공",
        todo
    })
};

export const todoRemove = async (req: Request, res: Response) => {
    const conn = await dbConnect();
    const todo = await TODO.findByIdAndRemove(req.params);
    await dbClose(conn);

    return res.status(200).json({
        message: "삭제 성공",
        todo
    }) 
}
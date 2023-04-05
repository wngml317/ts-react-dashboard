import { Request, Response } from "express";
import CHART from "../model/CHART";

export const dataAdd = async (req: Request, res: Response) => {
    const data = new CHART(req.body);
    await data.save();
    return res.status(200).json({
        message: "저장 성공",
        data
    })
};

export const dataSelectLine = async (req: Request, res: Response) => {
    const { startDate, endDate } = req.query;
    const data = await CHART.aggregate([
        {
            $project: {
                date: {$dateToString: {format: "%Y-%m-%d", date: "$date"}},
                value1: 1,
                value2: 1
            },  
        },
        {
            $match: {
                date: {$gte: startDate, $lte: endDate}
            }
        },
        {
            $sort: { date: 1 }
        }
    ]);
    let labels: string[] = [];
    let value1: number[] = [];
    let value2: number[] = [];

    for (let i of data) {
        labels.push(i.date);
        value1.push(i.value1);
        value2.push(i.value2);
    }

    return res.status(200).json({
        message: "조회 성공",
        labels: labels,
        datasets: [
            { label: "value1", data: value1 },
            { label: "value2", data: value2 }
        ]
    })
};

export const dataSelectMulti = async (req: Request, res: Response) => {
    const { startDate, endDate } = req.query;
    const data = await CHART.aggregate([
        {
            $project: {
                date: {$dateToString: {format: "%Y-%m-%d", date: "$date"}},
                value1: 1,
                value2: 1
            },  
        },
        {
            $match: {
                date: {$gte: startDate, $lte: endDate}
            }
        },
        {
            $sort: { date: 1 }
        }
    ]);
    let labels: string[] = [];
    let value1: number[] = [];
    let value2: number[] = [];

    for (let i of data) {
        labels.push(i.date);
        value1.push(i.value1);
        value2.push(i.value2);
    }

    return res.status(200).json({
        message: "조회 성공",
        labels: labels,
        datasets: [
            { type: "line", label: "value1", data: value1 },
            { type: "bar", label: "value2", data: value2 }
        ]
    })
};
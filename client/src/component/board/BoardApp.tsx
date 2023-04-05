import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { Board, boardAllAsync, selectBoard } from "../../slice/boardSlice";
import BoardCreate from "./BoardCreate";

const BoardApp = () => {
    const dispatch = useAppDispatch();
    const boardList = useAppSelector(selectBoard);

    useEffect(() => {
        dispatch(boardAllAsync())
    }, [dispatch]);

    return (
        <div>
            <BoardCreate />
            {boardList.map(board => 
            <ul key={board._id}>
                <div> user: {board.user} </div>
                <div> title: {board.title} </div>
                <div> content: {board.content} </div>    
            </ul>
            )}
        </div>
    )
}

export default BoardApp;
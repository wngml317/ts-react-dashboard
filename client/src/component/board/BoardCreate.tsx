import React from "react";
import { useAppDispatch } from "../../app/hook";
import { boardAddAsync } from "../../slice/boardSlice";

const BoardCreate = () => {
    const dispatch = useAppDispatch();

    const onSave = () =>{
        dispatch(boardAddAsync({user: "user01", title: "test01", content: "test01"}))
    }
    return (
        <div>
            <button onClick={() => onSave()}>저장</button>
        </div>
    )
}

export default BoardCreate;
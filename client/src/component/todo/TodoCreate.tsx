import React, { ChangeEvent, useState } from "react";
import { useAppDispatch } from "../../app/hook";
import { Todo, todoAddAsync } from "../../slice/todoSlice";

const TodoCreate = () => {
    const dispatch = useAppDispatch();

    const [text, setText] = useState('');
    
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }
    const onSave = () => {
        dispatch(todoAddAsync({"text": text}));
        setText('');
    } 
    return (
        <div>
            <input placeholder="할 일 입력" value={text} onChange={onChange} />
            <button onClick={() => onSave()}>저장</button>
        </div>
    )
}

export default TodoCreate;
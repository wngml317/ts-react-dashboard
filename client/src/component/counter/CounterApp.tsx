import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { decrease, increase, selectCount } from "../../slice/counterSlice";

const CounterApp = () => {
    const count = useAppSelector(selectCount);
    const dispatch = useAppDispatch();

    return (
        <div>
            <div>{count}</div>
            <button onClick={() => dispatch(increase())}>+1</button>
            <button onClick={() => dispatch(decrease())}>-1</button>
        </div>
    )
}

export default CounterApp;
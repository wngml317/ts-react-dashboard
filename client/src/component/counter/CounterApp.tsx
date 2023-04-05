import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { decrease, increase, selectCount } from "../../slice/counterSlice";
import styled from "styled-components";

const CounterBolck = styled.div`
    margin: 30px auto;
    align-items: center;
    justify-content: center
`
const TextBox = styled.div`
    font-size: 40px;
    font-weight: bold; 
    text-align: center;
    align-items: center;
    justify-content: center
`
const Button = styled.button`
    // display: flex
    margin: 30px;
    // align-items: center;
    padding: 10px 20px;
    font-size: 30px;
    cursor: pointer;
    background-color: rgba(112, 76, 182, 0.1);
    border-radius: 2px;
    border: none;
    &: hover {
        
        background-color: rgb(112, 76, 182);
    }

`

const CounterApp = () => {
    const count = useAppSelector(selectCount);
    const dispatch = useAppDispatch();

    return (
        <CounterBolck>
            <TextBox>{count}</TextBox>
            <Button onClick={() => dispatch(increase())}>+1</Button>
            <Button onClick={() => dispatch(decrease())}>-1</Button>
        </CounterBolck>
    )
}

export default CounterApp;
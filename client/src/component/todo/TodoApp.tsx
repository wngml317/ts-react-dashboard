import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hook"
import { Todo, selectTodo, todoAllAsync, todoRemoveAsync, todoUpdateAsync } from "../../slice/todoSlice";
import TodoList from "./TodoList";
import TodoCreate from "./TodoCreate";
import styled from "styled-components";
import TodoHead from "./TodoHead";

const TodoTemplateBlock = styled.div`
    width: 512px;
    height: 768px;

    position: relative;

    border-radius: 15px;
    background: white;
    
    margin: 50px auto;
    justify-content: center;
    flex-direction: column;
`

const TodoApp = () => {
    const dispatch = useAppDispatch();
    const todoList = useAppSelector(selectTodo);

    useEffect(() => {
        dispatch(todoAllAsync());
    }, [dispatch]);

    const onToggle = (data: Todo) => {
        dispatch(todoUpdateAsync(data));
    }
    const onRemove = (_id: String) => {
        dispatch(todoRemoveAsync(_id));
    }
    return (
        <TodoTemplateBlock>
            <TodoHead todoList={todoList} />
            <TodoCreate />
            <TodoList todoList={todoList} onToggle={onToggle} onRemove={onRemove} />
        </TodoTemplateBlock>
    )
}

export default TodoApp;
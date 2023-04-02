import React from "react";
import { Todo } from "../../slice/todoSlice";
import TodoItem from "./TodoItem";
import styled from "styled-components";

const TodoListBlock = styled.div`
    // flex: 1;
    padding: 15px;
`

interface TodoListProps {
    todoList: Todo[];
    onToggle: ({_id, done}: Todo) => void;
    onRemove: (_id: String) => void;
}
const TodoList = ({todoList, onToggle, onRemove}: TodoListProps) => {
    return (
        <TodoListBlock>
            {todoList.map(
                todo => 
                    <TodoItem key={todo._id} todo={todo} onToggle={onToggle} onRemove={onRemove} />
            )}
        </TodoListBlock>
    )
}

export default TodoList;
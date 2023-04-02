import { Todo } from "../../slice/todoSlice";

interface TodoHeadProps {
    todoList: Todo[]
}

const TodoHead = ({todoList}: TodoHeadProps) => {
    const undoneTask = todoList.filter(todo => todo.done)
    return (
        <div>
            <div>할 일 {undoneTask.length} 개 남음</div>
        </div>
    )
}

export default TodoHead;
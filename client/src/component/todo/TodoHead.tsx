import { Todo } from "../../slice/todoSlice";

interface TodoHeadProps {
    todoList: Todo[]
}

const TodoHead = ({todoList}: TodoHeadProps) => {
    const today = new Date();
    const dateString = today.toLocaleDateString("ko-KR",{
        year: "numeric",
        month: "long",
        day: "numeric"
    });
    const dayName = today.toLocaleDateString("ko-KR", {weekday: "long"})
    const undoneTask = todoList.filter(todo => todo.done);
    return (
        <div>
            <div>{dateString}</div>
            <div>{dayName}</div>
            <div>할 일 {undoneTask.length} 개 남음</div>
        </div>
    )
}

export default TodoHead;
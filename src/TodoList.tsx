import { Todo } from "./Todo";
import { Todo as TodoInterface } from "./App";

export function TodoList({ todoList, toggleTodo, deleteTodo }:
  { todoList: TodoInterface[], toggleTodo: (id: string, checked: boolean) => void, deleteTodo: (id: string) => void }) {
  return (
    <ul className="flex flex-col mt-2" id="todo-items">
      {todoList.map((todo) => {
        return (
          <Todo todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} key={todo.id} />
        )
      })}
    </ul>
  )
}

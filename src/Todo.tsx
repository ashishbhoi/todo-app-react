import { Todo } from './App';

export function Todo({ todo, toggleTodo, deleteTodo }:
  { todo: Todo, toggleTodo: (id: string, checked: boolean) => void, deleteTodo: (id: string) => void }) {
  return (
    <li className="flex flex-row items-center py-2 px-2" key={todo.id}>
      <input type="checkbox" id={todo.id} className="mr-2 w-4 h-4" checked={todo.checked} onChange={(e) => toggleTodo(todo.id, e.target.checked)} />
      <label htmlFor={todo.id} className={todo.checked ?
        "text-lg text-gray-800 dark:text-gray-400 line-through" :
        "text-lg text-gray-900 dark:text-gray-50"}
      >{todo.text}</label>
      <button
        className="py-0 px-1 ml-4 text-gray-50 bg-red-500 rounded-lg border border-red-600 hover:bg-red-700 focus:border-red-700 focus:ring-red-700"
        onClick={() => deleteTodo(todo.id)}
      >Delete</button>
    </li>
  )
}

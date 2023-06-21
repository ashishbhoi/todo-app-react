import { useEffect, useState } from 'react';

interface Todo {
  id: string;
  text: string;
  checked: boolean;
}

export default function App() {
  const [todo, setTodo] = useState<string>('');
  const [todoList, setToList] = useState<Todo[]>(() => {
    const savedTodo = localStorage.getItem('todoList');
    if (savedTodo) {
      return JSON.parse(savedTodo);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!todo) return;
    setToList((prevTodo) => [...prevTodo, { id: crypto.randomUUID(), text: todo, checked: false }]);
    setTodo('');
  }

  function toggleTodo(id: string, checked: boolean) {
    setToList((prevTodo) => prevTodo.map((todo) => {
      if (todo.id === id) {
        return { ...todo, checked: checked };
      }
      return todo;
    }));
  }

  function deleteTodo(id: string) {
    setToList((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label htmlFor="todo" className="text-3xl font-semibold text-center text-blue-700 dark:text-blue-500">Todo App</label>
        <input
          type="text"
          id="todo"
          className="py-1 px-2 mt-4 text-gray-900 bg-gray-50 rounded-lg border dark:text-gray-50 dark:bg-gray-800 dark:border-blue-500 focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-blue-700 dark:focus:border-blue-700"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit" className="py-1 px-2 mt-4 font-semibold text-gray-50 bg-blue-600 rounded-lg border border-blue-500 hover:bg-blue-600 focus:border-blue-600 focus:ring-blue-600">Add Todo</button>
      </form>
      <div className="flex flex-col pt-8">
        <label htmlFor="todo-items" className="text-3xl text-blue-700 dark:text-blue-500">Todo List</label>
        <ul className="flex flex-col mt-2" id="todo-items">
          {todoList.map((todo) => {
            return (
              <li className="flex flex-row items-center py-2 px-2" key={todo.id}>
                <input type="checkbox" id={todo.id} className="mr-2 w-4 h-4" checked={todo.checked} onChange={(e) => toggleTodo(todo.id, e.target.checked)} />
                <label htmlFor={todo.id} className={todo.checked ?
                  "text-lg text-gray-900 dark:text-gray-50 line-through" :
                  "text-lg text-gray-900 dark:text-gray-50"}
                >{todo.text}</label>
                <button
                  className="py-0 px-1 ml-4 text-gray-50 bg-red-500 rounded-lg border border-red-600 hover:bg-red-700 focus:border-red-700 focus:ring-red-700"
                  onClick={() => deleteTodo(todo.id)}
                >Delete</button>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  );
}

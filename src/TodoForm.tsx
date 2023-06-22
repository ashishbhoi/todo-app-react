import { useState } from 'react';

export function TodoForm({ addTodo }: { addTodo: (todo: string) => void }) {
  const [todo, setTodo] = useState<string>('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    addTodo(todo);

    setTodo('');
  }
  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <label htmlFor="todo" className="text-3xl font-semibold text-center text-blue-700 dark:text-blue-500">Todo App</label>
      <input
        type="text"
        id="todo"
        className="py-1 px-2 mt-4 text-gray-900 bg-gray-50 rounded-lg border dark:text-gray-50 dark:bg-gray-800 dark:border-blue-500 focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-blue-700 dark:focus:border-blue-700"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="py-1 px-2 mt-4 font-semibold text-gray-50 bg-blue-600 rounded-lg border border-blue-500 hover:bg-blue-600 focus:border-blue-600 focus:ring-blue-600"
      >
        Add Todo
      </button>
    </form>
  )
}

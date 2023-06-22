import { useEffect, useState } from 'react';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';

export interface Todo {
  id: string;
  text: string;
  checked: boolean;
}

export default function App() {
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

  function addTodo(todo: string) {
    if (!todo) return;
    setToList((prevTodo) => [...prevTodo, { id: crypto.randomUUID(), text: todo, checked: false }]);
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
      <TodoForm addTodo={addTodo} />
      <div className="flex flex-col pt-8">
        <h3 className="text-3xl text-blue-700 dark:text-blue-500">Todo List</h3>
        <TodoList todoList={todoList} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      </div>
    </>
  );
}

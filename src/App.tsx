export default function App() {
  return (
    <>
      <form className="flex flex-col">
        <label htmlFor="todo" className="text-3xl font-semibold text-center text-blue-700 dark:text-blue-500">Todo App</label>
        <input type="text" id="todo" className="py-1 px-2 mt-4 text-gray-900 bg-gray-50 rounded-lg border dark:text-gray-50 dark:bg-gray-800 dark:border-blue-500 focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-blue-700 dark:focus:border-blue-700" />
        <button type="submit" className="py-1 px-2 mt-4 text-gray-50 bg-blue-500 rounded-lg border border-blue-500 hover:bg-blue-600 focus:border-blue-600 focus:ring-blue-600">Add Todo</button>
      </form>
      <div className="flex flex-col pt-8">
        <label htmlFor="todo" className="text-3xl text-blue-700 dark:text-blue-500">Todo List</label>
        <ul className="flex flex-col mt-2">
          <li className="flex flex-row items-center py-2 px-2">
            <input type="checkbox" id="todo" className="mr-2 w-4 h-4" />
            <label htmlFor="todo" className="text-gray-900 dark:text-gray-50">Todo 1</label>
            <button className="py-0 px-1 ml-4 text-gray-50 bg-red-500 rounded-lg border border-red-500 hover:bg-red-600 focus:border-red-600 focus:ring-red-600">Delete</button>
          </li>
          <li className="flex flex-row items-center py-2 px-2">
            <input type="checkbox" id="todo" className="mr-2 w-4 h-4" />
            <label htmlFor="todo" className="text-gray-900 dark:text-gray-50">Todo 2</label>
            <button className="py-0 px-1 ml-4 text-gray-50 bg-red-500 rounded-lg border border-red-500 hover:bg-red-600 focus:border-red-600 focus:ring-red-600">Delete</button>
          </li>
          <li className="flex flex-row items-center py-2 px-2">
            <input type="checkbox" id="todo" className="mr-2 w-4 h-4" />
            <label htmlFor="todo" className="text-gray-900 dark:text-gray-50">Todo 3</label>
            <button className="py-0 px-1 ml-4 text-gray-50 bg-red-500 rounded-lg border border-red-500 hover:bg-red-600 focus:border-red-600 focus:ring-red-600">Delete</button>
          </li>
        </ul>
      </div>
    </>
  );
}

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css'
import Home from './components/Home'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import Todo from './models/todo.model';

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, title: 'Learn React', completed: false },
    { id: 2, title: 'Learn TypeScript', completed: false },
    { id: 3, title: 'Learn TailwindCSS', completed: false },
  ]);

  const updateData = () => {
    setTodos([
      { id: 1, title: 'Learn ReactJS', completed: true },
      { id: 2, title: 'Learn TS', completed: true },
      { id: 3, title: 'Learn TailwindCSS', completed: true },
      { id: 4, title: 'Learn Vite', completed: false },
    ]);
  }

  return (
    <main className='text-center'>
      <button type='button' onClick={updateData}
        className='p-2 px-4 bg-blue-500 text-white hover:bg-blue-700 cursor-pointer'>
        Update Todo
      </button>
      <Home items={todos} />
      <FontAwesomeIcon icon={faCoffee} />
    </main>
  )
}

export default App
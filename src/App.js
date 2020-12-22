import React from 'react';
import { RiHome4Fill } from 'react-icons/ri';
import './App.css';
import TodoList from './TodoList';

function App() {
  
  return (
    <div className="todo__app">
      <h2>ToDo React App</h2>
      <TodoList />

      <div className="todo__footer">
        <p>Designed by O.A.G Studios </p>
      </div>
    </div>
    
  );
}

export default App;

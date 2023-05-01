import React from 'react';
// import { RiHome4Fill } from 'react-icons/ri';
import './App.css';
import TodoList from './TodoList';

function App() {
  
  return (
    <div className="todo__app">
      <h2> {`Anu's ToDo React App`}</h2>
      <TodoList />

      <div className="todo__footer">
       <p>
         <span className="todo__footer-p">Designed and Developed By </span>
        <a href="https://anuoluwapo-min-portfolio.vercel.app/home" rel="noreferrer" target="_blank" className="link">Anuoluwapo Oyetibo </a>
       </p>
      </div>
    </div>
    
  );
}

export default App;

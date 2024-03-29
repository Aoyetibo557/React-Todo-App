import React, {useState} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
    const [todos, setTodos] = useState([]);
    
    const addTodo = todo =>{
        if(!todo.text || /^\s*$/.test(todo.test)){
            return;
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
        // console.log(todo, ...todos)
    }

    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.test)){
            return;
        }

        setTodos(prev => prev.map(item => item.id ===todoId ?  newValue :item))
    }

    const removeTodo = id =>{
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr);
    }

    const completeTodo = id =>{
        let updatedTodos =todos.map(todo =>{
            if(todo.id === id){
                todo.isComplete = !todo.isComplete
            }
            return todo;
        })

        setTodos(updatedTodos)
    }


    return (
        <div className="todolist">
            <h2>What's Your Plan for Today</h2>
            <TodoForm onSubmit={addTodo} />
            <Todo 
                todo={todos}
                completeTodo = {completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />

        </div>
    );
}

export default TodoList

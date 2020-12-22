import React , {useState, useEffect, useRef} from 'react'
import  './TodoForm.css';

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value: '' );

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    })
    
    
    const handleChange = e =>{
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })

        setInput('');
    };

    

    return (
        <div>
            <form className="todo__form" onSubmit={handleSubmit}>
                {/* To add the Update to the form when clicked] */}
                {props.edit ? (
                    <>
                    <input 
                        type="text" 
                        className="todo__input" 
                        name="text" 
                        placeholder="Update Todo Item" 
                        value={input} 
                        onChange={handleChange}
                        ref = {inputRef}
                    />,
                <button type="submit" className="todo__button edit">Update</button>
                </>
                )
                : 
                (
                    <>
                    <input 
                    type="text" 
                    className="todo__input" 
                    name="text" 
                    placeholder="Enter Todo Item" 
                    value={input} 
                    onChange={handleChange}
                    ref = {inputRef}
                />,
                <button type="submit" className="todo__button">Add Todo</button>
                </>
                )};

            </form>
        </div>
    )
}

export default TodoForm

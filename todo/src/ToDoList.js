import React, { useState, useReducer } from 'react';
import {initialState, reducer} from './reducers/reducer';


function ToDoList(){ 

    const [{todos}, dispatch] = useReducer(reducer, {todos: [{
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
        
    }]});
    const [text, setText] = useState('');

    // const handleChanges = e => {
    //     setText(e.target.value);
    //   };

    // const resetAll = () => {
    //     setText(initialState)
    // }

    // const onSubmit = e => {
    //     e.preventDefault()
    
    // }
    
    
    return(
        <div>
        <h1>Joe's To Do List</h1>
        <form onSubmit={e => {
            e.preventDefault();
            // this can be written payload:text, it would also have to be changed in the reducer file
            dispatch({ type: "ADD_TODO", text}); 
            setText("");
        }}>

        <div>
            <label htmlFor='tasks'>Task:&nbsp;
                <input 
                type="text"
                name="tasks"
                value={text}   
                onChange = {e => setText(e.target.value)}
                />
            </label>
        </div>

        <button onClick={e => {
            
            dispatch({ type: "ADD_TODO", payload: todos });
            
        }}>
            Submit
        </button>

        <button onClick={() => dispatch({type:"CLEAR_ALL"})}>
            Clear
        </button>

        </form>
        {todos.map((t, idx) => (
            <div 
                key={t.text}
                onClick={() => dispatch({type: "TOGGLE_TODO", idx})}
                style={{
                    textDecoration: t.completed ? 'line-through' : ""
                }}
                >{t.text}</div>
       ))}
        </div>

       )};

export default ToDoList;

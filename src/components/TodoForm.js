import React, {useState, useEffect, useRef} from 'react'

const TodoForm = (props) => {
  const inputRef=useRef(null);

  useEffect(()=> (
    inputRef.current.focus()
  ))

  const [input, setInput]= useState('')
  const handleChange= (e)=>{
    setInput(e.target.value);
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    props.onSubmit({
        id: Math.floor(Math.random()*1000),
        text: input
    })
    setInput('');
  }
  return (
    props.edit ? (
      <form className="todo-form" onSubmit={handleSubmit}>
        <input 
            type="text" 
            placeholder="Update the task..." 
            className="todo-input"
            value={input}
            name="todo"
            onChange={handleChange}
            ref={inputRef}
        />
        <button className="todo-button">Update Todo</button>
      </form>
    ) : (
      <form className="todo-form" onSubmit={handleSubmit}>
        <input 
            type="text" 
            placeholder="Enter task to do..." 
            className="todo-input"
            value={input}
            name="todo"
            onChange={handleChange}
            ref={inputRef}
        />
        <button className="todo-button">Add Todo</button>
      </form>
    )
    
  )
}

export default TodoForm

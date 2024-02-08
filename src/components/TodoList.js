import React, { useState } from 'react'
import TodoForm from './TodoForm';
import Todo from './Todo';

const TodoList = () => {
  const [list, setList]=useState([]);

  const completeTodo = (id)=>{
    const updatedTodo=[...list].map((item=>{
      if(item.id===id){
        item.isComplete= !item.isComplete;
      }
      return item;
    }))
    setList(updatedTodo)
  }

  const addList=(todo)=>{
    if(!todo.text)return;
    const newList=[todo, ...list];
    setList(newList);
  }

  const updateTodo=(todoId, newValue)=>{
    if(!newValue.text)return;
    const updateArr=[...list].map(item=>{
      if(item.id===todoId){
        item=newValue;
      }
      return item;
    });
    setList(updateArr);
  }

  const removeTodo=(id)=>{
    const newList=[...list].filter((item)=>{
        return item.id!==id;
    });
    setList(newList);
  }

  const handleDrag = (listClone)=>{
    setList(listClone);
  }
  
  return (
    <div className='container'>
      <h1>ToDo List</h1>
      <TodoForm onSubmit={addList}/>
      <Todo list={list} removeTodo={removeTodo} updateTodo={updateTodo} completeTodo={completeTodo} handleDrag={handleDrag} />
    </div>
  )
}

export default TodoList

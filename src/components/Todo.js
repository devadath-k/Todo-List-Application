import React, {useState, useRef} from 'react';
import {MdDelete} from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import TodoForm from './TodoForm';


const Todo = ({list, removeTodo, updateTodo, completeTodo, handleDrag}) => {

  const dragItem= useRef(0);
  const dragOverItem= useRef(0);
  const [edit, setEdit] =useState({
    id: null,
    value: ''
  });

  const submitUpdate = (value)=>{
    updateTodo(edit.id, value);
    setEdit({id: null, value: ''});
  }

  if(edit.id!=null){
    return(
      <TodoForm edit={edit} onSubmit={submitUpdate} />
    )
  }

  const dragging= ()=>{
    const listClone = [...list];
    const temp= listClone[dragItem.current];
    listClone[dragItem.current]=listClone[dragOverItem.current];
    listClone[dragOverItem.current]=temp;
    handleDrag(listClone);
  }

  return (
    list.map((item, index)=>{
      return(
        <div
           className={item.isComplete ? 'todo-row complete': 'todo-row'} 
           key={item.id} 
           draggable
           onDragStart={()=>(dragItem.current=index)}
           onDragEnter={()=>(dragOverItem.current=index)}
           onDragEnd={dragging}
          onDragOver={(e)=>(e.preventDefault)}
        >
          <FaBars />
          <div className='todo-text' onClick={()=>completeTodo(item.id)}>
            {item.text}
          </div>
          <div className="icons">
            <MdDelete onClick={()=>removeTodo(item.id)} className="removeTodo" />
            <FaEdit onClick={()=>setEdit({id: item.id, value: item.text})} className="editTodo" />
          </div>
        </div>
      )
    })
  )
}

export default Todo


import React, {useState} from 'react'
import '../components/TodoForm.css'

function TodoForm ({addTodo}) {
  const [todoText, setTodotext]= useState('');
  return (
    <div className='todo-form'>
      <input 
      onChange={e=>setTodotext(e.target.value)} 
      type="text" placeholder='Add your task here' 
      value={todoText}/>
      <button 
      onClick={()=>{
      addTodo(todoText);
      setTodotext('');
      }}>Add</button>
    </div>
  )
}

export default TodoForm
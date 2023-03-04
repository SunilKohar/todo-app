import React from 'react'
import '../components/Todo.css'
function Todo({todo}) {
  return (
    <div className='todo-container'>
      <input type='checkbox'></input>
      <p>{todo.text}</p>   
      <div className='todo-time'>
        <p>{todo.time}</p>
        <p>{todo.date}</p>
        
      </div>
      <button>X</button>
    </div>
  )
}

export default Todo
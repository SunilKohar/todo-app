import React from 'react'
import '../components/Todo.css'
function Todo({todo, toggleCompleted}) {
  return (
    <div className='todo-container'>
      <input type='checkbox' 
      checked={todo.isCompleted}
      onChange={()=> toggleCompleted(todo.id)}></input>
      <p style={todo.isCompleted ?{textDecoration:'line-through', color:'#454545'}
      :{textDecoration:'none'}}>{todo.text}</p>   
      <div className='todo-time'>
        <p>{todo.time}</p>
        <p>{todo.date}</p>
        
      </div>
      <button>X</button>
    </div>
  )
}

export default Todo
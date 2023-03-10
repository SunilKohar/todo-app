import React from 'react'
import Todo from './Todo'

function TodoList({todos, toggleCompleted}) {
  return (
    <div>
      {todos.map((todo,index) => (
        <Todo key={index} todo={todo} toggleCompleted={toggleCompleted}
        deleteTodo={deleteTodo}
        />
      ))}
    </div>
  )
}

export default TodoList
import React, { useState } from 'react'
import './App.css'
import Header from './components/header'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
  const[todos, setTodos] = useState([]);
  

  function addTodo(todo){
    if(todo.length===0){
      alert('Please enter a To-do task');
      return;
    }
    let todoOject={
      id: Math.floor(Math.random() *10000000),
      text:todo,
      isCompleted:false,
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString()
    }
    setTodos([...todos,todoOject]);
   
  }
  

  function toggleCompleted(id){
    setTodos(todos.map(todo => {
      if(todo.id===id){
        return{
          ...todo,
          isCompleted:!todo.isCompleted
        }
      }
      return todo;
      }))
    }  
  
  return (
    <div className="container">
      <div className='inner-container'> 
        <Header/>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} toggleCompleted={toggleCompleted}/>
        
      </div> 
    </div>
  );
}

export default App

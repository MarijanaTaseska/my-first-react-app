import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { getTodos , addTodo, putTodo, deleteTodo} from './actions/todos';




let currentId = 0
function generateId(){
  currentId +=1
  return currentId
}
// const todos = [
//   {id:generateId(),completed:false,description:'laundry'},
//   {id:generateId(),completed:false,description:'feed the dog'},
//   {id:generateId(),completed:false,description:'do you homework'},
//   {id:generateId(),completed:false,description:'learn how to be the best'},
//   {id:generateId(),completed:false,description:'be the best'},
// ]
function App() {
  const [todo,setTodo] = useState('')
  const [todos, setTodos] = useState([])

  useEffect(()=> {
    getData()
  },[])

  const getData = () => {
    getTodos().then(res => {
      setTodos(res)
    })
  }
  const postTodo = (evt) => {
    addTodo(todo)
    .then(() => {
      getData()
      setTodo('')
      
    })
    .catch(err => console.log(err.response))
  }

  const completeTodo = (todo) => {
    const newTodo = {...todo, completed:true}
    putTodo(newTodo)
    .then(() => {
      getData();
    })
  }
  const deleteItem = (id) => {
  deleteTodo(id).then(res =>{
    getData()
  })
  }
  return (
    <div className="App">
     <h1>My React App</h1>
     <input className='add-todo' value={todo} onChange={(e) => setTodo(e.target.value)}/>
     <button className='submit-button ' onClick={() => postTodo(todo)}>Submit</button>
     {
      todos.map((todo,index)=>(
        <div key={index}>
          <ul className='todo-list'>
            <span id="todo-text" className={todo.completed ? 'done' : ''}>{todo.description}</span>
            <span className='delete-complete-buttons'>
            {todo.completed ? <button className='deleteBtn' onClick={()=> deleteItem(todo.id)}>"Delete"</button> : <button className='completeBtn' onClick={() => completeTodo(todo)}>"Complete"</button> } 
            </span>
          </ul>
        </div>
      ))
     }
    </div>
  );
}

export default App;

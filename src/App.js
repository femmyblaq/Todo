import {react, useState} from "react"
import './App.css';
import trash from "./icons8-trash-64.png"
import Hello from "./Hello"

function App() {

  const [todoData, setTodo] = useState("Hello");
  const [storeTodos, setstoreTodo] = useState([])
  const changeTodo = (event) => {
    setTodo(event.target.value)
  }

  const todoHandler = (e) => {
    e.preventDefault();

    setstoreTodo(prevTodo => {
      return [...prevTodo, {id: crypto.randomUUID(), title: todoData, completed: false}]
    })

    console.log(todoData)
    setTodo("")
  }

  const deleteTodo = (id) => {
    setstoreTodo(currentTodo => {
      return currentTodo.filter(todo => todo.id !== id)
    })
  }

  const [user, setUser] = useState("Hy devinton")


  return (
    <div className="App">
      <header>
        <h2>TodoList</h2>
      </header>
      <div className='container'>
        <h1>Hello {user}</h1>
        <form onSubmit={todoHandler}>
          <label>Enter Todo *</label>
          <input type="text" value={todoData} onChange={changeTodo} />

          <button type='submit'>Add todo</button>
        </form>

      </div>
    <div className="output">
      <h1>What I'm to do for the day!</h1>
      <ul>
        {storeTodos.map(todo => {
          return (<li>
          <input type="checkbox" />
          <label>{todo.title}</label>
  
          <button onClick={() => deleteTodo(todo.id)}>Delete <img src={trash} /></button>
          </li>)
        })}
      
        </ul>
      </div>
      <Hello />
    </div>
  );
}

export default App;

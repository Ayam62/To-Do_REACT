import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'


function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const handleEdit = (index) => {
    setTodos(Todos[index].todo)
  }
  const handleDelete = (index) => {
    const toooodo = todos.filter((item, i) =>
      i !== index

    )
    setTodos(toooodo)
  }
  const handleAdd = (e) => {
    if(todo){
    setTodos([...todos, { todo, isCompleted: false }])
    setTodo("")
    }
  
  }
  const handleOnChange = (e) => {
    setTodo(e.target.value)
  }
  const handleCheckBox = (index) => {
    setTodos(todos.map((item, i) =>
      i === index ? { ...item, isCompleted: !item.isCompleted } : item
    ));
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="container mx-auto bg-slate-600 m-10 p-4 text-white rounded-xl min-h-[80vh]">
        <div className="addTodo">
          <h1 className="text-2xl font-bold">Add a ToDo</h1>
          <div>
            <input onChange={handleOnChange}  type="text" className='h-12 rounded-md w-1/2 my-5 text-black'></input>
            <button onClick={handleAdd} className='bg-green-600 hover:bg-green-800 p-3 m-3 mx-6 rounded-md hover:font-bold'   >Add</button>
          </div>
        </div>
        <h2 className='text-2xl font-bold'>Your ToDos</h2>
        <div className="todos">
          {
            todos.map((item, index) =>
              <div   key={index} 
              className="todo flex items-center justify-between ">
                <div className='flex'>
                  <input type="checkbox" onChange={() => handleCheckBox(index)} value={item.isCompleted}></input>
                  <div className={item.isCompleted && "line-through"}>{item.todo}</div>
                </div>
                <div className="buttons  float-end">
                  <button onClick={()=>handleEdit(index)} className='bg-blue-600 hover:bg-blue-800 float-end p-2 px-4 m-3 mx-2 rounded-md hover:font-bold'>Edit</button>
                  <button onClick={() => handleDelete(index)} className='bg-red-600 hover:bg-red-800 p-2 float-end px-4 m-3 mx-2 rounded-md hover:font-bold'>Delete</button>
                </div>
              </div>
            )}
        </div>

      </div>
    </>
  )
}

export default App

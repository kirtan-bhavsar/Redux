import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo.jsx'

function App() {clear
  
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Redux</h1>
    <AddTodo></AddTodo>
    </>
  )
}

export default App

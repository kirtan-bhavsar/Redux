import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

const Todos = () => {

    
    // return    const todos = useSelector(state => state.todos);

        const todos = useSelector(state => state.todos);


  return (
    <>
    <h1>Todos</h1>
    {
        todos.map((todo) => (
        <li key={todo.id}>
            {todo.title}
        <button>X</button>
        </li>
        ))
    }
    </>
  )
}

export default Todos;
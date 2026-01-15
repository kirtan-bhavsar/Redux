import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

const Todos = () => {

    const dispatch = useDispatch();
    
    // return    const todos = useSelector(state => state.todos);

        const todos = useSelector(state => state.todos);

        const handleDelete = (id) => {
            dispatch(removeTodo({id}));
        }

  return (
    <>
    <h1>Todos</h1>
    {
        todos.map((todo) => (
        <li key={todo.id}>
            {todo.title}
        <button key={todo.id} onClick={() => handleDelete(todo.id)}>X</button>
        </li>
        ))
    }
    </>
  )
}

export default Todos;
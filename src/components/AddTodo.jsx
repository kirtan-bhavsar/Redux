import react, { useState } from "react";
import { useDispatch,useSelector} from "react-redux";
import { addTodo,getTodoById, updateTodo,updateCompleted} from "../features/todo/todoSlice";

const AddTodo = () => {

  const dispatch = useDispatch();

  const [input, setInput] = useState("");

  const isEditing = useSelector((state) => state.isEditing);
  const editingId = useSelector((state) => state.currentEditingId);

  const editingTodo = useSelector ((state) => getTodoById(state,editingId));

  // const dispatch = useDispatch();

  const addTodoHandler = (e) => {

    if(!isEditing){
    e.preventDefault();
    dispatch(addTodo({ title: input }));
    setInput("");
    } else {
      e.preventDefault();
      dispatch(updateTodo({title:input,id:editingId}));
      setInput("");
      dispatch(updateCompleted());
    }
  };

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value = {isEditing ? editingTodo.title : input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        {isEditing ? "Update Todo" : "Add Todo"}
      </button>
    </form>
  );
};

export default AddTodo;

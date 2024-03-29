import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../features/todo/todoSlice';
import { useState } from 'react';

function Todos() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [updatedText, setUpdatedText] = useState('');
  const [editTodoId, setEditTodoId] = useState(null);

  const handleUpdateTodo = (todo) => {
    // console.log(todo.text)
    setUpdatedText(todo.text); // Set the updated text to the todo text
    setEditTodoId(todo.id); // Set the editTodoId to the id of the todo being edited
  };
 
  const handleSaveUpdatedTodo = () => {
    dispatch(updateTodo({ id: editTodoId, text: updatedText }));
    console.log('updatedText : ',updatedText)

      setUpdatedText('');
      setEditTodoId(null);
  };
  
    // console.log('editTodoId',editTodoId);
  
  return (
    <>
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          console.log('mampp',todo),
          console.log('TODOID',todo.id),
          <li
           
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
            
          >

            {editTodoId === todo.id ? (
              <input
                type="text"
                value={updatedText}
                onChange={(e) => setUpdatedText(e.target.value)}
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            ) : (
              <div className='text-white'>{todo.text}</div>
            )}

            <div className='space-x-2'>
              {editTodoId === todo.id ? (
                <button
                  onClick={handleSaveUpdatedTodo}
                  className="text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => handleUpdateTodo(todo)}
                  className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md"
                >
                  Update
                </button>
              )}

              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;

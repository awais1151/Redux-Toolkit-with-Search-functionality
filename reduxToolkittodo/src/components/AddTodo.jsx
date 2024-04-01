// src/components/AddTodo.js

import  {useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, updateTodo, updateSelectedTodo } from '../features/todo/todoSlice';

const AddTodo = () => {
  const dispatch = useDispatch();
  const selectedTodo = useSelector(state => state.todo.selectedTodo);

  console.log('selectedTodo:',selectedTodo)
  const [text, setText] = useState();

  useEffect(() => {
    setText(selectedTodo ? selectedTodo.text : '');
  }, [selectedTodo]);
  const handleInputChange = e => {
    setText(e.target.value);
    console.log('e.target.value::',e.target.value)
  };

 
 
  const handleAddOrUpdateTodo = () => {
    if (selectedTodo) {
      dispatch(updateTodo({ id: selectedTodo.id, text }));
    } else {
      dispatch(addTodo({ id: Date.now(), text }));
    }
    setText('');
    dispatch(updateSelectedTodo(null));
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleInputChange} />
      <button onClick={handleAddOrUpdateTodo}>{selectedTodo ? 'Update Todo' : 'Add Todo'}</button>
    </div>
  );
};

export default AddTodo;

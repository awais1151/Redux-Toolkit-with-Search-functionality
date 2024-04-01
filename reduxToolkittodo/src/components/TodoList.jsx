 // src/components/TodoList.js

// import   from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateSelectedTodo } from '../features/todo/todoSlice';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todo.todos);

  const handleUpdateTodo = todo => {
    dispatch(updateSelectedTodo(todo));
  };

  return (
    <div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleUpdateTodo(todo)}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

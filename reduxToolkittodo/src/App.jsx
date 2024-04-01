 
import './App.css'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
// import Todos from './components/Todos'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-gray-500'> 
       <h1>Learn aout redux toolkit</h1>
       <AddTodo/>
       <TodoList/>
       {/* <Todos/> */}
       </div>
    </>
  )
}

export default App

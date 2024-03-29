import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {

    todos: []
}


export const todoSlice = createSlice({

    name: 'todo',
    initialState,

    reducers: {
        addTodo: (state, action) => {

            const todo = {
                id: nanoid(),
                text: action.payload

            }

            state.todos.push(todo)

        },
        removeTodo: (state, action) => {

            state.todos = state.todos.filter((todo) =>
                todo.id !== action.payload,


            )



        },

        updateTodo: (state, action) => {
            const { id,text } = action.payload; // Destructure id and updatedText from the payload
            console.log('shhha',action.payload)
            const todoToUpdate = state.todos.find(todo => todo.id === id); // Find the todo to update by its id
            //  console.log('todoToUpdate   :',state.todo)
            if (todoToUpdate) {
                todoToUpdate.text = text; // Update the text property of the todo

                console.log('first',todoToUpdate.text = text)
            }
           


        }

    }

})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions

export default todoSlice.reducer
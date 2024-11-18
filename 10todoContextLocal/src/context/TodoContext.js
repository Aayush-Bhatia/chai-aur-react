import { createContext , useContext } from "react"

export const TodoContext = createContext({
    todos : [
        {
            id: 1,
            todo: "Todo msj",
            completed: false,
        }
        

    ],
    addTodo: (todo) => {},
    deleteTodo: (id) => {},
    toggleTodo: (id) => {},
    editTodo: (id, todo) => {}
})
export const useTodo = () => {
    return useContext(TodoContext)
}  // useTodo hook to access the

export const TodoProvider = TodoContext.Provider

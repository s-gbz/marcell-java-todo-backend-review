import axios from "axios";
import {Todo} from "../components/Todo";

export const getAllTodos = () =>
    axios.get("/api/todo/").then(response => response.data)

// export const getTodoById = (id: string) => {
//     axios.get( `/api/todo/${id}`)
//         .then(function (response){
//             console.log(response)
//             return response.data
//         })
//         .catch(function (error){
//             console.log(error)
//         })
// }

export const postTodo = (description: string) =>
    axios.post("/api/todo", {description: description, status: 'OPEN'})


export const putTodo = (todo: Todo) =>
    axios.put(`/api/todo/${todo.id}`, todo)

export const deleteTodo = (id: string) =>
    axios.delete(`/api/todo/${id}`)
import axios from "axios";

export const getAllTodos = () =>
    axios.get("/api/todo/").then(response => response.data)

export const getTodoById = (id: string) => {
    axios.get( `/api/todo/${id}`)
        .then(function (response){
            console.log(response)
            return response.data
        })
        .catch(function (error){
            console.log(error)
        })
}

export const postTodo = (description: string) =>
    axios.post("/api/todo", {description: description, status: 'OPEN'})


export const updateTodo = (id: string, description: string, status: string) =>
    axios.put(`/api/todo/${id}`, {description: description, status: status})

export const deleteTodo = (id: string) =>
    axios.delete(`/api/todo/${id}`)
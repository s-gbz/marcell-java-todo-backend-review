import React, {useEffect, useState} from "react";
import TodoList from "./components/TodoList";
import {getAllTodos, postTodo, deleteTodo, updateTodo} from "./service/todo-api-service";
import {Todo} from "./components/Todo";
import AddTodo from "./components/AddTodo";
import SearchTodo from "./components/SearchTodo";
export default function TodoApp(){

    const [todos, setTodo] = useState<Todo[]>([])

    const [searchText, setSearchText] = useState("")

    const filteredTodos = todos.filter(todo => todo.description.toLowerCase().includes(searchText.toLowerCase()) || todo.status.toLowerCase().includes(searchText.toLowerCase()))

    function handleSearchTextChange(toSearch: string){
        setSearchText(toSearch)
    }

    useEffect(() => {
        getAllTodos()
            .then(todos => setTodo(todos))
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }, [])

    const addTodo = (description: string) => {
        postTodo(description)
            .then(() => getAllTodos())
            .then(todos => setTodo(todos))
            .then(function (response){
                console.log(response)
            })
            .catch(function (error){
                console.log(error)
            })
    }

    const deleteTodoById = (id: string) => {
        deleteTodo(id)
            .then(() => getAllTodos())
            .then(todos => setTodo(todos))
            .then(function (response){
                console.log(response)
            })
            .then(function (error){
                console.log(error)
            })
    }

    const updateTodoById = (id: string, description: string, status: string) => {
        updateTodo(id, description, status)
            .then(() => getAllTodos())
            .then(todos => setTodo(todos))
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }

    return (
        <div className={"container-lg "}>
            <SearchTodo searchTodo={handleSearchTextChange}/>
            <TodoList updateTodo={() => updateTodoById} todos={filteredTodos} deleteTodo={deleteTodoById} />
            <AddTodo addTodo={addTodo} />
        </div>
    )
}
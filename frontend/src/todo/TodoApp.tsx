import React, {useEffect, useState} from "react";
import TodoList from "./component/TodoList";
import axios from "axios";
import {Todo} from "./model/Todo";
import AddTodo from "./component/AddTodo";
import SearchTodo from "./component/SearchTodo";

export default function TodoApp(){

    const [todos, setTodos] = useState<Todo[]>([])

    const [searchText, setSearchText] = useState("")

    const filteredTodos = todos.filter(todo => todo.description.toLowerCase().includes(searchText.toLowerCase()) || todo.status.toLowerCase().includes(searchText.toLowerCase())
    )

    function handleSearchTextChange(toSearch: string){
        setSearchText(toSearch)
    }

    useEffect(() => {
        getTodos()
    }, [])

    function getTodos(){
        axios.get('/api/todo')
            .then((response) => {
                console.log(response.data)
                setTodos(response.data)
            })
    }
    return(
        <div className={"container mt-3"}>
            <SearchTodo handleSearchTextChange={handleSearchTextChange}/>
            <TodoList todos={filteredTodos} />
            <AddTodo />
        </div>
    )
}

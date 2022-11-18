import React, {useEffect, useState} from "react";
import TodoList from "./component/TodoList";
import axios from "axios";
import {Todo} from "./model/Todo";
import AddTodo from "./component/AddTodo";

export default function TodoApp(){

    const [todos, setTodos] = useState<Todo[]>([])

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
            <TodoList todos={todos} />
            <AddTodo />
        </div>
    )
}

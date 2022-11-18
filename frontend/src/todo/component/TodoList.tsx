import React from "react";
import {Todo} from "../model/Todo";
import TodoComponent from "./TodoComponent";

type TodoListProps = {
    todos: Todo[]
}

export default function TodoList(props: TodoListProps){
    const todoComponents = props.todos.map((todo) => {
        return <TodoComponent todo={{id: todo.id, description: todo.description, status: todo.status}} key={todo.id}/>
    })

    return(
        <div>
            {todoComponents}
        </div>
    )
}
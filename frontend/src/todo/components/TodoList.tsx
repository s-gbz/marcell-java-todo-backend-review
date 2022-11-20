import React from "react";
import {Todo} from "./Todo";
import TodoComponent from "./TodoComponent";

type TodoListProps = {
    todos: Todo[]
    deleteTodo(id: string): void
    updateTodo(id: string, description: string, status: string): void
}

export default function TodoList(props: TodoListProps){
    const todoComponents = props.todos.map((todo) => {
        return <TodoComponent
            updateTodo={() => props.updateTodo(todo.id, todo.description, todo.status)}
            deleteTodo={() => props.deleteTodo(todo.id)}
            todo={{id:todo.id, description: todo.description, status: todo.status}} key={todo.id}
        />
    })

    return(
        <div className={"row mt-3"}>
            {todoComponents}
        </div>
    )
}
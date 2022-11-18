import React from "react";
import {Todo} from "../model/Todo";

type TodoComponentProps = {
    todo: Todo
}

export default function TodoComponent(props: TodoComponentProps){
    return(
        <div className={"card mb-2"}>
            <div className={"card-header"}>
                #{props.todo.id} - {props.todo.status}
            </div>
            <div className={"card-body"}>
                <div className={"row"}>
                    <div className={"col-1"}>
                        <input type={"checkbox"}/>
                    </div>
                    <div className={"col"}>
                        <blockquote className={"blockquote mb-0"}>
                            <p>{props.todo.description}</p>
                            <footer className={"blockquote-footer"}>Created on <cite title={"Source Title"}>18.11.2022</cite></footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    )
}
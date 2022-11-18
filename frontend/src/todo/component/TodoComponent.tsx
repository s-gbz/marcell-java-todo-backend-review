import React from "react";
import {Todo} from "../model/Todo";

type TodoComponentProps = {
    todo: Todo
}

export default function TodoComponent(props: TodoComponentProps){
    if(props.todo.status === "OPEN"){
        return(
            <div className={"card mb-2"}>
                <div className={"card-header bg-danger text-white"}>
                    #{props.todo.id} - Open
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
                <div className={"card-footer"}>
                    <div className={"row"}>
                        <div className={"col-1"}>
                            <button className={"btn btn-danger"}>Delete</button>
                        </div>
                        <div className={"col"}>
                            <button className={"btn btn-info"}>Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }else if(props.todo.status === "IN_PROGRESS"){
        return(
            <div className={"card mb-2"}>
                <div className={"card-header bg-warning text-white"}>
                    #{props.todo.id} - In Progress
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
                <div className={"card-footer"}>
                    <div className={"row"}>
                        <div className={"col-1"}>
                            <button className={"btn btn-danger"}>Delete</button>
                        </div>
                        <div className={"col"}>
                            <button className={"btn btn-info"}>Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }else{
        return(
            <div className={"card mb-2"}>
                <div className={"card-header bg-success text-white"}>
                    #{props.todo.id} - Done
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
                <div className={"card-footer"}>
                    <div className={"row"}>
                        <div className={"col-1"}>
                            <button className={"btn btn-danger"}>Delete</button>
                        </div>
                        <div className={"col"}>
                            <button className={"btn btn-info"}>Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
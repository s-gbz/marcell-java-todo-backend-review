import React from "react";
import {Todo} from "./Todo";

type TodoComponentProps = {
    todo: Todo
    deleteTodo(id: string): void
}

export default function TodoComponent(props:TodoComponentProps){

    function handleDeleteButton(){
        props.deleteTodo(props.todo.id)
    }

    if(props.todo.status === "OPEN"){
        return (
            <div className="col-sm-6 mb-3">
                <div className="card border-danger h-100">
                    <div className={"card-header bg-danger"}>
                        <h5 className="card-title">#{props.todo.status}</h5>
                    </div>
                    <div className="card-body">
                        <p className="card-text text-danger">{props.todo.description}</p>
                    </div>
                    <div className={"card-footer"}>
                        <div className={"row"}>
                            <div className={"col-2"}>
                                <button type="button" className="btn btn-primary">Update</button>
                            </div>
                            <div className={"col-3"}>
                                <button type={"button"} className="btn btn-danger" onClick={handleDeleteButton}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }else if(props.todo.status === "IN_PROGRESS"){
        return (
            <div className="col-sm-6 mb-3">
                <div className="card border-danger h-100">
                    <div className={"card-header bg-warning"}>
                        <h5 className="card-title">#{props.todo.status}</h5>
                    </div>
                    <div className="card-body">
                        <p className="card-text text-danger">{props.todo.description}</p>
                    </div>
                    <div className={"card-footer"}>
                        <div className={"row"}>
                            <div className={"col-2"}>
                                <button type="button" className="btn btn-primary">Update</button>
                            </div>
                            <div className={"col-3"}>
                                <button type={"button"} className="btn btn-danger" onClick={handleDeleteButton}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }else{
        return (
            <div className="col-sm-6 mb-3">
                <div className="card border-danger h-100">
                    <div className={"card-header bg-success"}>
                        <h5 className="card-title">#{props.todo.status}</h5>
                    </div>
                    <div className="card-body">
                        <p className="card-text text-danger">{props.todo.description}</p>
                    </div>
                    <div className={"card-footer"}>
                        <div className={"row"}>
                            <div className={"col-2"}>
                                <button type="button" className="btn btn-primary">Update</button>
                            </div>
                            <div className={"col-3"}>
                                <button type={"button"} className="btn btn-danger" onClick={handleDeleteButton}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
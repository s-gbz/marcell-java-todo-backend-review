import React, {ChangeEvent, useState} from "react";
import {Todo} from "./Todo";

type TodoComponentProps = {
    todo: Todo
    deleteTodo(id: string): void
    updateTodo(id: string, description: string, status: string): void
}

export default function TodoComponent(props:TodoComponentProps){

    const [update, setUpdate] = useState("")

    function handleDeleteButton(){
        props.deleteTodo(props.todo.id)
    }

    function handleUpdateButton(){
        props.updateTodo(props.todo.id, props.todo.description, props.todo.status)
    }

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
                        <div className={"col"}>
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#updateTodo">
                                Update
                            </button>
                            <div className="modal fade" id="updateTodo" aria-labelledby="updateTodo"
                                 aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="updateTodoTitle">Modal title</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="input-group mb-3">
                                                <label className="input-group-text" htmlFor="updateStatus">Status</label>
                                                <select className="form-select" id="updateStatus">
                                                    <option selected>Choose...</option>
                                                    <option value="OPEN">OPEN</option>
                                                    <option value="IN_PROGRESS">IN_PROGRESS</option>
                                                    <option value="DONE">DONE</option>
                                                </select>
                                            </div>
                                            <div className="input-group mb-3">
                                                <label className="input-group-text" htmlFor="updateDescription">Description</label>
                                                <input type="text" className="form-control" placeholder="What do you need to do?" aria-label="Description" aria-describedby="updateDescription" />
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary">Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
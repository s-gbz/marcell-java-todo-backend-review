import React, {ChangeEvent, useState} from "react";
import {Todo} from "./Todo";

type TodoComponentProps = {
    todo: Todo
    deleteTodo(id: string): void
    updateTodo(id: string, description: string, status: string): void
}

export default function TodoComponent(props:TodoComponentProps){

    const [newDescription, setNewDescription] = useState("")
    const saveNewDescription = (e: ChangeEvent<HTMLInputElement>) => {
        setNewDescription(e.target.value)
    }

    function handleDeleteButton(){
        props.deleteTodo(props.todo.id)
    }

    function handleUpdateButton(){
        props.updateTodo(props.todo.id, newDescription, props.todo.status)
    }

    if(props.todo.status === "OPEN"){
        return (
            <div className="col-sm-6 mb-3">
                <div className="card border-danger h-100 bg-light">
                    <div className={"card-header bg-danger"}>
                        <h5 className="card-title">#{props.todo.status} - {props.todo.id}</h5>
                    </div>
                    <div className="card-body">
                        <p className="card-text text-danger">{props.todo.description}</p>
                    </div>
                    <div className={"card-footer"}>
                        <div className={"row"}>
                            <div className={"col-3"}>
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={"#modal" + props.todo.id}>
                                    Update
                                </button>

                                <div className="modal fade" id={"modal" + props.todo.id} aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="exampleModalLabel">Update Todo</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="input-group mb-3">
                                                    <span className="input-group-text" id="updateDescriptionInput">Description</span>
                                                    <input type="text" className="form-control" placeholder={props.todo.description}
                                                           aria-label="Description" aria-describedby="basic-addon1" onChange={saveNewDescription} />
                                                </div>
                                                <div className="input-group mb-3">
                                                    <span className="input-group-text" id="updateDescriptionInput">Status</span>
                                                    <select className="form-select" aria-label="Default select example" defaultValue={props.todo.status}>
                                                        <option value="OPEN">OPEN</option>
                                                        <option value="IN_PROGRESS">IN_PROGRESS</option>
                                                        <option value="DONE">DONE</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-primary" onClick={handleUpdateButton}>Save changes</button>
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
    }else if(props.todo.status === "IN_PROGRESS"){
        return (
            <div className="col-sm-6 mb-3">
                <div className="card border-warning h-100 bg-light">
                    <div className={"card-header bg-warning"}>
                        <h5 className="card-title">#{props.todo.status} - {props.todo.id}</h5>
                    </div>
                    <div className="card-body">
                        <p className="card-text text-danger">{props.todo.description}</p>
                    </div>
                    <div className={"card-footer"}>
                        <div className={"row"}>
                            <div className={"col-3"}>
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={"#modal" + props.todo.id}>
                                    Update
                                </button>

                                <div className="modal fade" id={"modal" + props.todo.id} aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="exampleModalLabel">Update Todo</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="input-group mb-3">
                                                    <span className="input-group-text" id="updateDescriptionInput">Description</span>
                                                    <input type="text" className="form-control" placeholder={props.todo.description}
                                                           aria-label="Description" aria-describedby="basic-addon1" />
                                                </div>
                                                <div className="input-group mb-3">
                                                    <span className="input-group-text" id="updateDescriptionInput">Status</span>
                                                    <select className="form-select" aria-label="Default select example" defaultValue={props.todo.status}>
                                                        <option value="OPEN">OPEN</option>
                                                        <option value="IN_PROGRESS">IN_PROGRESS</option>
                                                        <option value="DONE">DONE</option>
                                                    </select>
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
    }else{
        return (
            <div className="col-sm-6 mb-3">
                <div className="card border-success h-100 bg-light">
                    <div className={"card-header bg-success"}>
                        <h5 className="card-title">#{props.todo.status} - {props.todo.id}</h5>
                    </div>
                    <div className="card-body">
                        <p className="card-text text-success">{props.todo.description}</p>
                    </div>
                    <div className={"card-footer"}>
                        <div className={"row"}>
                            <div className={"col-3"}>
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={"#modal" + props.todo.id}>
                                    Update
                                </button>

                                <div className="modal fade" id={"modal" + props.todo.id} aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="exampleModalLabel">Update Todo</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="input-group mb-3">
                                                    <span className="input-group-text" id="updateDescriptionInput">Description</span>
                                                    <input type="text" className="form-control" placeholder={props.todo.description}
                                                           aria-label="Description" aria-describedby="basic-addon1" />
                                                </div>
                                                <div className="input-group mb-3">
                                                    <span className="input-group-text" id="updateDescriptionInput">Status</span>
                                                    <select className="form-select" aria-label="Default select example" defaultValue={props.todo.status}>
                                                        <option value="OPEN">OPEN</option>
                                                        <option value="IN_PROGRESS">IN_PROGRESS</option>
                                                        <option value="DONE">DONE</option>
                                                    </select>
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
}
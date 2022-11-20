import React, {ChangeEvent, useState} from "react";

type AddTodoProps = {
    addTodo(description: string): void
}

export default function AddTodo(props: AddTodoProps){

    const [input, setInput] = useState("")

    const saveInput = (event: ChangeEvent<HTMLInputElement>) =>{
        event.preventDefault();
        setInput(event.target.value)
    }

    function onClickBtn(){
        props.addTodo(input)
    }

    return (
        <div className="input-group mb-3">
            <input
                type="text"
                className="form-control"
                placeholder="What do you need to do?"
                aria-label="Add Todo"
                aria-describedby="addTodoButton"
                onChange={saveInput}
                onKeyUp={(event) => {if(event.key === "Enter"){onClickBtn()}}}
            />

            <button
                className="btn btn-outline-secondary"
                type="button"
                id="addTodoButton"
                onClick={onClickBtn}>Add Todo
            </button>
        </div>
    )
}
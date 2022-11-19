import React, {ChangeEvent, useState} from "react";
import axios from "axios";

export default function AddTodo(){

    const [input, setInput] = useState("")

    const saveInput = (event: ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value)
    }

    const addTodo = () => {
        return axios.post('/api/todo', {
            id: '',
            description: input,
            status: "OPEN"
        })
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    return(
        <div className="input-group mb-3">
            <input
                id={"inputAddTodo"}
                type="text"
                className="form-control"
                placeholder="What do you need to do?"
                aria-label="What do you need to do?"
                aria-describedby="addTodo"
                onChange={saveInput}
                onKeyUp={(event) => {if(event.key === "Enter"){addTodo().then(r => console.log(r))}}}
            />
            <button className="btn btn-secondary" type="button" id="addTodo" onClick={addTodo}>Button</button>
        </div>
    )
}
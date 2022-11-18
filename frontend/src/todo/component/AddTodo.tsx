import React, {ChangeEvent, useState} from "react";
import axios from "axios";

export default function AddTodo(){

    const [input, setInput] = useState("")

    const saveInput = (event: ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value)
    }

    const addTodo = () => {
        const toAdd =axios.post('/api/todo', {
            id: '',
            description: input,
            status: "OPEN"
        })
            .then(function (response){
                console.log(response)
            })
            .catch(function (error){
                console.log(error)
            })
        return toAdd
    }

    return(
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="What do you need to do?" aria-label="What do you need to do?" aria-describedby="button-addon2" onChange={saveInput} />
            <button className="btn btn-secondary" type="button" id="button-addon2" onClick={addTodo}>Button</button>
        </div>
    )
}
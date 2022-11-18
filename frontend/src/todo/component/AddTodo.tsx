import React, {ChangeEvent, useState} from "react";
import axios from "axios";

export default function AddTodo(){

    const [input, setInput] = useState("")

    const saveInput = (event: ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value)
    }

    const addTodo = () => {
        axios.post('/api/todo', {
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
    }

    return(
        <div>
            <input onChange={saveInput} placeholder={"What do you need to do?"}/>
            <button className={"btn btn-info"} onClick={addTodo}>Add Todo</button>
        </div>
    )
}
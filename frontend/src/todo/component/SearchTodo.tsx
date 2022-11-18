import React, {ChangeEvent} from "react";

type SearchTodoProps = {
    handleSearchTextChange(searchText: string): void
}

export default function SearchTodo(props: SearchTodoProps){

    function handleSearchTextChange(event: ChangeEvent<HTMLInputElement>){
        props.handleSearchTextChange(event.target.value)
    }

    return(
        <div className="input-group mb-2">
            <input type="text" className="form-control" placeholder="What are you looking for?" aria-label="What are you looking for?" aria-describedby="button-search" onChange={handleSearchTextChange} />
            <button className="btn btn-secondary" type="button" id="button-search" disabled>Search</button>
        </div>
    )
}
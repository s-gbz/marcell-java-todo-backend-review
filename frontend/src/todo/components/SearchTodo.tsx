import React, {ChangeEvent} from "react";

type SearchTodoProps = {
    searchTodo(searchText: string): void
}

export default function SearchTodo(props: SearchTodoProps){

    function handleSearchTextChange(event: ChangeEvent<HTMLInputElement>){
        props.searchTodo(event.target.value)
    }

    return(
        <div className="input-group mb-3 mt-3">
            <input type="text" className="form-control" placeholder="What are you looking for?" aria-label="Search Todo" aria-describedby="searchTodoBtn" onChange={handleSearchTextChange} />
            <button className="btn btn-outline-secondary disabled" type="button" id="searchTodoBtn">Search</button>
        </div>
    )
}
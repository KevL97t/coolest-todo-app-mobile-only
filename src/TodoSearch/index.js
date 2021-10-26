import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css';


function TodoSearch(){
    const { searchValue, setSearchValue } = React.useContext(TodoContext);

    const onSearchValueChange = (e) => {
        console.log(e.target.value);
        setSearchValue(e.target.value);
    };

    return(
        <div className= "search-container">
            <div className="search-title">
                <p>Look for tasks</p>
            </div>
            <input 
            className="TodoSearch" 
            placeholder="Buy eggs" 
            value={searchValue}
            onChange = { onSearchValueChange }
        />
        </div> 
    );
}

export { TodoSearch };
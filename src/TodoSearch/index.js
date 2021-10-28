import React from "react";
import './TodoSearch.css';


function TodoSearch({ searchValue, setSearchValue, loading }){
    const onSearchValueChange = (e) => {
        // console.log(e.target.value);
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
            disabled={loading}
        />
        </div> 
    );
}

export { TodoSearch };
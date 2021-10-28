import React from "react";
import './TodoCounter.css';

function TodoCounter({ totalTodos, completedTodos, loading }){
    return(
        <h2 
        className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}
        >
        You've got {completedTodos} out of {totalTodos} TODO's done.
        </h2>
    );
}

export { TodoCounter };
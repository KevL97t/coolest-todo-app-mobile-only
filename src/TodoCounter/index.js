import React from "react";
import './TodoCounter.css';

function TodoCounter({ totalTodos, completedTodos }){
    return(
        <h2 className="TodoCounter">You've got {completedTodos} out of {totalTodos} TODO's done.</h2>
    );
}

export { TodoCounter };
import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css';

function TodoCounter(){
    const { totalTodos, completedTodos } = React.useContext(TodoContext);

    return(
        <h2 className="TodoCounter">You've got {completedTodos} out of {totalTodos} TODO's done.</h2>
    );
}

export { TodoCounter };
import React from "react";
import './EmptyTodos.css'
function EmptyTodos(){

    return(
        <div className="EmptyTodos-message">
            <p>Get on and list your first todo!</p> 
            <p>(:</p>
        </div>
    );
}

export { EmptyTodos };
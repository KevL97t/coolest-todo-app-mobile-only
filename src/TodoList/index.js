import React from "react";
import './TodoList.css';
function TodoList(props){
    return(
        <section>
            <div className="tasks-container"> 
            <ul className="TodoList">
                {props.children}
            </ul>
            </div> 
        </section>
    );
}

export { TodoList }; 
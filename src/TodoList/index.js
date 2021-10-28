import React from "react";
import './TodoList.css';


function TodoList(props){
    
    const renderFunction = props.children || props.render;

    return(
        <section className="tasks-container">
            {props.error && props.onError()}

            {props.loading && props.onLoading()}

            {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

            {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}

            {props.searchedTodos.map(todo => renderFunction(todo))}

            <ul className="TodoList">
                {props.children}
            </ul>
        </section>
    );
}

export { TodoList }; 
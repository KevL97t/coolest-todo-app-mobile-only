import React from "react";

function TodoForm({ addTodo, setOpenModal }){

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onChange = (e) =>{
        setNewTodoValue(e.target.value)
    }

    const onCancel = () => {
        setOpenModal(false);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }


    return(
        <form className="todos-form" onSubmit={onSubmit}>
            <label className="newtodo-title"> What of an amazing task we'll do today?
            </label>
            <textarea 
                className = "newTodo-box"
                value = {newTodoValue}
                onChange = {onChange}
                placeholder = "Buy Flappy's food!"
            />
            <div className="newTodo-button-container">
                <button 
                    id="cancel-button"
                    type = "button"
                    onClick = {onCancel}
                 >
                        Go back
                </button>
                <button
                    id="submit-button"
                    type = "submit"
                    >
                        Add todo
                </button>
            </div>
            
        </form>
    );
}

export { TodoForm };
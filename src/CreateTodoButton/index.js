import React from "react";
import './CreateTodoButton.css';
import { MdOutlinePostAdd } from 'react-icons/md'

function CreateTodoButton(props){
    const onClickButton = () =>{
        props.setOpenModal(prevState => !prevState);
        
    }

    return (
        <button className="CreateTodoButton"
        onClick = {onClickButton}
        >
            <MdOutlinePostAdd className="create-todo-button__icon"/>
        </button>
    );
}

export { CreateTodoButton };
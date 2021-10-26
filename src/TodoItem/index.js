import React from "react";
import './TodoItem.css';
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { ImCancelCircle } from 'react-icons/im'

function TodoItem(props){
    return(
        <li className="TodoItem">
            <span className={`TodoItem-Check ${props.completed && 'TodoItem-check__active'}`}
            onClick={props.onComplete}
            >
            <AiOutlineCheckCircle className="TodoItem-check__icon"/>
            </span>
            
            <p className={`TodoItem-Text ${props.completed && 'TodoItem-Text__active'}`}>{props.text}</p>
            <span className="TodoItem-delete"
            onClick = {props.onDelete}
            >
            <ImCancelCircle className="TodoItem-delete__icon"/>
            </span>
        </li>
    );
}

export { TodoItem };
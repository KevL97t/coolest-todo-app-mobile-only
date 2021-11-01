import React from "react";
import { GiBeastEye } from 'react-icons/gi'

function EagleModeList(props){


    const onCancel = () =>{
        props.setEagleMode(false);
    }

    return(
        <section className="Eagle-mode-list" > 
            <div className="eagle-mode-list__icon-container">
                <GiBeastEye className="eagle-mode-list__icon"/>
                <span className="eagle-mode-list__text">Eagle Mode</span>
            </div>    
            <div className="eagle-mode-list__todos">
            {props.uncompleteTodosList.map(item => props.renderList(item))}
            <ul>
                { props.children }
            </ul>
            </div>
            <button
            className = "eagle-mode-list__button"
            type="button"
            onClick={ onCancel }  
            >Go hunt</button>
        </section>
    );
}

export { EagleModeList };
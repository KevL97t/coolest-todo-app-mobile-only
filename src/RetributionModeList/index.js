import React from "react";
import { GiSupersonicArrow } from 'react-icons/gi'

function RetributionModeList(props){

    const onCancel = () =>{
        props.setRetributionMode(false);
    }

    return(
        <section className="retribution-mode-list">
        <div className="retribution-mode-list__icon-container">
            <GiSupersonicArrow className="retribution-mode-list__icon"/>
            <span className="retribution-mode-list__text">Nice shot!</span>
        </div> 
        <div className = "retribution-mode-list__todos">
        {props.completedTodosList.map(item => props.renderList(item))}
            <ul>
                { props.children }
            </ul>
        </div>
        <button
        onClick = { onCancel }
        className = "retribution-mode-list__button"
        type="button"
        >Get back</button>
        </section>
    );
}

export { RetributionModeList };
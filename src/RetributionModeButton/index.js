import React from "react";
import "./RetributionModeButton.css"
import { GiSupersonicArrow } from 'react-icons/gi'


function RetributionModeButton(props){

    const onClickButton = () =>{
        props.setRetributionMode(prevState => !prevState);
    }

     return(
        <button
        className="retribution-mode-button"
        onClick={ onClickButton }
        
        >
           <GiSupersonicArrow className="retribution-mode-button__icon"/>
        </button>
        );
}

export { RetributionModeButton };
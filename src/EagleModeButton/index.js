import React from 'react'
import "./EagleModeButton.css"
import { GiBeastEye } from 'react-icons/gi'

function EagleModeButton(props){
    const onClickButton = () => {
        props.setEagleMode(prevState => !prevState)
    }

    return(
        <button
        className="eagle-mode-button"
        onClick={ onClickButton }
        >
        <GiBeastEye  className="eagle-mode-button-icon"/>
        </button>
    );
}

export { EagleModeButton };
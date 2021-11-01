import React from 'react';
import  ReactDOM  from 'react-dom';
import './EagleModeModal.css';

function EagleModeModal({ children }){
    return ReactDOM.createPortal(
        <div className="eagle-mode-modal__background">
            { children }
        </div>,
        document.getElementById('eagle-mode-modal')
    );
}

export { EagleModeModal };
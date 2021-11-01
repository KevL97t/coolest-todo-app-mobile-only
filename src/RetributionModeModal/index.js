import React from 'react';
import  ReactDOM  from 'react-dom';
import './RetributionModeModal.css';

function RetributionModeModal({ children }){
    return ReactDOM.createPortal(
        <div className="retribution-mode-modal__background">
            { children }
        </div>,
        document.getElementById('retribution-mode-modal')
    );
}

export { RetributionModeModal };
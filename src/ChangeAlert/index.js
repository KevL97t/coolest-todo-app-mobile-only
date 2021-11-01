import React from 'react';
import { useStorageListener } from './useStorageListener';
import './ChangeAlert.css'


function ChangeAlert({ syncronize }){

    const { showUp, toggleShow } = useStorageListener(syncronize);

    if(showUp){
        return (
            <section className="change-container">
            <p className="change-text">Looks like some changes were made!</p>
            <button
            className="change-button"
            onClick={()=>toggleShow(false)}
            >Refresh changes</button>
            </section>
        );
    } else {
        return null;
    }
}

export { ChangeAlert };
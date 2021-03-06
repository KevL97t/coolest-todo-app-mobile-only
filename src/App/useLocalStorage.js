import React, { useState } from "react";

function useLocalStorage(itemName, initialValue){
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);
    const [syncItem, setSyncItem] = useState(true);

  
    React.useEffect(()=>{
      setTimeout(()=>{
        try{
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
  
        if(!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
  
        setItem(parsedItem);
        setLoading(false);
        setSyncItem(true);
        } catch(error) {
          setError(error);
        }
      }, 1500);
    }, [syncItem]);
  
  
    const saveItem = (newItem) => {
      try{
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
      } catch(error){
        setError(error);
      }
    };
  
    const sync = () =>{
      setLoading(true);
      setSyncItem(false);
    }


    return {
      item,
      saveItem,
      loading,
      error,
      sync
    };
  }


  export { useLocalStorage };
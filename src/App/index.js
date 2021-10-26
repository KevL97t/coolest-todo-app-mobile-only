// import './App.css';
import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext";

// const defaultTodos = [
//   {text: "Cortar cebolla", completed: false},
//   {text: "tomar curso de React", completed: false},
//   {text: "Lllorar con la llorona", completed: false}
// ]


function App() {


  return (
   <TodoProvider>
     <AppUI 
     />
   </TodoProvider>
  );
}

export default App;

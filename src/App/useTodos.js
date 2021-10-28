import React from 'react';
import { useLocalStorage } from './useLocalStorage';


function useTodos(){
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_V1', []);
      const [searchValue, setSearchValue] = React.useState('');
      const [openModal, setOpenModal] = React.useState(false);
    
      const completedTodos = todos.filter(todo => !!todo.completed).length;
      const totalTodos = todos.length;
    
      let searchedTodos = [];
    
      if (!searchValue.length >= 1){
        searchedTodos = todos;
      } else {
        searchedTodos = todos.filter(todo => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
        });
      }
    
      const addTodo = (text) => {
        const newTodos = [...todos];
        if(text === 'UTemplate'){
          const fetchTodos = async () =>{
            const res = await fetch('https://jsonplaceholder.typicode.com/todos'),
                  json = await res.json(),
                  template = await json.slice(0, 10);
            console.log(template);

            template.forEach(item => {
            newTodos.push({
              completed: false,
              text: item.title
            })
            saveTodos(newTodos);
            })
          }
          fetchTodos();
        } else {
          newTodos.push({
            completed: false,
            text,
          });
          saveTodos(newTodos);
        }
      };

      const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
      };
    
      const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      };
    
      React.useEffect(()=>{
        console.log('use effect')
      }, []); 
    

    return {
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        };
}


export { useTodos }; 
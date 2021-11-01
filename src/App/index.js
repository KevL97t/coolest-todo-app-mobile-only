import React from "react";
import { useTodos } from "./useTodos";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoItem } from "../TodoItem";
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { EmptyTodos } from '../EmptyTodos'
import { TodosLoading } from '../TodosLoading'
import { TodosError } from '../TodosError';
import { TodoHeader } from '../TodoHeader';
import { ChangeAlert } from "../ChangeAlert";
import { EagleModeButton } from "../EagleModeButton";
import { EagleModeModal } from "../EagleModeModal";
import { EagleModeList } from "../EagleModeList";
import { RetributionModeButton } from "../RetributionModeButton";
import { RetributionModeModal } from "../RetributionModeModal";
import { RetributionModeList } from "../RetributionModeList";

function App() {
  const { 
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos, 
    completedTodos,
    searchValue, 
    setSearchValue,
    addTodo,
    syncTodos,
    eagleMode,
    setEagleMode,
    uncompleteTodosList,
    RetributionMode,
    setRetributionMode,
    completedTodosList
   } = useTodos();

   return (
  <React.Fragment>
    <TodoHeader>
        <TodoCounter 
        totalTodos={totalTodos}
        completedTodos={completedTodos}
        loading={loading}
        />
        <TodoSearch 
        searchValue = {searchValue}
        setSearchValue={setSearchValue}
        loading={loading}
        />
    </TodoHeader>

          <TodoList 
            error={error}
            loading={loading}
            searchedTodos={searchedTodos}
            totalTodos={totalTodos}
            searchText={searchValue}
            onError={() => <TodosError />}
            onLoading={() => <TodosLoading />}
            onEmptyTodos={()=><EmptyTodos />}
            onEmptySearchResults={
              (searchText) => <p style={{textAlign: 'center', color: 'white'}}>Whoops! there's no matches for {searchText}</p>
            }
            render={todo => (<TodoItem key={todo.text} text={todo.text} completed= {todo.completed} 
            onComplete={() => completeTodo(todo.text)}
            onDelete ={() => deleteTodo(todo.text)}
              />
              )}
            />

            {!!openModal && (
                <Modal>
                    <TodoForm 
                      addTodo={ addTodo }
                      setOpenModal = { setOpenModal }
                    />
                </Modal>
            )}

          <CreateTodoButton 
               setOpenModal = {setOpenModal}
    
          />

            {!!eagleMode && (
              <EagleModeModal>
                <EagleModeList 
                setEagleMode = {setEagleMode}
                uncompleteTodosList = {uncompleteTodosList}
                renderList = {item => <TodoItem key={item.text} completed={item.completed} text = {item.text}/>}
                />
              </ EagleModeModal>

              )}

          <EagleModeButton 
                setEagleMode = { setEagleMode }
              
          />

          {!!RetributionMode && (

            <RetributionModeModal>
              <RetributionModeList
              setRetributionMode = { setRetributionMode }
              completedTodosList = { completedTodosList } 
              renderList = {item => <TodoItem key={item.text} completed={item.completed} text = {item.text} />}
              />
            </RetributionModeModal>

          )}

          <RetributionModeButton 
                setRetributionMode = { setRetributionMode }
            
          />

          <ChangeAlert
          syncronize = {syncTodos}
          />
   
    </React.Fragment>

);
}

export default App;

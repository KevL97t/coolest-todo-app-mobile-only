import React from 'react';
import { TodoContext } from '../TodoContext';
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

function AppUI(){
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
        setSearchValue
       } = React.useContext(TodoContext);

    return (
        <React.Fragment>
        <TodoHeader>
            <TodoCounter 
            totalTodos={totalTodos}
            completedTodos={completedTodos}
            />
            <TodoSearch 
            searchValue = {searchValue}
            setSearchValue={setSearchValue}
            />
        </TodoHeader>
                <TodoList>
                {error && <TodosError error={error}/>}
                {loading && new Array(3).fill(1).map((a, i) => <TodosLoading key={i} />)}
                {(!loading && !searchedTodos.length) && <EmptyTodos />}
                 {searchedTodos.map(todo => (<TodoItem key={todo.text} text={todo.text} completed={todo.completed} 
                 onComplete={() => completeTodo(todo.text)}
                 onDelete ={() => deleteTodo(todo.text)}
                 />
                 ))}
                </TodoList> 
                {!!openModal && (
                    <Modal>
                        <TodoForm />
                    </Modal>
                )}

        <CreateTodoButton 
        setOpenModal = {setOpenModal}
        
        />
       
    </React.Fragment>

    );
}

export { AppUI };
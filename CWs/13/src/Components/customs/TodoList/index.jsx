import React,{useState} from 'react';

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import { Box } from '@mui/material';

import TodoItem from '../TodoItem';
import MainTodoListSection from '../MainTodoListSection';
import MyButton from '../MyButton';


import "./todoList.css"

let id = 1;
const TodoList = () => {
    const[title,setTitle] = useState("");
    const[todos,setTodos] = useState([]);

    function handleChangeInput(value){
        setTitle(value)
    }

    function genId(){
        return id++;
    }

    function addTodo(){
        if(validateTodoInputValue()){
            const originalTodos = [...todos]
            const newTodo = {title,id:genId(),isDone:false}
            const newTodos = [...originalTodos,newTodo]
            setTodos(newTodos)
            setTitle("")
        }else{
            toast.error("please enter some value")
        }
    }

    function deleteTodo(id){
        const newTodos = todos.filter(todo=>todo.id!==id)
        setTodos(newTodos)
    }

    function toggleIsDone(id){
        const index = todos.findIndex(todo=>todo.id === id)
        const copyTodos = [...todos]
        copyTodos[index].isDone = !copyTodos[index].isDone
        setTodos(copyTodos)
    }

    function validateTodoInputValue(){
        return title ? true : false
    }

    return ( 
        <>
        <ToastContainer
        autoClose={2000}/>
        <Box sx={styles.boxStyle}>
            <MainTodoListSection title={title} change={handleChangeInput}>
                <MyButton func={addTodo} title="Submit"/>
            </MainTodoListSection>
            <Box>
                {todos.map(todo=>(
                    <TodoItem title={todo.title} id={todo.id} isDone={todo.isDone} toggleFunc={toggleIsDone} deleteFunc={deleteTodo} key={todo.id}/>
                ))}
            </Box>
        </Box>
        </>
     );
}


const styles = {
    boxStyle:{
        pt:2,
        px:2,
        pb:3,
        display:'flex',
        flexDirection:'column',
        gap:2
    },
}
 
export default TodoList;
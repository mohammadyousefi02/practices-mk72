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
    const[editedTodo,setEditedTodo] = useState(null)
    const[isEditing,setIsEditing] = useState(false)

    function handleChangeInput(value){
        setTitle(value)
    }

    function genId(){
        return id++;
    }

    function addTodo(){
        if(validateTodoInputValue()){
            const originalTodos = [...todos]
            const newTodo = {title,id:genId()}
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

    function editTodoBtn(id){
        const index = todos.findIndex(todo=>todo.id === id)
        setTitle(todos[index].title)
        setEditedTodo(index)
        setIsEditing(true)
    }

    function editTodoHandler(){
        if(validateTodoInputValue()){
            const originalTodos = [...todos]
            originalTodos[editedTodo].title = title;
            setTodos(originalTodos)
            setIsEditing(false)
            setTitle("")
        }else{
            toast.error("please enter some value")
        }
    }

     function HandleBtns(){
        return(
            isEditing ? <MyButton title="update" func={editTodoHandler}/> : 
            <MyButton title="add" func={addTodo}/>
        )
    }

    function validateTodoInputValue(){
        return title ? true : false
    }

    return ( 
        <>
        <ToastContainer
        autoClose={2000}/>
        <Box sx={styles.boxStyle}>
            <MainTodoListSection title={title} change={handleChangeInput} Buttons={HandleBtns}/>
            <Box>
                {todos.map(todo=>(
                    <TodoItem title={todo.title} id={todo.id} editFunc={editTodoBtn} deleteFunc={deleteTodo} key={todo.id}/>
                ))}
            </Box>
        </Box>
        </>
     );
}


const styles = {
    boxStyle:{
        boxShadow: 10,
        width: '25rem',
        bgcolor:'#171A2B',
        borderRadius: '8px',
        pt:2,
        px:2,
        pb:3,
        display:'flex',
        flexDirection:'column',
        gap:2
    },
}
 
export default TodoList;
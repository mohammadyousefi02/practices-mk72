import React,{useState} from 'react';

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
        const originalTodos = [...todos]
        const newTodo = {title,id:genId()}
        const newTodos = [...originalTodos,newTodo]
        setTodos(newTodos)
        setTitle("")
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
        const originalTodos = [...todos]
        originalTodos[editedTodo].title = title;
        setTodos(originalTodos)
        setIsEditing(false)
        setTitle("")
    }

    function handleBtns(){
        return(
            isEditing ? <MyButton title="update" func={editTodoHandler}/> : 
            <MyButton title="add" func={addTodo}/>
        )
    }

    return ( 
        <Box sx={styles.boxStyle}>
            <MainTodoListSection title={title} change={handleChangeInput} buttons={handleBtns}/>
            <Box>
                {todos.map(todo=>(
                    <TodoItem title={todo.title} id={todo.id} editFunc={editTodoBtn} deleteFunc={deleteTodo} key={todo.id}/>
                ))}
            </Box>
        </Box>
     );
}


const styles = {
    boxStyle:{
        boxShadow: 10,
        width: '18rem',
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
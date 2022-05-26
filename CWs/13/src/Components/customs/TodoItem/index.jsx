import React from 'react';

import { Box } from '@mui/material';
import {IoCheckmarkOutline,IoCloseOutline} from 'react-icons/io5'

import "./todoItem.css"

const TodoItem = ({title,id,isDone,deleteFunc,toggleFunc}) => {
    return ( 
        <Box sx={styles.todoDiv}>
            <span className={isDone ? 'text-decoration-line-through' : ''}>{title}</span>
            <Box sx={{display:'flex',gap:'2px',fontSize:'16px'}}>
                <button className={isDone ? 'done-btn' : "green-btn-theme"}  onClick={()=>toggleFunc(id)}><IoCheckmarkOutline className='cursor-pointer'/></button>
                <button className='red-btn-theme' onClick={()=>deleteFunc(id)}><IoCloseOutline className='cursor-pointer'/></button>
            </Box>
        </Box>
     );
}
 
const styles = {
    todoDiv:{
        display: 'flex',
        justifyContent: 'space-between',
        background:`#fff`,
        p:1,
        py:2,
        borderRadius:1,
        alignItems: 'center',
        fontSize:"14px",
        my:1
    }
}
export default TodoItem
import React, { useEffect, useState } from 'react';

import { Box } from '@mui/material';
import { TiDeleteOutline } from "react-icons/ti";
import {BiEdit} from 'react-icons/bi'

import "./todoItem.css"

const hexGen = () => {
    return `#${Math.random().toString(16).slice(2,8)}`
}
const TodoItem = ({title,id,deleteFunc,editFunc}) => {

    const [bgColors,setBgColors] = useState(null)

    useEffect(()=>{
        setBgColors({first:hexGen(),second:hexGen()});
    },[])


    return ( 
        <Box sx={[styles.todoDiv,{background:`linear-gradient(96deg, ${bgColors?.first}  0%, ${bgColors?.second} 100%)`,}]}>
            {title}
            <Box sx={{display:'flex',gap:'2px',}}>
                <TiDeleteOutline style={{fontSize:"24"}} className='cursor-pointer' onClick={()=>deleteFunc(id)} />
                <BiEdit style={{fontSize:"24"}} className='cursor-pointer' onClick={()=>editFunc(id)} />
            </Box>
        </Box>
     );
}
 
const styles = {
    todoDiv:{
        display: 'flex',
        justifyContent: 'space-between',
        p:1,
        borderRadius:1,
        alignItems: 'center',
        color:'#fff',
        fontSize:"18px",
        my:1
    }
}
export default TodoItem
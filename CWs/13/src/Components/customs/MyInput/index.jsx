import { Input } from '@mui/material';
import React from 'react';

const MyInput = ({change,value}) => {
    return ( 
        <Input 
                autoFocus
                fullWidth
                disableUnderline={true}
                placeholder="Add a Todo"
                sx={styles.todoInput}
                onChange={(e)=>change(e.target.value)}
                value={value}
                />
     );
}
 

const styles = {
    todoInput:{
        px:1,
        border:1,
        bgcolor:"#fff",
        borderColor:"gray",
        borderRadius:1
    }
}
export default MyInput;
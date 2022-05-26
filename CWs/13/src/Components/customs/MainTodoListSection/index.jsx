import React from 'react';

import { Box } from '@mui/system';
import MyInput from '../MyInput';

const MainTodoListSection = ({title,change,children}) => {
    return ( 
        <>
        <Box component="h1" sx={styles.headerText}>Todo List</Box>
            <Box sx={{display:"flex",flexDirection:"column",gap:2,alignItems:'start'}}>
                <h2>Add todo</h2>
                <MyInput value={title} change={change}/>
                {children}
            </Box>
        </>
     );
}
 

const styles = {
        headerText:{
            textAlign:'center',
            fontSize:'24px'
        },    
}

export default MainTodoListSection;
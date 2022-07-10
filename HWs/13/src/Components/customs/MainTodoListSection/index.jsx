import React from 'react';

import { Box } from '@mui/system';
import MyInput from '../MyInput';

const MainTodoListSection = ({title,change,Buttons}) => {
    return ( 
        <>
        <Box sx={styles.headerText}>Feelin' productive today?</Box>
            <Box sx={{display:'flex'}}>
                <MyInput value={title} change={change}/>
                <Buttons/>
        </Box>
        </>
     );
}
 

const styles = {
        headerText:{
            color:'#fff',
            textAlign:'center',
        },    
}

export default MainTodoListSection;
import { Box } from '@mui/material';
import '../assets/styles/styles.css'

import TodoList from '../Components/customs/TodoList';
function App() {
  return (
    <Box sx={appStyle}>
        <TodoList/>
    </Box>
  );
}

const appStyle = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
}
export default App;

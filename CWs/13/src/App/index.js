import { Box } from '@mui/material';
import '../assets/styles/styles.css'

import TodoList from '../Components/customs/TodoList';
function App() {
  return (
    <Box sx={styles.appStyle}>
      <TodoList/>
    </Box>
  );
}


const styles = {
  appStyle: {
    width: '100%',
    py:3
},
}
export default App;

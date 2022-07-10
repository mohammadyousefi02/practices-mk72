import React from 'react';

import './App.css';
import { Box } from '@mui/material';
import Header from './components/customs/Header';
import Contacts from './components/customs/Contacts';

function App() {
  return (
  <Box sx={{display:'flex',justifyContent:'center',alignItems:"center",flexDirection:'column',gap:2}}>
    <Header/>
    <Contacts/>
  </Box>    
);
}

export default App;

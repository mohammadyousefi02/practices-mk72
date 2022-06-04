import React from 'react'

import { Box, Typography } from '@mui/material';

function Footer():JSX.Element {
  return (
    <Box sx={styles.header}>
        <Typography color="#fff">All right is reserved</Typography>
    </Box>
  )
}

const styles = {
  header:{
    bgcolor:"#203040",
    height:"8%",
    display:"flex",
    alignItems:"center",
    justifyContent:'center',
    px:2,
    py:1
  }
}

export default Footer
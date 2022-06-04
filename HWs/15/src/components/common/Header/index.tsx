import React from 'react'

import { Box, Typography } from '@mui/material';

function Header():JSX.Element {
  return (
    <Box sx={styles.header}>
        <Typography color="#fff">React Shopping Cart</Typography>
    </Box>
  )
}

const styles = {
  header:{
    bgcolor:"#203040",
    height:"8%",
    display:"flex",
    alignItems:"center",
    px:2,
    py:3
  }
}

export default Header
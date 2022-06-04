import React,{useContext} from 'react'

import {IndexContext} from "../../../../context"

import { Typography } from '@mui/material'
import { Box } from '@mui/system'

function Header():JSX.Element {
  const {cartList} = useContext(IndexContext)
  return (
      <>
        <Box sx={styles.header}>
            <Typography>{!cartList.length ? "Cart is Empty" : `You have ${cartList.length} in the Cart` }</Typography>
        </Box>
      </>
  )
}

const styles = {
    header:{
        borderBottom:1,
        py:1,
        textAlign: 'center'
    }
}

export default Header
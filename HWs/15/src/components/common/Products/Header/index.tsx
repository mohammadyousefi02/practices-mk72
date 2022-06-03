import { Box, Typography } from '@mui/material'
import React,{useContext} from 'react'

import {IndexContext} from "../../../../context"

function ProductHeader():JSX.Element {
  const {data} = useContext(IndexContext)
  return (
    <Box sx={styles.productHeader}>
        <Typography>{data.length} Product</Typography>
        <Typography>Order</Typography>
        <Typography>Filter</Typography>
    </Box>       
)
}

const styles = {
    productHeader:{
        display: 'flex',
        justifyContent:'space-between',
        alignItems:"center",
       borderBottom:1,
       py:1
    }
}

export default ProductHeader
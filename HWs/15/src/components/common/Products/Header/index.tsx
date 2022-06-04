import React,{useContext} from 'react'

import { Box, Typography } from '@mui/material'

import {IndexContext} from "../../../../context"

function ProductHeader():JSX.Element {
  const {datasLength,changeFilter,changeOrder} = useContext(IndexContext)

  
  return (
    <Box sx={styles.productHeader}>
        <Typography>{datasLength} Product</Typography>
        <Typography sx={{display:'flex',gap:1}}>Order
            <select onChange={(e)=>changeOrder(e.target.value)}>
                <option value="asc">Lowest</option>
                <option value="desc">Highest</option>
            </select>
        </Typography>
        <Typography sx={{display:'flex',gap:1}}>Filter
        <select onChange={(e)=>changeFilter(e.target.value)}>
                <option value="ALL">All</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XLL">XXL</option>
            </select>
        </Typography>
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
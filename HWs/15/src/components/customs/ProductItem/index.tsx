import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React,{useContext} from 'react'

import {Iproduct} from "../../../interfaces"
import MyButton from '../MyButton'
import {IndexContext} from "../../../context"

interface Props {
    data:Iproduct
}

function ProductItem({data}:Props):JSX.Element {
  const {addToCart} = useContext(IndexContext)
  return (
    <Box sx={styles.productItem}>
        <Box component="img" src={data.url} sx={styles.img}/>
        <Typography sx={{textAlign:"center"}}>{data.description}</Typography>
        <Box sx={styles.footer}>
          <Typography>$ {data.price}</Typography>
          <MyButton click={()=>addToCart(data.id)} title="add to product"/>
        </Box>
    </Box>
 )
}

const styles = {
  productItem:{
    py:1
  },
  img:{
    width:'100%',
    height:'100%',
    objectFit:"contain"
  },
  footer:{
    py:1,
    display:'flex',
    justifyContent:"space-between",
    alignItems:"center",
    px:5
  }
}

export default ProductItem
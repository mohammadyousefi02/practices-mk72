import React,{useContext} from 'react'

import {Iproduct} from "../../../interfaces"
import {IndexContext} from "../../../context"

import MyButton from '../MyButton'

import { Typography } from '@mui/material'
import { Box } from '@mui/system'

interface Props {
    data:Iproduct
}

function ProductItem({data}:Props):JSX.Element {
  const {addToCart,showModalHandler} = useContext(IndexContext)
  return (
    <Box sx={styles.productItem} className="animation-fade-tb">
        <Box component="img" src={data.url} sx={styles.img} onClick={()=>showModalHandler(data)}/>
        <Typography sx={{textAlign:"center"}}>{data.description}</Typography>
        <Box sx={styles.footer}>
          <Typography component="span">$ {data.price}</Typography>
          <MyButton click={()=>addToCart(data.id)} title="add to product"/>
        </Box>
    </Box>
 )
}

const styles = {
  productItem:{
    with:"300px",
    py:1,
    cursor:'pointer',
    '&:hover':{
      "& p":{
        color:"orange"
      }
    }
  },
  img:{
    width:'100%',
    height:'100%',
    objectFit:"contain",
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
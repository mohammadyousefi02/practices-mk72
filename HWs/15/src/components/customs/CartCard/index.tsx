import { Box, Typography } from '@mui/material'
import React,{useContext} from 'react'
import MyButton from '../MyButton'

import {Iproduct} from "../../../interfaces"
import {IndexContext} from "../../../context"

interface Params {
    data:Iproduct
}

function CartCard({data}:Params) {
  const {removeHandler} = useContext(IndexContext)

  return (
    <Box sx={styles.card}>
            <Box sx={styles.cover} component="img" src={data.url} />
            <Box sx={styles.details}>
                <Typography>{data.description}</Typography>
                <Box sx={styles.footer}>
                    <Typography>${data.price} x {data.amount}</Typography>
                    <MyButton click={()=>removeHandler(data.id)} title="remove" variant="remove-item"/>
                </Box>
            </Box>
    </Box>
  )
}

const styles = {
    card:{
        width:"100%",
        py:2,
        display:'flex',
        gap:3,
        alignItems:"center"
    },
    cover:{
        width:"20%",
        height:"30%",
        objectFit:"contain"
    },
    details:{
        display:'flex',
        flexDirection:'column',
        alignItems:"center"
    },
    footer:{
        display:'flex',
        gap:2,
        alignItems:"center",
        mt:2
    },
}

export default CartCard
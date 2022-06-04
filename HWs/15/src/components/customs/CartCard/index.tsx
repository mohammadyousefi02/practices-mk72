import React,{useContext} from 'react'

import {Iproduct} from "../../../interfaces"
import {IndexContext} from "../../../context"

import MyButton from '../MyButton'

import { Box, Typography } from '@mui/material'


interface Params {
    data:Iproduct
}

function CartCard({data}:Params) {
  const {removeHandler} = useContext(IndexContext)

  return (
    <Box sx={styles.card} className="animation-fade-lr">
            <Box sx={styles.cover} component="img" src={data.url} />
            <Box sx={styles.details}>
                <Typography sx={{textAlign:'center'}}>{data.description}</Typography>
                <Box sx={styles.footer}>
                    <Box sx={styles.footerElems}>
                        <Typography>${data.price} x {data.amount}</Typography>
                        <MyButton click={()=>removeHandler(data.id)} title="remove" variant="remove-item"/>
                    </Box>
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
        width:'100%',
        mt:2,
    },
    footerElems:{
        display:'flex',
        alignItems:"center",
        gap:1,
        position:'relative',
        left:'20%',
    }
}

export default CartCard
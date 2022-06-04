import React,{useContext} from 'react'
import { Iproduct } from '../../../interfaces'
import {IndexContext} from "../../../context"

import MyButton from '../MyButton'

import { Box, Typography } from '@mui/material'

interface Params {
    data:Iproduct
}

function ProductModal({data}:Params):JSX.Element {
    const {addToCart,closeModal} = useContext(IndexContext)
  return (
    <Box sx={styles.modal}>
        <Box sx={styles.productModal} className="animation-fade-tb">
            <Box component="img" src={data?.url} sx={styles.cover}/>
            <Box sx={{flex:1,px:3,py:2,position:{sm:'static',xs:'relative'}}}>
                <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:1}}>
                    <Typography>{data?.description}</Typography>
                    <Box component="button" onClick={closeModal} sx={{px:1,height:"5%"}}>x</Box>
                </Box>
                <Typography sx={{mt:4}}>
                This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.
                </Typography>
                <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',mt:3,px:7,gap:1}}>
                    <Typography sx={{whiteSpace:'nowrap'}}>Price : ${data?.price}</Typography>
                    <MyButton click={()=>{
                        addToCart(data?.id)
                        closeModal()
                    }} title="Add To Cart"/>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

const styles = {
    modal:{
        width:'100%',
        height:"100%",
        backgroundColor: "hsla(0,0%,100%,.534)",
        position:'fixed',
        top:0,
        zIndex:"999",
        display:"flex",
        justifyContent:'center',
        alignItems:"center",
        px:7,
        py:3
    },
    productModal:{
        bgcolor:'#fff',
        width:'100%',
        height:'100%',
        pl:1,
        border:1,
        display:"flex",
        position:'relative',
        overflow:'auto'
    },
    cover:{
        height:'100%',
        width:{sm:'35%',xs:"90%"},
        objectFit:'cover',
    }
}

export default ProductModal
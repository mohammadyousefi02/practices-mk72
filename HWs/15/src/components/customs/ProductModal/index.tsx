import { Box, Typography } from '@mui/material'
import React,{useContext} from 'react'
import { Iproduct } from '../../../interfaces'
import MyButton from '../MyButton'
import {IndexContext} from "../../../context"

interface Params {
    data:Iproduct
}

function ProductModal({data}:Params):JSX.Element {
    const {addToCart,closeModal} = useContext(IndexContext)
    console.log(data)
  return (
    <Box sx={styles.modal}>
        <Box sx={styles.productModal}>
            <Box component="img" src={data?.url} sx={styles.cover}/>
            <Box sx={{flex:1,px:3,py:2}}>
                <Box sx={{display:'flex',justifyContent:'space-between'}}>
                    <Typography>{data?.description}</Typography>
                    <button onClick={closeModal}>close</button>
                </Box>
                <Typography sx={{mt:4}}>
                This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.
                </Typography>
                <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',mt:3,px:7}}>
                    <Typography>Price : ${data?.price}</Typography>
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
        display:"flex"
    },
    cover:{
        height:'100%',
        width:"35%",
        objectFit:'cover'

    }
}

export default ProductModal
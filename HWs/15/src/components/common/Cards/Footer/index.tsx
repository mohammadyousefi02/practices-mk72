import { Box, Typography } from '@mui/material'
import React,{useContext} from 'react'
import MyButton from '../../../customs/MyButton'
import {IndexContext} from "../../../../context"

function Footer() {
  const {total} = useContext(IndexContext)
  return (
    <Box sx={styles.footer} className="animation-fade-tb">
            <Typography>Total: ${total}</Typography>
            <MyButton title="Proceed"/>
    </Box>
  )
}

const styles = {
    footer:{
        display:'flex',
        justifyContent:"space-between",
        alignItems:"center",
        pr:{xs:0,md:5},
        pl:1,
        pb:{xs:1,lg:0}
    }
}

export default Footer
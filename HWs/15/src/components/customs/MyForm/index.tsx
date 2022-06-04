import React from 'react'

import MyButton from '../MyButton'

import { Box } from '@mui/system'


interface Params{
    checkOut:()=>void
}

function MyForm({checkOut}:Params):JSX.Element {
  return (
    <Box sx={styles.form} className="animation-fade-tb">
        <Box sx={styles.formInputs}>
            <label htmlFor="email">Email</label>
            <input id='email'/>
        </Box>
        <Box sx={styles.formInputs}>
            <label htmlFor="name">Name</label>
            <input id='name'/>
        </Box>
        <Box sx={styles.formInputs}>
            <label htmlFor="address">Address</label>
            <input id='address'/>
        </Box>
        <MyButton click={checkOut} title='Checkout'/>
    </Box>
  )
}

const styles = {
    form:{
        display:'flex',
        flexDirection:'column',
        my:2.5,
        '& button':{
            my:3
        }
    },
    formInputs:{
        display:'flex',
        flexDirection:'column',
        gap:1,
        my:1,
        '& label':{
            ml:1,
        },
        '& input':{
            py:1
        }
    }
}

export default MyForm
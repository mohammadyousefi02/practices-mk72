import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React,{useContext} from 'react'
import MyButton from '../../customs/MyButton'
import Header from './Header'
import Footer from './Footer'
import CardCart from "../../customs/CartCard"
import { IndexContext } from '../../../context'
import {Iproduct} from "../../../interfaces"


function Cards():JSX.Element {
  const {cartList} = useContext(IndexContext)
  return (
      <>
        <Header />
        {cartList.map((c:Iproduct):any=>(
          <CardCart key={c.id} data={c}/>
        ))}
        {cartList.length ? <Footer/> : null}
      </>
  )
}



export default Cards
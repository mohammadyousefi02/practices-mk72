import React,{useContext, useState} from 'react'

import { IndexContext } from '../../../context'
import {Iproduct} from "../../../interfaces"

import Header from './Header'
import CardCart from "../../customs/CartCard"
import Footer from './Footer'
import MyForm from '../../customs/MyForm'



function Cards():JSX.Element {
  const {cartList} = useContext(IndexContext)
  const [showForm,setShowForm] = useState<boolean>(false)
  function toggleFormDisplay(){
    setShowForm(!showForm)
  }
  function checkOut(){
    alert("Will be sent!")
    setShowForm(false)
  }
  return (
      <>
        <Header />
        {cartList.map((c:Iproduct):any=>(
          <CardCart key={c.id} data={c}/>
        ))}
        {cartList.length ? <Footer toggleFormDisplay={toggleFormDisplay}/> : null}
        {showForm && <MyForm checkOut={checkOut}/>}
      </>
  )
}



export default Cards
import React, { useEffect, useState } from 'react';


import {TproductsList,Iproduct} from "./interfaces"
import { IndexContext } from './context';
import data from "./data/data.json"

import Header from './components/common/Header';
import Products from './components/common/Products';
import Cards from "./components/common/Cards"
import Footer from './components/common/Footer';
import ProductModal from './components/customs/ProductModal';


import { Container } from '@mui/system';
import { Box, Grid } from '@mui/material';
import _ from "lodash";


function App() {
  const [productsData,setProductsData] = useState<TproductsList>([])
  const [cartList,setCartList] = useState<TproductsList>([])
  const [total,setTotal] = useState<number>(0)
  const [checkTotal,setCheckTotal] = useState<boolean>(false)
  const [clickedProduct,setClickedProduct] = useState<Iproduct>(productsData[0])
  const [showModal,setShowModal] = useState<boolean>(false)
  const [filterValue,setFilterValue] = useState<string>("ALL")
  const [orderValue,setOrderValue] = useState<string>("asc")
  const [datasLength,setDatasLength] = useState<number>(0)

  useEffect(()=>{
    const copyData:TproductsList = [...data]
    copyData.forEach(d=>{
      d.amount = 0;
      d.total = 0
    })
    setProductsData([...copyData])
    setClickedProduct(copyData[0])
  },[])

  useEffect(()=>{
    calculateTotal()
  },[checkTotal])

  function changeFilter(value:string){
    setFilterValue(value)
  }

  function changeOrder(value:string){
    setOrderValue(value)
  }




  function calculateTotal():void{
    let total:number = 0;
    cartList.forEach(p=>total+=p.total!)
    setTotal(parseFloat(total.toFixed(2)))
  }

  function showModalHandler(data:Iproduct){
    setClickedProduct(data)
    setShowModal(true)
  }

  function closeModal(){
    setShowModal(false)
  }

  function addToCart(id:string):void{
    const copyProductsData = [...productsData]
    const index = copyProductsData.findIndex(p=>p.id===id)
    const addedCart = copyProductsData[index]
    addedCart.amount = addedCart.amount! + 1
    addedCart.total = addedCart.amount * parseFloat(addedCart.price);
    if(!cartList.includes(addedCart))setCartList([...cartList,addedCart])
  
    copyProductsData[index] = addedCart;
    setProductsData(copyProductsData)
    setCheckTotal(!checkTotal)
  }
  function removeHandler(id:string):void{
    const copyProductsData = [...productsData]
    const index = copyProductsData.findIndex(p=>p.id===id)
    const addedCart = copyProductsData[index]
    addedCart.amount = addedCart.amount! - 1
    addedCart.total = addedCart.amount * parseFloat(addedCart.price);
    if(addedCart.amount === 0){
      const editedCart = cartList.filter(p=>p.id !== id)
      setCartList(editedCart)
    }
    copyProductsData[index] = addedCart;
    setProductsData(copyProductsData)
    setCheckTotal(!checkTotal)
  }
  return (
    <IndexContext.Provider value={{data:productsData,addToCart,cartList,removeHandler,total,closeModal,showModalHandler,filterValue,changeFilter,orderValue,changeOrder,setDatasLength,datasLength}}>
      <Box sx={styles.main}>
        <Header/>
        <Container sx={{flex:1}}>
          <Grid container justifyContent="center">
            <Grid item lg={9} xs={12}>
              <Products/>
            </Grid>
            <Grid item lg={3} sm={5} xs={12}>
              <Cards/>
            </Grid>
          </Grid>
        </Container>
        <Footer/>
      </Box>
      {showModal && <ProductModal data={clickedProduct}/>}
    </IndexContext.Provider>
  );
}

const styles = {
  main:{
    width:"100%",
    height:"100%",
    display:'flex',
    flexDirection:'column'
  }
}

export default App;

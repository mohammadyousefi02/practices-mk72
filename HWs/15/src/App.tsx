import React, { useEffect, useState } from 'react';

import { Box, Grid } from '@mui/material';

import Header from './components/common/Header';
import Products from './components/common/Products';
import Cards from "./components/common/Cards"

import data from "./data/data.json"
import { IndexContext } from './context';

import {TproductsList,Iproduct} from "./interfaces"
import { Container } from '@mui/system';
import ProductModal from './components/customs/ProductModal';

console.log(data)

function App() {
  const [productsData,setProductsData] = useState<TproductsList>([])
  const [cartList,setCartList] = useState<TproductsList>([])
  const [total,setTotal] = useState<number>(0)
  const [checkTotal,setCheckTotal] = useState<boolean>(false)
  const [clickedProduct,setClickedProduct] = useState<Iproduct>(productsData[0])
  const [showModal,setShowModal] = useState<boolean>(true)
  
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

  function calculateTotal():void{
    let total:number = 0;
    cartList.forEach(p=>total+=p.total!)
    setTotal(parseFloat(total.toFixed(2)))
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
    console.log(cartList)
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
    <IndexContext.Provider value={{data:productsData,addToCart,cartList,removeHandler,total,closeModal}}>
      <Box sx={styles.main}>
        <Header/>
        <Container>
          <Grid container>
            <Grid item xs={9}>
              <Products/>
            </Grid>
            <Grid item xs={3}>
              <Cards/>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {showModal && <ProductModal data={clickedProduct}/>}
    </IndexContext.Provider>
  );
}

const styles = {
  main:{
    width:"100%",
    height:"100%"
  }
}

export default App;

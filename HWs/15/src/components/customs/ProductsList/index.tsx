import React,{useContext} from 'react'
import { IndexContext } from '../../../context/index';
import ProductItem from '../ProductItem';

import {Iproduct} from "../../../interfaces"
import { Grid } from '@mui/material';


function ProductsList():JSX.Element{
  const {data} = useContext(IndexContext)
  return ( 
    <>
    <Grid container spacing={2} py={2}>
        {data.map((d:Iproduct):any=>(
          <Grid key={d.id} item xs={4}>
            <ProductItem data={d}/>
          </Grid>
        ))}
    </Grid>
    </>

  )
}

export default ProductsList
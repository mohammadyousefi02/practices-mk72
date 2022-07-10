import React,{useContext, useEffect} from 'react'

import { IndexContext } from '../../../context/index';
import {Iproduct} from "../../../interfaces"

import ProductItem from '../ProductItem';

import { Grid } from '@mui/material';

import _ from "lodash";


function ProductsList():JSX.Element{

  const {data} = useContext(IndexContext)

  return ( 
    <>
    <Grid container spacing={2} py={2}>
        {data.map((d:Iproduct):any=>(
          <Grid key={d.id} item md={4} xs={12} sm={6}>
            <ProductItem description={d.description} id={d.id} price={d.price} size={d.size} url={d.url}  />
          </Grid>
        ))}
    </Grid>
    </>

  )
}

export default ProductsList
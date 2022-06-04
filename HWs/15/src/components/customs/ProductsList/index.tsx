import React,{useContext} from 'react'

import { IndexContext } from '../../../context/index';
import {Iproduct} from "../../../interfaces"

import ProductItem from '../ProductItem';

import { Grid } from '@mui/material';

import _ from "lodash";


function ProductsList():JSX.Element{
  const {data,filterValue,orderValue,setDatasLength} = useContext(IndexContext)
  const filteredData = data.filter(d=>d.size.includes(filterValue))
  setDatasLength(filteredData.length)
  const orderedData = _.orderBy(filteredData,["price"],[orderValue === "asc" ? "asc" : 'desc'])

  return ( 
    <>
    <Grid container spacing={2} py={2}>
        {orderedData.map((d:Iproduct):any=>(
          <Grid key={d.id} item md={4} xs={12} sm={6}>
            <ProductItem data={d}/>
          </Grid>
        ))}
    </Grid>
    </>

  )
}

export default ProductsList
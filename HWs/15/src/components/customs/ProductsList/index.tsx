import React,{useContext} from 'react'
import { IndexContext } from '../../../context/index';
import ProductItem from '../ProductItem';
import _ from "lodash";


import {Iproduct} from "../../../interfaces"
import { Grid } from '@mui/material';


function ProductsList():JSX.Element{
  const {data,filterValue,orderValue,setDatasLength} = useContext(IndexContext)
  const filteredData = data.filter(d=>d.size.includes(filterValue))
  setDatasLength(filteredData.length)
  const orderedData = _.orderBy(filteredData,["price"],[orderValue === "asc" ? "asc" : 'desc'])

  return ( 
    <>
    <Grid container spacing={2} py={2}>
        {orderedData.map((d:Iproduct):any=>(
          <Grid key={d.id} item xs={4}>
            <ProductItem data={d}/>
          </Grid>
        ))}
    </Grid>
    </>

  )
}

export default ProductsList
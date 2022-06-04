import React from 'react'

import Header from "./Header"
import ProductsList from '../../customs/ProductsList'

import { Box, Container } from '@mui/system'




function Products():JSX.Element {
  return (
      <Container >
      <Box>
          <Header/>
          <ProductsList/>
      </Box>
      </Container>
 )
}

export default Products
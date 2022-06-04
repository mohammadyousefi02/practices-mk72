import { Box, Container } from '@mui/system'
import React from 'react'
import ProductsList from '../../customs/ProductsList'

import Header from "./Header"


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
import { Typography } from '@mui/material'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../../app/models/products';

const ProductDetails = () => {
  const {id} = useParams<{id: string}>();
  const [product, setProduct] = useState<Product>();

  useEffect(() =>{
    axios.get(`http://localhost:5000/api/products/${id}`)
  })

  return (
    <Typography variant='h2'>Product Details</Typography>
  )
}

export default ProductDetails
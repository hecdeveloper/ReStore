import { useEffect, useState } from "react";
import { Product } from "../models/products";
import Catalog from "../../features/catalog/Catalog";
import { Typography } from "@mui/material";



function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])


  function addProduct() {
    setProducts(prevState => [...prevState,
    {
      id: prevState.length + 101,
      name: 'Product' + (prevState.length + 1),
      price: (prevState.length * 100) + 300.00,
      brand: 'brand something',
      description: 'description something',
      pictureUrl: 'https://picsum.photos/200/300',


    }])
  }

  return (
    <>
      <div className='app'>
        <Typography variant="h1">Re-Store</Typography>
        <Catalog products={products} addProduct={addProduct} />
      </div>
    </>
  )
}

export default App
     
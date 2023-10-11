import { useEffect, useState } from "react";
import { Product } from "../models/products";



function App() {
  const [products, setProducts] = useState<Product[]>([ ]);

  useEffect(() =>{
   fetch('http://localhost:5000/api/products')
    .then(response => response.json())
    .then(data => setProducts(data))
  },[])


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
        <h1>Re-Store</h1>
        <ul>
          {products.map((product) => (
            <li key={product.id} >
              {product.name}-{product.price}
            </li>
          ))}
        </ul>
        <button onClick={addProduct}>Add product</button>
      </div>
    </>
  )
}

export default App

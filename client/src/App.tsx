import { useEffect, useState } from "react"

function App() {
  const [products, setProducts] = useState([
    { name: 'Product 1', price: 100.00 },
    { name: 'Product 2', price: 200.00 },
  ]);

  useEffect(() =>{
   fetch('http://localhost:5000/api/products')
    .then(response => response.json())
    .then(data => setProducts(data))
  },[])


  function addProduct() {
    setProducts(prevState => [...prevState, 
      { name: 'Product' + (prevState.length + 1), price: (prevState.length * 100) + 300.00 }])
  }

  return (
    <>
      <div className='app'>
        <h1>Re-Store</h1>
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              {product.name} {product.price}
            </li>
          ))}
        </ul>
        <button onClick={addProduct}>Add product</button>
      </div>
    </>
  )
}

export default App

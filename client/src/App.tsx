const products = [
  {name : 'Product 1', price: 100},
  {name : 'Product 2', price: 200},
]



function App() {
  return (
    <>
    <div className='app'>
      <h1>Re-Store</h1>
      <ul>
        {products.map((product) =>(
          <li>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default App

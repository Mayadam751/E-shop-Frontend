import React from 'react'


import  { useState } from 'react';


const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Product list */}
        <div className="col-span-2">
          <h2 className="text-xl font-bold mb-2">Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Product items */}
            {/* Replace these with your actual product components */}
            <div className="p-4 border rounded">
              <h3 className="font-bold">Product 1</h3>
              <p>Description of Product 1</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2" onClick={() => addToCart('Product 1')}>
                Add to Cart
              </button>
            </div>
            {/* Repeat for other products */}
          </div>
        </div>
        {/* Cart */}
        <div>
          <h2 className="text-xl font-bold mb-2">Cart</h2>
          <ul>
            {/* Cart items */}
            {cartItems.map((item, index) => (
              <li key={index} className="flex justify-between items-center border-b py-2">
                <span>{item}</span>
                <button className="text-red-500" onClick={() => removeFromCart(index)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
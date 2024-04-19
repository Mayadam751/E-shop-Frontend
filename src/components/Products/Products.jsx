import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import { addtoCart } from '../../redux/CartSlice'

export default function Products() {

  const dispatch = useDispatch()
  const [qty]=useState(1)

  const handleAddToCart =(product)=>{
let totalPrice = qty * product.price
const tempProduct = {
  ...product,quantity:qty,
  totalPrice
}
dispatch(addtoCart(tempProduct))
  }
  let [products, setProducts] = useState([])
  useEffect(() => {
    getAllproducts()
  }, [])

  async function getAllproducts() {
    let { data } = await axios.get('http://localhost:5000/product/')
    console.log(data);
    setProducts(data.data)


  }
  return (
    <>
     <div className="tit text-center text-success"><h1>Products</h1></div>
      <div className="products">
        <div className="grid gap-y-5 my-3 sm:grid-cols-1 md:grid-cols-5">
          
          {products.map((product) => {
            return <>
              <div key={product.id} className="col-span-1">
                {/* <Link to={'/productDetails/' + id} className='text-decoration-none text-dark'> */}
                  <div className="product p-4 border border-gray-200 rounded-md">

                    <img src={product.imageCover} className='w-full rounded-md' alt="" />
                    <h3 className='font-mono text-left'>{product.name}</h3>
                    
                    <p><span className='text-lg'>Price:</span> {product.price}EGP</p>
                    <button onClick={()=>handleAddToCart(product)} className='btn bg-success text-gray-900 w-full mt-2 border border-rounded-full border-gray-700 '>Add To Cart</button>
                  </div>
                {/* </Link> */}

              </div>
            </>
          })}
        </div>
        </div>
      </>
      )
}

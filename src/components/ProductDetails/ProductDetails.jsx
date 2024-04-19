import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import Slider from "react-slick";

function ProductDetails() {
    let params = useParams()
    let [productDetails, setProductDetails] = useState()
    let [isLoading, setIsLoading] = useState()
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    useEffect(() => {
        getProductDetails(params.id)
    }, [])

    async function getProductDetails(id) {
        setIsLoading(true)
        let { data } = await axios.get('http://localhost:5000/product/' + id);
        setIsLoading(false)
        setProductDetails(data.data)
        console.log(productDetails);
    }

    return (
        <>
            <div>

                <title>{productDetails?.title}</title>

                {!isLoading ? <div className="row align-items-center my-5">
                    <div className="col-md-3">

                        <Slider {...settings}>
                            {productDetails?.images.map((img) => {
                                return <img key={img} className='w-100 shadow-sm' src={img} alt='' />
                            })}
                        </Slider>
                    </div>
                    <div className="col-span-9 md:col-span-9">
                        <h2>{productDetails?.name}</h2>
                        
                        <p>{productDetails?.description}</p>
                        <p><span className='text-lg'>Price:</span> {productDetails?.price}EGP</p>
                        
                        <button className='bg-success text-gray-800 w-1/4 mx-auto block mb-2'>Add To Cart</button>
                    </div>
                </div> : <div className='py-5 my-5 text-center'>
                </div>
                }
            </div>
        </>
    )
}


export default ProductDetails
import React from 'react';

import { FaStar } from "react-icons/fa6";
import { CONSTANTS } from '../../constants';



const Products:React.FC = () => {
  return (
    <div className='mt-14 mb-12 '>


<div className='container'>
    {/* Header section */}
    <div className='text-center mb-10 max-w-[600px] mx-auto '>
        <p data-aos="fade-up" className='text-sm text-primary'>Top Selling Products for you</p>
        <h1 data-aos="fade-up" className='text-3xl font-bold'>Products</h1>
        <p data-aos="fade-up" className='text-xs text-gray-400'>lorem lorem morelo mlore asfsdsgdfgasddfglore
            sdlfsodgfdgdf loremsd fsfd
        </p>
    </div>
        {/* Body section */}
        <div className=''>
<div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-5 place-items-center'>
{/* card section */}
{
    CONSTANTS.PRODUCTSDATA.map((product)=>{
        return(
            <div 
            data-aos="fade-up"
            data-aos-delay={product.aosDelay}
            key={product.id}
            className='space-y-3'>
<img 
className='h-[220px] w-[150px] object-cover rounded-md '
src={product.img} alt="" />
<div>
    <h3 className='font-semibold '>{product.title}</h3>
    <p className='text-sm text-gray-600'>{product.color}</p>
    <div className='flex items-center gap-1'>
        <FaStar className='text-yellow-400 '/>
        <span>{product.rating}</span>
    </div>
</div>
            </div>
        )
    })
}
</div>
        </div>
</div>


    </div>
  )
}

export default Products
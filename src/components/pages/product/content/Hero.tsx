import React from 'react'
import Image from "../../../../assets/images/product-hero-img.svg";
import SearchIcon from "../../../../assets/images/search-icon.svg";

const ProductContentHero = () => {
    return (
        <div>
            <h1 className='text-xl font-bold mb-4'>
                PrintBase Product Catalog
            </h1>
            <p className="mb-4 text-gray-500">
                Scale your print-on-demand business with our premium-quality products with the latest printing technology and the sweetest base costs ever.
            </p>
            <button className="capitalize rounded-lg bg-gray-800 text-white text-center w-full p-2 mb-8">
                start free trial
            </button>
            <img src={Image} alt="Image" />
            <div className='relative mt-10 flex items-center'>
                <img src={SearchIcon} alt="SearchIcon" className="absolute left-[16px]" />
                <input type="text" className="indent-[48px] h-[56px] w-full bg-white border border-gray-200 rounded-lg focus:outline-none" placeholder='Search for products...' />
                <button className='text-white inline-block py-2 px-5 bg-blue-500 rounded-md absolute right-[8px]'>Search</button>
            </div>
        </div>
    )
}

export default ProductContentHero
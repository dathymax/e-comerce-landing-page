import React from 'react'
import Image1 from '../../../assets/images/product-item-img1.jpg'
import Image2 from '../../../assets/images/product-item-img2.png'

const ProductItem = () => {
    return (
        <div className="pt-[54px]">
            <div className="relative bg-white rounded-lg overflow-hidden mb-8">
                <img src={Image1} alt="Image1" />
                <img src={Image2} alt="Image2" className='w-[25px] absolute top-0 m-3' />

                <div className="p-3">
                    <p className='mb-3 font-bold'>Ladies T-shirt</p>
                    <p className="text-[14px]">
                        Base cost from: <span className="text-green-400">$6.99</span>
                    </p>
                    <p className="text-[14px]">
                        Available in <span className="text-blue-500">16</span> colors
                    </p>
                </div>
            </div>

            <div className="relative bg-white rounded-lg overflow-hidden mb-8">
                <img src={Image1} alt="Image1" />
                <img src={Image2} alt="Image2" className='w-[25px] absolute top-0 m-3' />

                <div className="p-3">
                    <p className='mb-3 font-bold'>Ladies T-shirt</p>
                    <p className="text-[14px]">
                        Base cost from: <span className="text-green-400">$6.99</span>
                    </p>
                    <p className="text-[14px]">
                        Available in <span className="text-blue-500">16</span> colors
                    </p>
                </div>
            </div>

            <div className="relative bg-white rounded-lg overflow-hidden mb-8">
                <img src={Image1} alt="Image1" />
                <img src={Image2} alt="Image2" className='w-[25px] absolute top-0 m-3' />

                <div className="p-3">
                    <p className='mb-3 font-bold'>Ladies T-shirt</p>
                    <p className="text-[14px]">
                        Base cost from: <span className="text-green-400">$6.99</span>
                    </p>
                    <p className="text-[14px]">
                        Available in <span className="text-blue-500">16</span> colors
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProductItem
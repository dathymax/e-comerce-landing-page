import React from 'react'
import ProductDetailImg from '../../../assets/images/product-detail-image.jpg';

const ProductDetail = () => {
    return (
        <div className='overflow-y-auto h-90vh bg-white'>
            <img src={ProductDetailImg} alt="ProductDetailImg" />
        </div>
    )
}

export default ProductDetail
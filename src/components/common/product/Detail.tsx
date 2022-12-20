import React from 'react'
import ProductDetailImg from '../../../assets/images/product-detail-image.jpg';
import CloseIcon from '../../../assets/images/close-icon.svg';
import Image1 from '../../../assets/images/product-detail-img1.jpeg';
import Image2 from '../../../assets/images/product-detail-img2.jpeg';
import Image3 from '../../../assets/images/product-detail-img3.jpeg';
import Image4 from '../../../assets/images/product-detail-img4.jpeg';

const ProductDetail = () => {
    return (
        <div className='relative overflow-y-auto h-90vh bg-white p-6'>
            <img src={CloseIcon} alt="CloseIcon" className='absolute right-0 top-0 m-3' />
            <img src={ProductDetailImg} alt="ProductDetailImg" className="border rounded-lg" />

            <h2>Ladies T-shirt</h2>

            <hr />

            <img src={Image1} alt="Image1" />

            <div className="text-gray-600">
                <p>
                    Remember, the best t-shirt is ultimately whatever feels right for you–not what you see in a magazine or what someone tells you is the best. Only put on t-shirts that can make you look stylish, go from day to night, and be worn from the city to a mountain.
                </p>
                <p>
                    If you’re looking for a t-shirt like that, look no further as it’s already here!
                </p>
            </div>

            <img src={Image2} alt="Image2" />

            <p><strong>Premium Fabric</strong></p>
            <p>It is made of 100% pre-shrunk cotton which makes it ultra breathable and super lightweight.</p>

            <img src={Image3} alt="Image3" />

            <p><strong>Round Neckline</strong></p>
            <p>This tee offers a classic round neckline without being too high. Perfect to show off your clavicle.</p>

            <img src={Image4} alt="Image4" />

            <p><strong>Different occasions</strong></p>
            <p>Suitable for daily wear and any occasions, such as work, dating, travel, and so on. It can be paired with jeans, leggings or a skirt.</p>
        </div>
    )
}

export default ProductDetail
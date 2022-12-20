import React from 'react'
import Footer from '../../common/layout/Footer'
import Navigation from '../../common/layout/Nav'
import Trial from '../../common/layout/Trial'
import ProductContentCatalog from './content/Catalog'
import ProductContentHero from './content/Hero'

const ProductCatalog = () => {
    return (
        <div>
            <Navigation />
            <div className='pt-24 px-5 bg-gray-100'>
                <ProductContentHero />
                <ProductContentCatalog />
            </div>
            <Trial />
            <Footer />
        </div>
    )
}

export default ProductCatalog
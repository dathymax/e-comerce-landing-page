import React from 'react'
import Image from '../../../../assets/images/content-features-img.png';

const HomePageContentFeatures = () => {
    return (
        <section>
            <div className='bg-blue-500 pt-14'>
                <img src={Image} alt="Image" />
                <div className="p-6 mt-8">
                    <h2 className='font-bold text-white text-2xl mb-5'>
                        Top-notch tools tailor-designed for your Print-on-Demand business
                    </h2>
                    <p className='text-white mb-5'>
                        Bring you the highest product quality, most competitive base costs, and blazing-fast shipping time with PrintBase's global warehousing & fulfillment system.
                    </p>
                    <button className="bg-black text-white p-3 rounded-md w-full text-[15px]">See all PrintBase features</button>
                </div>
            </div>

            <div className="p-6 bg-white">
                <div className="rounded-xl bg-gray-100 p-7 mb-6">
                    <h3 className="font-bold mb-3">
                        Show processing time
                    </h3>
                    <p className="text-[15px]">
                        Show customers their order status right in the order confirmation page via our live tracking system.
                    </p>
                </div>

                <div className="rounded-xl bg-gray-100 p-7 mb-6">
                    <h3 className="font-bold mb-3">
                        Add multiple pixels
                    </h3>
                    <p className="text-[15px]">
                        Add multiple pixels to your print-on-demand sites to fully understand customer behaviors & analyze traffic.
                    </p>
                </div>

                <div className="rounded-xl bg-gray-100 p-7 mb-6">
                    <h3 className="font-bold mb-3">
                        Copy theme to a new store
                    </h3>
                    <p className="text-[15px]">
                        Easily duplicate a theme from one of your print-on-demand stores. No more long time setup!
                    </p>
                </div>

                <div className="rounded-xl bg-gray-100 p-7 mb-6">
                    <h3 className="font-bold mb-3">
                        Centralized analytics
                    </h3>
                    <p className="text-[15px]">
                        Running multiple stores? Track your sales & get all important metrics in a single dashboard with our centralized eCommerce analytics.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default HomePageContentFeatures
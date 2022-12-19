import React from 'react'
import Image from '../../../../assets/images/content-marketing-img1.png';

const HomePageContentMarketing = () => {
    return (
        <section className="pb-5">
            <div className='bg-green-600 pt-14'>
                <img src={Image} alt="Image" />
                <div className="p-6 mt-7">
                    <h2 className="font-bold text-white text-2xl mb-4">
                        Boost sales with native marketing tools
                    </h2>
                    <p className='text-white text-[15px] mb-5'>
                        Convert the cold traffic into sales, earn more on each customer with PrintBase automated tools.
                    </p>
                    <button className="p-3 mb-7 text-center bg-black text-white rounded-md w-full text-[14px]">
                        Lean more about marketing tools
                    </button>
                </div>
            </div>
            <div className="p-6">
                <div className="rounded-xl bg-white p-7 mb-6">
                    <h3 className="font-bold mb-3">
                        Leverage social proofs & urgency marketing
                    </h3>
                    <p className="text-[15px]">
                        Show recent sales popups & stock countdowns on your storefront to create a sense of urgency & skyrocket your sales.
                    </p>
                </div>

                <div className="rounded-xl bg-white p-7 mb-6">
                    <h3 className="font-bold mb-3">
                        Leverage social proofs & urgency marketing
                    </h3>
                    <p className="text-[15px]">
                        Show recent sales popups & stock countdowns on your storefront to create a sense of urgency & skyrocket your sales.
                    </p>
                </div>

                <div className="rounded-xl bg-white p-7 mb-6">
                    <h3 className="font-bold mb-3">
                        Leverage social proofs & urgency marketing
                    </h3>
                    <p className="text-[15px]">
                        Show recent sales popups & stock countdowns on your storefront to create a sense of urgency & skyrocket your sales.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default HomePageContentMarketing
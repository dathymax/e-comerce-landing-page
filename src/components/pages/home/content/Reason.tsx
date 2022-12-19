import React from 'react';
import Image1 from '../../../../assets/images/content-reason-img1.png';
import Image2 from '../../../../assets/images/content-reason-img2.jpeg';
import Image3 from '../../../../assets/images/content-reason-img-3.png';
import Image4 from '../../../../assets/images/content-reason-img-4.png';
import Image5 from '../../../../assets/images/content-reason-img5.png';

function HomePageContentReason() {
    return (
        <section className={"pt-20 px-7"}>
            <div className={"mb-10"}>
                <p className={"text-xl mb-2"}>
                    <strong>
                        Why run your Print-on-demand business with PrintBase
                    </strong>
                </p>
                <img src={Image1} alt="Image1" className={"rounded-md"}/>
                <p className={"py-2 text-lg"}>
                    <strong>1-Click store builder</strong>
                </p>
                <p className={"py-3 text-gray-500"}>
                    Have your print-on-demand stores ready to sell in just 1 minute with PrintBase automated store builder. No coding or design skills needed.
                </p>
                <p className={"text-gray-500"}>
                    Plus, you can convert more cold traffic to buyers effortlessly when your store has already been optimized for high conversion.
                </p>
            </div>

            <div className={"mb-10"}>
                <img src={Image2} alt="Image2" className={"rounded-md"}/>
                <p className={"py-2 text-lg"}>
                    <strong>Built-in payment gateway</strong>
                </p>
                <p className={"py-3 text-gray-500"}>
                    Stay away from any payment-related troubles and have your transaction secured by PrintBase built-in payment gateway.
                </p>
                <p className={"text-gray-500"}>
                    Withdraw your profit payout only after a maximum of 3 days without waiting for customers to receive their orders.
                </p>
            </div>

            <div className={"mb-10"}>
                <img src={Image3} alt="Image3" className={"rounded-md"}/>
                <p className={"py-2 text-lg"}>
                    <strong>Competitive product prices</strong>
                </p>
                <p className={"py-3 text-gray-500"}>
                    Enjoy a wide profit margin from selling 50+ trendiest items, such as Basic Tee, Mug, Tumbler, Shoes… with the most competitive base costs in the market.
                </p>
                <p className={"text-gray-500"}>
                    Plus, PrintBase works directly with premium global fulfillment services to have your orders automatically printed & packed with the highest quality, then quickly shipped to your customers.
                </p>
            </div>

            <div className={"mb-10"}>
                <img src={Image4} alt="Image4" className={"rounded-md"}/>
                <p className={"py-2 text-lg"}>
                    <strong>Powerful product personalization</strong>
                </p>
                <p className={"py-3 text-gray-500"}>
                    Unleash the full potential of personalized products by letting your customer decide & visualize how their product will look like.
                </p>
                <p className={"text-gray-500"}>
                    Plus, get free access to our wide range of design templates & mockup generators to make your artwork stand out.
                </p>
            </div>

            <div className={"mb-10"}>
                <img src={Image5} alt="Image5" className={"rounded-md"}/>
                <p className={"py-2 text-lg"}>
                    <strong>Customer support gateway for merchants</strong>
                </p>
                <p className={"py-3 text-gray-500"}>
                    With PrintBase, you don’t have to spend time on customer service.
                </p>
                <p className={"text-gray-500"}>
                    Our 24/7 customer support gateway will answer all your buyers’ questions or requests, quickly handle any problem related to their orders, hence delights your buyers and keeps your dispute rates as low as possible.
                </p>
            </div>
        </section>
    );
}

export default HomePageContentReason;
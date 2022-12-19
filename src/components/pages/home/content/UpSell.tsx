import React from 'react';
import Image1 from '../../../../assets/images/content-up-sell-img1.png';
import Image2 from '../../../../assets/images/content-up-sell-img2.png';

function HomePageContentUpSell() {
    return (
        <section>
            <div className="upper px-7 pt-10 pb-14 bg-yellow-300 overflow-x-hidden">
                <div className="flex items-center justify-between">
                    <img
                        src={Image1}
                        alt="Image1"
                        className={"w-52 -ml-16"}
                    />
                    <img
                        src={Image2}
                        alt="Image2"
                        className={"w-52 -mr-16"}
                    />
                </div>
                <div className="mt-14">
                    <h2 className={"text-2xl"}>
                        <strong>
                            Magnify your profit easily
                        </strong>
                        <br />
                        <strong>
                            with up-sell & cross-sell
                        </strong>
                    </h2>
                    <p className={"text-2xl my-3"}>
                        <strong>
                            Customer support gateway for merchants
                        </strong>
                    </p>
                    <p className={"text-gray-600"}>
                        PrintBase provides you with powerful but free apps for effective up-sell & cross-sell, quantity discount
                        , bulk pricing, etc. to help maximize profits from your traffic.
                    </p>
                    <button className={"bg-black p-3 w-full rounded-md text-white mt-6"}>
                        Learn more about up-sell & tools
                    </button>
                </div>
            </div>
            <div className={"p-5 bg-white"}>
                <div className="p-5 mb-7 bg-gray-100 rounded-xl">
                    <h3 className={'mb-3 font-bold'}>In cart up-sell & recommendation</h3>
                    <p>Make more on every sale by offering up-sell & cross-sell items on product detail pages/ cart pages.</p>
                </div>

                <div className="p-5 mb-7 bg-gray-100 rounded-xl">
                    <h3 className={'mb-3 font-bold'}>1-click post purchase up-sell</h3>
                    <p>Increase your AOV with post purchase up-sell on the thank-you page after checkout.</p>
                </div>

                <div className="p-5 mb-7 bg-gray-100 rounded-xl">
                    <h3 className={'mb-3 font-bold'}>Product bundle, quantity discount</h3>
                    <p>Motivate customers to buy more with bundled discount and quantity discount</p>
                </div>
            </div>
        </section>
    );
}

export default HomePageContentUpSell;
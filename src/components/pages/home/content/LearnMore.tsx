import React from 'react';
import Image1 from '../../../../assets/images/content-learn-more-img1.png';
import Image2 from '../../../../assets/images/content-learn-more-img2.png';

function HomePageContentLearnMore() {
    return (
        <section className={"px-7 pt-10 pb-16 bg-yellow-300 overflow-x-hidden"}>
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
                    <br/>
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
        </section>
    );
}

export default HomePageContentLearnMore;
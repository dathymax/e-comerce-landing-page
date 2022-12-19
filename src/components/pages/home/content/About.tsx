import React from 'react';
import Image1 from '../../../../assets/images/content-about-img1.png';
import Image2 from '../../../../assets/images/content-about-img2.png';
import Image3 from '../../../../assets/images/content-about-img3.png';
import Image4 from '../../../../assets/images/content-about-img4.png';


function HomePageContentAbout() {
    return (
        <div className={"pt-20 px-6 bg-white"}>
            <h2 className={"text-xl mb-8"}>
                Focus On Selling & Maximizing Profit Let Us Take Care Of The Rest.
            </h2>
            <div className="grid">
                <section className={"mb-7"}>
                    <div
                        className={"bg-gray-200 m-auto rounded-full mb-6"}
                        style={{
                            width: "216px",
                            height: "216px",
                        }}
                    >
                        <img
                            src={Image1}
                            alt="Image1"
                            className={"-ml-8 w-[288px] max-w-md"}
                        />
                    </div>
                    <p className={"text-blue-500 text-xl"}>1.</p>
                    <p className={"mb-3 mt-1"}>Create an online store</p>
                    <p className={"text-gray-500"}>
                        Have a print-on-demand store that is optimized for high conversion rate in one click. Boundlessly customizable. No coding or advanced design skills needed.
                    </p>
                </section>

                <section className={"mb-7"}>
                    <img
                        src={Image2}
                        alt="Image2"
                        className={"shadow-xl mb-5"}
                    />
                    <p className={"text-blue-500 text-xl"}>2.</p>
                    <p className={"mb-3 mt-1"}>Add products & sell</p>
                    <p className={"text-gray-500"}>
                        Choose from PrintBase’s 50+ custom-printed products to add your artworks, make them available in your online store, and start selling to your target customers.
                    </p>
                </section>

                <section className={"mb-7"}>
                    <img
                        src={Image3}
                        alt="Image3"
                        className={"mb-5"}
                    />
                    <p className={"text-blue-500 text-xl"}>3.</p>
                    <p className={"mb-3 mt-1"}>
                        <strong>
                            We print, pack, & ship
                        </strong>
                        <br/>
                        <strong>
                            your orders
                        </strong>
                    </p>
                    <p className={"text-gray-500"}>
                        When a customer buys an item from your store, that order is automatically sent to PrintBase's factory & warehouse where it gets printed, packed, and shipped.
                    </p>
                </section>

                <section className={"mb-7"}>
                    <img
                        src={Image4}
                        alt="Image4"
                        className={"mb-5"}
                    />
                    <p className={"text-blue-500 text-xl"}>4.</p>
                    <p className={"mb-3 mt-1"}>We handle your customer support</p>
                    <p className={"text-gray-500"}>
                        Focus on what matters to your business, such as finding winning product ideas or marketing, and let PrintBase take care of all your customers' issues.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default HomePageContentAbout;
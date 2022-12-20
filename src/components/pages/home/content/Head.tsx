import React from 'react';
import Image1 from '../../../../assets/images/content-head-img1.png';
import Image2 from '../../../../assets/images/content-head-img2.png';
import Image3 from '../../../../assets/images/content-head-img3.png';
import Image4 from '../../../../assets/images/content-head-img4.png';
import Image5 from '../../../../assets/images/content-head-img5.png';
import Image6 from '../../../../assets/images/content-head-img6.png';

const imageStyle = {
    width: "200px",
    height: "200px",
    boxShadow: "1px 1px 80px 0 rgb(0 0 0 / 15%)",
}

function HomePageContentHead() {
    return (
        <section className={"px-7 overflow-hidden relative md:pt-20"} style={{ height: "715px" }}>
            <div className="md:w-[700px] m-auto">
                <h1 className={"text-center text-2xl leading-8 mb-3 md:text-4xl md:font-bold"}>
                    Run A Profitable Print-on-Demand Business With Minimal Effort
                </h1>
                <p className={"text-center text-gray-500 mb-6"}>
                    PrintBase gives you the end-to-end solution to create & sell printed products online.
                </p>
                <form className='md:flex md:items-center md:w-[550px] md:m-auto'>
                    <input
                        type="email"
                        required={true}
                        className={"p-4 mb-4 rounded-lg border border-gray-300 w-full bg-white focus:outline-0 md:mb-0 md:w-2/3 md:mr-3"}
                        placeholder={"Enter your email"}
                    />
                    <button
                        type={"submit"}
                        className={"p-4 bg-blue-500 text-white w-full rounded-lg capitalize md:w-1/3"}
                    >
                        Start free trial
                    </button>
                </form>
            </div>
            <img
                src={Image1}
                alt="Image1"
                className={"absolute left-0 bottom-20"}
                style={{
                    ...imageStyle,
                    zIndex: 1
                }}
            />
            <img
                src={Image2}
                alt="Image2"
                className={"absolute left-32 bottom-20"}
                style={{
                    ...imageStyle,
                    zIndex: 2,
                    willChange: "transform",
                    transform: "translate3d(0px, -28.4768px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                }}
            />
            <img
                src={Image3}
                alt="Image3"
                className={"absolute -right-16 bottom-16"}
                style={{
                    ...imageStyle,
                    zIndex: 2,
                    willChange: "transform",
                    transform: "translate3d(0px, -21.7516px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                }}
            />
            <img
                src={Image4}
                alt="Image4"
                className={"absolute -left-12 -bottom-20"}
                style={{
                    ...imageStyle,
                    zIndex: 2,
                    willChange: "transform",
                    transform: "translate3d(0px, -44.0966px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                }}
            />
            <img
                src={Image5}
                alt="Image5"
                className={"absolute -right-12 -bottom-16"}
                style={{
                    ...imageStyle,
                    zIndex: 2,
                    willChange: "transform",
                    transform: "translate3d(0px, -36.4768px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                }}
            />
            <img
                src={Image6}
                alt="Image6"
                className={"absolute right-20 -bottom-16"}
                style={{
                    ...imageStyle,
                    zIndex: 3,
                    willChange: "transform",
                    transform: "translate3d(0px, -20.9649px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                }}
            />
        </section>
    );
}

export default HomePageContentHead;
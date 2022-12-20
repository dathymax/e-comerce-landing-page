import React from 'react'

const Trial = () => {
    return (
        <section className="bg-sky-300 p-6">
            <h2 className="text-2xl font-bold mb-5">
                Sell & get profit the fastest way with our all-in-one Print-on-Demand solution
            </h2>
            <form>
                <input
                    type="email"
                    required={true}
                    className="py-3 px-5 bg-white focus:outline-none border border-gray-300 rounded-md w-full mb-3"
                    placeholder='Enter your email'
                />
                <button
                    type="submit"
                    className="capitalize bg-blue-500 p-4 rounded-md w-full text-center text-white text-[14px] font-bold"
                >
                    Start free trial
                </button>
            </form>
        </section>
    )
}

export default Trial
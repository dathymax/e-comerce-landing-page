import React, { useState } from 'react';
import Logo from '../../../assets/images/logo.png';

function Navigation() {
    const [showMobileNav, setShowMobileNav] = useState(false);

    const handleChangeMobileNav = () => {
        setShowMobileNav(!showMobileNav)
    }

    return (
        <nav className={`px-5 bg-white z-10 shadow-sm fixed -top-1 right-0 left-0`}>
            <div className="lg:w-[1300px] md:m-auto flex items-center justify-between">
                <img src={Logo} alt="Logo" className={"nav__logo--mobile pr-5 py-3"} />

                <ul className={`lg:static flex absolute bg-white transition-all duration-500 md:z-auto z-[-1] ease-in left-0 w-full ${showMobileNav ? "top-20 opacity-100" : "top-[-485px] md:opacity-100 opacity-0"}`}>
                    <li className='p-5 hover:text-blue-500 cursor-pointer font-bold'>Features</li>
                    <li className='p-5 hover:text-blue-500 cursor-pointer font-bold'>Product Catalog</li>
                    <li className='p-5 hover:text-blue-500 cursor-pointer font-bold'>Tier Program</li>
                    <li className='p-5 hover:text-blue-500 cursor-pointer font-bold'>Compare PrintBase</li>
                    <li className='p-5 hover:text-blue-500 cursor-pointer font-bold'>About</li>
                    <li className='p-5 hover:text-blue-500 cursor-pointer font-bold'>Blog</li>
                    <li className='p-5 hover:text-blue-500 cursor-pointer font-bold'>Pricing</li>
                </ul>

                <div className='flex items-center'>
                    <div className='sm:flex items-center hidden'>
                        <span className='hover:text-blue-500 cursor-pointer font-bold'>Login</span>
                        <button className='block capitalize py-3 w-[130px] text-[14px] text-center leading-5 mx-3 rounded-lg bg-gray-800 text-white hover:bg-gray-400 transition-all'>
                            Start Free trial
                        </button>
                    </div>

                    <div className="nav__hamburger--mobile lg:hidden block cursor-pointer" onClick={handleChangeMobileNav}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
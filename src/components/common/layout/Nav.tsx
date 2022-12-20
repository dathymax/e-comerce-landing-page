import React, { useState } from 'react';
import Logo from '../../../assets/images/logo.png';

function Navigation() {
    const [showMobileNav, setShowMobileNav] = useState(false);

    const handleChangeMobileNav = () => {
        setShowMobileNav(!showMobileNav)
    }

    return (
        <nav className={`px-5 bg-white z-10 shadow-sm fixed -top-1 right-0 left-0`}>
            <div className="md:w-[1200px] md:m-auto flex items-center justify-between">
                <img src={Logo} alt="Logo" className={"nav__logo--mobile pr-5 py-3"} />
                <div className="nav__hamburger--mobile md:hidden cursor-pointer" onClick={handleChangeMobileNav}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
            </div>

            <ul className={`absolute bg-white transition-all duration-500 md:z-auto z-[-1] ease-in left-0 w-full ${showMobileNav ? "top-20 opacity-100" : "top-[-485px] md:opacity-100 opacity-0"}`}>
                <li>Features</li>
                <li>Product Catalog</li>
                <li>Tier Program</li>
                <li>Compare PrintBase</li>
                <li>About</li>
                <li>Blog</li>
                <li>Pricing</li>
            </ul>
        </nav>
    );
}

export default Navigation;
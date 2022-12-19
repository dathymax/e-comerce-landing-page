import React, { useState } from 'react';
import Logo from '../../../assets/images/logo.png';

function Navigation() {
    return (
        <nav className={`px-5 bg-white z-10 shadow-sm fixed -top-1 right-0 left-0`}>
            <div className="container m-auto flex items-center justify-between">
                <img src={Logo} alt="Logo" className={"nav__logo--mobile pr-5 py-3"} />
                <div className="nav__hamburger--mobile">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
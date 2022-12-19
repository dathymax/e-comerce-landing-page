import React, {useState} from 'react';
import Logo from '../../../assets/images/logo.png';

function Navigation() {
    const [showBgNav, setShowBgNav] = useState(false);

    const handleShowBGNav = () => {
        if (window.scrollY >= 10) {
            setShowBgNav(true);
        } else {
            setShowBgNav(false);
        }
    }

    window.addEventListener("scroll", handleShowBGNav)

    return (
        <div className={`px-5 ${showBgNav ? "bg-white z-10" : "bg-gray-100"} flex items-center justify-between fixed top-0 right-0 left-0`}>
            <img src={Logo} alt="Logo" className={"nav__logo--mobile pr-5 py-3"}/>
            <div className="nav__hamburger--mobile">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
        </div>
    );
}

export default Navigation;
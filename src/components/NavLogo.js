import React from "react";
import Logo from '../images/logo.png';

const NavLogo = () => {
    return (
        <div className="w-full bg-white dark:bg-gray-900 box-shadow absolute">
            <div className="flex justify-center py-4">
                <span className="font-semibold text-xl tracking-tight">
                    <img src={Logo} alt="Logo" className="w-28" />
                </span>
            </div>
        </div>
    )
}

export default NavLogo;
import React, { useState } from "react";
import Logo from '../images/logo.png';
import { Link,NavLink } from "react-router-dom"
// import Modal from "antd/lib/modal/Modal";
import { FiHome,FiUser,FiGlobe } from "react-icons/fi";


function NavbarBottom() {

    const refreshPage = ()=>{
        this.setState({});
        
     }
    return (
        <div className="w-full mt-16">
            <div className="bg-white p-4 top-0 fixed w-full z-10 box-shadow">
                <div className="flex gap-2">
                    <div className="flex items-center">
                        <Link to="/">
                            <img src={Logo} className="w-44" />
                        </Link>
                    </div>
                    <div className=" flex items-center w-full justify-end overflow-hidden">
                        <form action="" className="relative">
                            <input type="search"
                                className="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-secondary focus:pl-16 focus:pr-4" />
                            <svg t="1669794568554" className="icon absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-r-secondary peer-focus:secondary" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2678"><path d="M892.949113 131.050887c-173.763299-173.763299-456.292289-173.763299-630.055587 0C97.089979 296.854433 90.196454 562.133773 241.410639 736.963299L10.345567 968.028371c-12.731381 12.731381-12.731381 33.148041 0 45.626062a32.166268 32.166268 0 0 0 22.813031 9.553814c8.234227 0 16.44734-3.188124 22.813031-9.553814L287.036701 782.589361A443.592577 443.592577 0 0 0 578.053278 891.091134c114.075711 0 228.151423-43.504165 314.895835-130.248577 173.763299-173.499381 173.763299-456.292289 0-629.79167z m-45.626061 584.155051c-148.564454 148.564454-389.964536 148.564454-538.52899 0-148.564454-148.553897-148.564454-389.964536 0-538.52899C383.07101 102.4 480.435464 65.261526 578.053278 65.261526c97.628371 0 194.982268 37.138474 269.269774 111.415422 148.289979 148.564454 148.289979 389.964536 0 538.52899z" fill="#8a8a8a" p-id="2679"></path></svg>
                        </form>

                    </div>
                </div>
            </div>
            <section id="bottom-navigation" className="block fixed inset-x-0 bottom-0 z-10 bg-white box-shadow">
                <div id="tabs" className="flex justify-between">
                    <Link onClick={refreshPage} to="/" className="w-full hover:text-black justify-center inline-block text-center pt-2 pb-1 active:text-primary text-gray-600 focus:border-t-2 focus:border-t-primary">
                        <FiHome className="inline-block mb-1 text-xl"/>
                        <span className="tab tab-home block text-xs">
                           Home</span>
                    </Link>
                    <Link to="/event" className="w-full hover:text-black justify-center inline-block focus:border-t-2 focus:border-t-primary text-center pt-2 pb-1 active:text-primary text-gray-600">                        <FiGlobe className="inline-block mb-1 text-xl"/>
                        <span className="tab tab-explore block text-xs">Explore</span>
                    </Link>
                   <Link className="w-full hover:text-black justify-center inline-block focus:border-t-2 focus:border-t-primary text-center pt-2 pb-1 active:text-primary text-gray-600">
                        <FiUser className="inline-block mb-1 text-xl"/>
                        <span className="tab tab-account block text-xs">Account</span>
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default NavbarBottom;
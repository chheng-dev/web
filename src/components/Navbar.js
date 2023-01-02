import React, { useEffect, useState } from "react";
import Logo from '../images/logo.png';
import { Link, Outlet } from "react-router-dom";
import { Space,Button } from "antd";


function Navbar() {

    const [theme, setCurrentTheme] = useState("");

    const loadTheme = () => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }

    useEffect(() => {
        // loadTheme();
    }, []);




    const changeTheme = (theme) => {
        if (theme == "light") {
            localStorage.theme = "light";
            document.documentElement.classList.remove("dark")
            setCurrentTheme("light")
        }
        else {
            localStorage.theme = "dark"
            document.documentElement.classList.add("dark")
            setCurrentTheme("dark")
        }
    }

    return (
        <>
            <div className="w-full fixed bg-white dark:bg-gray-900 top-0 z-30">
                <nav
                    className="flex items-center justify-between flex-wrap py-3 lg:px-12 shadow">
                    <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
                        <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
                            <span className="font-semibold text-xl tracking-tight">
                                <Link to="/">
                                    <img src={Logo} alt="Logo" className="w-28" />
                                </Link>
                            </span>
                        </div>
                    </div>

                    <div className="w-full flex-grow justify-start lg:flex lg:w-auto ">
                        <div className=" text-gray-700 lg:flex-grow">
                            <div className='max-w-sm'>
                                <div className="relative flex items-center w-full h-8 rounded-l-full rounded-r-full shadow-sm bg-secondary overflow-hidden">
                                    <div className="grid place-items-center h-full w-12 font-bold text-gray-300">
                                        <svg t="1669707201284" className="icon w-4 h-4" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4400"><path d="M640 768a382.24 382.24 0 0 1-247.808-90.912L45.248 1024 0 978.752l346.912-346.944A383.84 383.84 0 1 1 640 768z m0-704a320 320 0 1 0 320 320A320 320 0 0 0 640 64z" p-id="4401" fill="#2EBAE2"></path></svg>
                                    </div>

                                    <input
                                        className="px-2 h-full w-full outline-none text-sm text-gray-700 pr-2 bg-secondary"
                                        type="text"
                                        id="search"
                                        placeholder="Search Event,Name,Anything..." />
                                </div>
                            </div>
                        </div>
                        <div className="flex ">
                            <Space>
                                <Link to={`/register`}>
                                    <Button size="large" className="btn-secondary px-5 rounded-sm">Sign in</Button>
                                </Link>
                                <Link to={`/login`}>
                                    <button className="btn-primary px-5 rounded-sm">Login</button>
                                </Link>
                            </Space>
                        </div>
                    </div>

                </nav>
            </div>
            {/* <Outlet /> */}
        </>

    )
}


export default Navbar;
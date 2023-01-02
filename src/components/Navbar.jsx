import React, { useEffect, useState } from "react";
import Logo from '../images/logo.png';
import { Link,Outlet } from "react-router-dom";


function Navbar() {
    
    const [theme, setCurrentTheme] = useState("");

    const loadTheme = () =>{
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
    }

    useEffect(() => {
        // loadTheme();
    },[]);




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
                        {/* <a
                            
                            className="flex items-center rounded text-gray-700 ml-2 lg:mt-0">
                            {
                                theme === "dark" ? (
                                    <svg onClick={() => changeTheme("light")} t="1669700039484" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2677" width="20" height="20"><path d="M508.475476 777.927066a262.879 262.879 0 1 0 14.927684-525.546038 262.879 262.879 0 1 0-14.927684 525.546038Z" p-id="2678" fill="#707070"></path><path d="M512.119 213.154c17.673 0 32-14.327 32-32V95.896c0-17.673-14.327-32-32-32-17.673 0-32 14.327-32 32v85.258c0 17.673 14.327 32 32 32zM743.779 308.938c8.186 0.232 16.461-2.658 22.884-8.727l61.973-58.553c12.845-12.137 13.42-32.391 1.283-45.237-12.139-12.846-32.391-13.421-45.237-1.283l-61.973 58.553c-12.845 12.137-13.42 32.391-1.283 45.237 6.069 6.422 14.167 9.777 22.353 10.01zM936.04 487.929l-85.224-2.417c-17.666-0.501-32.393 13.414-32.894 31.08-0.501 17.666 13.414 32.394 31.08 32.895l85.224 2.417c17.666 0.501 32.393-13.415 32.894-31.08 0.501-17.667-13.414-32.394-31.08-32.895zM773.672 730.999c-12.137-12.846-32.391-13.42-45.237-1.284-12.846 12.138-13.421 32.391-1.284 45.237l58.552 61.972c6.069 6.424 14.166 9.779 22.353 10.011 8.185 0.232 16.462-2.659 22.884-8.727 12.846-12.138 13.421-32.391 1.284-45.237l-58.552-61.972zM514.455 817.14c-17.666-0.501-32.393 13.414-32.894 31.08l-2.417 85.224c-0.501 17.666 13.414 32.393 31.08 32.894 17.666 0.501 32.393-13.414 32.894-31.08l2.417-85.224c0.501-17.665-13.414-32.393-31.08-32.894zM256.094 726.369l-61.972 58.553c-12.846 12.138-13.42 32.391-1.283 45.237 6.069 6.425 14.165 9.779 22.353 10.011 8.185 0.232 16.461-2.659 22.884-8.727l61.972-58.553c12.846-12.138 13.42-32.391 1.283-45.237-12.138-12.848-32.391-13.42-45.237-1.284zM213.906 513.673c0.501-17.666-13.414-32.393-31.08-32.894l-85.224-2.417c-17.666-0.501-32.393 13.414-32.894 31.08-0.501 17.666 13.414 32.393 31.08 32.894l85.224 2.417c17.665 0.501 32.393-13.414 32.894-31.08zM258.157 299.266c6.069 6.423 14.166 9.778 22.353 10.01 8.186 0.232 16.461-2.658 22.884-8.727 12.846-12.137 13.42-32.39 1.283-45.237l-58.553-61.972c-12.138-12.846-32.39-13.421-45.237-1.283-12.846 12.137-13.42 32.391-1.283 45.237l58.553 61.972z" p-id="2679" fill="#707070"></path></svg>
                                ) : (
                                    <svg onClick={() => changeTheme("dark")} t="1669701413914" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6162" width="20" height="20"><path d="M524.8 938.666667h-4.266667a439.893333 439.893333 0 0 1-313.173333-134.4 446.293333 446.293333 0 0 1-11.093333-597.333334 432.213333 432.213333 0 0 1 170.666666-116.906666 42.666667 42.666667 0 0 1 45.226667 9.386666 42.666667 42.666667 0 0 1 10.24 42.666667 358.4 358.4 0 0 0 82.773333 375.893333 361.386667 361.386667 0 0 0 376.746667 82.773334 42.666667 42.666667 0 0 1 54.186667 55.04A433.493333 433.493333 0 0 1 836.266667 810.666667a438.613333 438.613333 0 0 1-311.466667 128z" p-id="6163"></path></svg>
                                )
                            }
                        </a> */}
                        <a href="#"
                            className="flex items-center text-md px-8 py-0.5 rounded text-gray-700 ml-2 lg:mt-0">Sign
                            in</a>

                        <a href="#"
                            className=" flex items-center text-md px-8 py-0.5 rounded  lg:mt-0 bg-primary-500 text-white">login</a>
                    </div>
                </div>

            </nav>
        </div>
        <Outlet />
        </>

    )
}


export default Navbar;
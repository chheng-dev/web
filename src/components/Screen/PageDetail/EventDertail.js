import React, { useState, useEffect } from "react";
import Footer from "../../Footer"
import { Link, useParams } from "react-router-dom"
import Loading from "../../Loading/Loading";
import { FiShoppingCart } from "react-icons/fi";
import { Space } from "antd";
import { BrowserView, MobileView } from "react-device-detect";
import Navbar from "../../Navbar";
import NavbarBottom from "../../NavBarBottom";
import { Map, GoogleApiWrapper } from 'google-maps-react';
import CurrencyFormat from 'react-currency-format';

const EventDetail = (props) => {
    const param = useParams();
    const [loading, setLoading] = useState(false)
    console.log("param", param)
    const [product, setProduct] = useState([]);

    const getProductDetail = async () => {
        try {
            setLoading(true)
            const respone = await fetch(`https://fakestoreapi.com/products/${param.id}`);
            const data = await respone.json();
            setProduct(data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    useEffect(() => {
        getProductDetail();
    }, []);

    if (loading) {
        return (
            <Loading />
        )
    }


    return (
        <>
            <BrowserView>
                <Navbar />
            </BrowserView>
            <div className="page-detail mx-auto rounded-2xl w-full h-full pt-16 bg-lightGray">
                <div className="container mx-auto mt-4">
                    <img
                        className="content-page-detail object-contain w-full md:rounded-t-xl "
                        src={product.image}
                        alt="thumbnail"
                        loading="lazy"
                    />
                </div>
            </div>
            <div className="page-detail mx-auto mt-4 p-4 md:p-0 dark:text-white bg-lightGray-50">
                <div className="grid grid-cols-1 md:flex lg:flex lg:gap-24">
                    <div className="md:flex md:w-1/2 lg:flex lg:w-2/3 min-h-screen justify-start">
                        <div className="w-full">
                            <h2 className="font-bold md:text-3xl text-xl line-clamp-2 dark:text-white">
                                {product.title}
                            </h2>
                            <div className="w-full">
                                <span className="flex">
                                    <svg t="1670237581874" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2680" width="32" height="32">
                                        <path d="M364.032 125.312a293.973333 293.973333 0 0 1 300.117333 2.474667C755.626667 184.618667 811.178667 286.08 810.666667 395.093333c-2.133333 108.373333-61.738667 210.304-136.234667 289.066667a799.018667 799.018667 0 0 1-143.274667 120.32 50.048 50.048 0 0 1-17.408 6.144 34.986667 34.986667 0 0 1-16.64-5.077333 789.973333 789.973333 0 0 1-206.464-194.005334A395.946667 395.946667 0 0 1 213.333333 389.717333c-0.042667-109.312 57.472-210.261333 150.698667-264.405333z m53.845333 309.674667a101.461333 101.461333 0 0 0 93.781334 63.872 99.797333 99.797333 0 0 0 71.808-29.909334c19.029333-19.370667 29.696-45.653333 29.610666-73.088a103.381333 103.381333 0 0 0-62.378666-95.701333 100.096 100.096 0 0 0-110.677334 22.186667 104.746667 104.746667 0 0 0-22.144 112.64z" fill="#cdcdcd" p-id="2681"></path>
                                        <path d="M298.666667 896a213.333333 42.666667 0 1 0 426.666666 0 213.333333 42.666667 0 1 0-426.666666 0Z" fill="#1E2024" opacity=".4" p-id="2682"></path>
                                    </svg>
                                    <p className="ml-1 mt-2 text-md text-gray-400 dark:text-white">The Desk Flagship - Daun Penh</p>
                                </span>
                            </div>
                            <div className="my-6">
                                <h2 className="font-bold md:text-3xl text-xl dark:text-white">
                                    About Event
                                </h2>
                                <div className="flex gap-6">
                                    <div className="flex-block">
                                        <p className="flex items-center text-gray-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                                <g id="Group_226" data-name="Group 226" transform="translate(-181 -761)">
                                                    <rect id="Rectangle_164" data-name="Rectangle 164" width="32" height="32" rx="16" transform="translate(181 761)" fill="#2ebae2" />
                                                    <path id="calendar" d="M12.138,14.94H2.8a2.8,2.8,0,0,1-2.8-2.8V2.8A2.793,2.793,0,0,1,1.867.172V1.4a1.4,1.4,0,0,0,2.8,0V0h5.6V1.4a1.4,1.4,0,0,0,2.8,0V.172A2.793,2.793,0,0,1,14.94,2.8v9.337A2.8,2.8,0,0,1,12.138,14.94Zm.934-10.271H1.867v7.47a.933.933,0,0,0,.934.934h9.337a.933.933,0,0,0,.934-.934ZM9.337,9.337H11.2V11.2H9.337Zm0-2.8H11.2V8.4H9.337Zm-2.8,2.8H8.4V11.2H6.536Zm0-2.8H8.4V8.4H6.536Zm-2.8,2.8H5.6V11.2H3.735Zm0-2.8H5.6V8.4H3.735Zm7.937-4.669A.467.467,0,0,1,11.2,1.4V0h.934V1.4A.467.467,0,0,1,11.672,1.867Zm-8.4,0A.467.467,0,0,1,2.8,1.4V0h.934V1.4A.467.467,0,0,1,3.268,1.867Z" transform="translate(189.53 769.53)" fill="#fff" />
                                                </g>
                                            </svg>

                                            <span className="ml-2 dark:text-white">Date</span>
                                        </p>
                                        <p>From 11 Sep - 12 rd Oct 2022</p>
                                    </div>
                                    <div className="flex-block">
                                        <p className="flex items-center text-gray-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                                <g id="Group_225" data-name="Group 225" transform="translate(-436 -761)">
                                                    <rect id="Rectangle_165" data-name="Rectangle 165" width="32" height="32" rx="16" transform="translate(436 761)" fill="#2ebae2" />
                                                    <path id="time" d="M71.47,64a7.47,7.47,0,1,0,7.47,7.47A7.479,7.479,0,0,0,71.47,64Zm3.1,10.219a.769.769,0,0,1-.469.392.639.639,0,0,1-.168.022.738.738,0,0,1-.382-.112l-2.491-1.6a1.01,1.01,0,0,1-.26-.2c-.343-.217-.51-.439-.51-.679V67.62a.783.783,0,1,1,1.564,0v4.028l2.378,1.461A.857.857,0,0,1,74.568,74.219Z" transform="translate(380.533 705.53)" fill="#fff" />
                                                </g>
                                            </svg>

                                            <span className="ml-2  dark:text-white"> Start Time</span>
                                        </p>
                                        <p>9:00 AM - 6:00 PM</p>
                                    </div>
                                </div>
                            </div>

                            <div className="my-6">
                                <h2 className="font-bold md:text-3xl text-xl dark:text-white">
                                    Event Locaton
                                </h2>
                                <div className="flex">
                                    <div className="rounded-md w-full" style={{ height: '300px', width: '100%', position: "relative" }}>
                                        <Map
                                            google={props.google}
                                            zoom={14}
                                            initialCenter={
                                                {
                                                    lat: 11.577827583472297,
                                                    lng: 104.90598958105248

                                                }
                                            }
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="my-6">
                                <h2 className="font-bold md:text-3xl text-xl dark:text-white">
                                    Description
                                </h2>
                                <div className="flex">
                                    <p>{product.description}</p>
                                </div>
                            </div>

                            <div className="my-6">
                                <h2 className="font-bold md:text-3xl text-xl dark:text-white">
                                    What we offer
                                </h2>
                                <div className="flex gap-12">
                                    <div className="flex w-1/3">
                                        <svg t="1669106219486" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3246" width="16" height="16"><path d="M512 1024A512 512 0 1 1 512 0a512 512 0 0 1 0 1024zM448 605.12L277.312 442.176 192 523.648 448 768l384-366.528L746.688 320 448 605.12z" fill="#0C855D" p-id="3247"></path></svg>
                                        <span className="ml-2">Free lunch</span>
                                    </div>
                                    <div className="flex w-1/3">
                                        <svg t="1669106219486" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3246" width="16" height="16"><path d="M512 1024A512 512 0 1 1 512 0a512 512 0 0 1 0 1024zM448 605.12L277.312 442.176 192 523.648 448 768l384-366.528L746.688 320 448 605.12z" fill="#0C855D" p-id="3247"></path></svg>
                                        <span className="ml-2">JCI merchandise</span>
                                    </div>
                                </div>
                                <div className="flex gap-12 ">
                                    <div className="flex w-1/3">

                                        <svg t="1669106219486" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3246" width="16" height="16"><path d="M512 1024A512 512 0 1 1 512 0a512 512 0 0 1 0 1024zM448 605.12L277.312 442.176 192 523.648 448 768l384-366.528L746.688 320 448 605.12z" fill="#0C855D" p-id="3247"></path></svg>
                                        <span className="ml-2">Free lunch</span>

                                    </div>
                                    <div className="flex w-1/3">
                                        <svg t="1669106219486" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3246" width="16" height="16"><path d="M512 1024A512 512 0 1 1 512 0a512 512 0 0 1 0 1024zM448 605.12L277.312 442.176 192 523.648 448 768l384-366.528L746.688 320 448 605.12z" fill="#0C855D" p-id="3247"></path></svg>
                                        <span className="ml-2">Free lunch</span>
                                    </div>
                                </div>
                            </div>

                            <div className="my-6">
                                <h2 className="font-bold md:text-3xl text-xl dark:text-white">
                                    Event host by
                                </h2>
                                <div className="flex">
                                    <div className="flex items-start py-6">
                                        <img className="w-16 h-16 rounded-full object-cover mr-4 box-shadow" src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="avatar" />
                                        <div className="">
                                            <div className="flex items-center justify-between">
                                                <h2 className="text-lg font-semibold text-gray-900 -mt-1 dark:text-white">Techo Startup Center </h2>
                                            </div>
                                            <p className="mt-3 text-gray-700 text-sm dark:text-white">
                                                We are a membership-based nonprofit organization of 200,000 young people ages 18 to 40 in 5,000 communities and more than 100 countries around the world.
                                            </p>
                                            <div className="mt-4 flex items-center">
                                                <div className="flex text-primary dark:text-white cursor-pointer text-sm mr-3">
                                                    <span>View Profile</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="md:flex md:w-1/2 lg:flex lg:w-1/3 justify-end  bg-white dark:bg-gray-900 h-full">
                        <div className="w-full box-shadow p-4 rounded-lg">
                            <div className="flex gap-4">
                                <div className="flex w-1/3 justify-start items-center">
                                    <span>Price</span>
                                </div>
                                <div className="flex w-2/3 justify-end items-center">
                                    <span >
                                        {/* ${product.price} */}
                                        <CurrencyFormat value={product.price} displayType={'text'} thousandSeparator={true} prefix={'$'} className="font-bold text-xl" />
                                        <span className="text-sm font-normal">/ Per Ticket</span>
                                    </span>
                                </div>
                            </div>
                            <div className="flex gap-4 mt-4">
                                <div className="flex w-1/2 justify-start items-center">
                                    <span>Quantity</span>
                                </div>
                                <div className="flex w-1/2 justify-end items-center">
                                    <div className="custom-number-input h-10 w-32">
                                        <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                                            <button data-action="decrement" className=" bg-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                                                <span className="m-auto text-2xl font-thin">−</span>
                                            </button>
                                            <input type="number" className=" focus:outline-none text-center w-full bg-gray-200 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" value="0"></input>
                                            <button data-action="increment" className="bg-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                                                <span className="m-auto text-2xl font-thin">+</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full my-6">
                                <Link to={`/guest-info/${product.id}`}>
                                    <button className="bg-primary w-full py-4 text-white rounded hover:bg-primary-300 focus:bg-primary-600">
                                        <Space>
                                            <FiShoppingCart className="text-lg" />
                                            Buy Ticket
                                        </Space>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pb-16 md:pb-0">
                <Footer />
            </div>
            <MobileView>
                <NavbarBottom />
            </MobileView>
        </>
    )
}



export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
})(EventDetail);
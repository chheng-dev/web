import React, { useState, useEffect } from "react";
import "../index.css"
import { Link, useParams } from "react-router-dom"
import Loading from "./Loading/Loading";
import { FiLogOut } from "react-icons/fi";
import { Space } from "antd";
import NavLogo from "./NavLogo";

function GuestInfo() {
    const param = useParams()
    const [loading, setLoading] = useState(false)
    console.log("param", param)
    const [product, setProduct] = useState({})

    const getProductDetail = async () => {
        try {
            setLoading(true)
            const respone = await fetch(`https://fakestoreapi.com/products/${param.id}`, {});
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
    }, {});

    if (loading) {
        return (
            <Loading />
        )
    }
    return (
        <>
            <div className="w-full">
                <NavLogo />
                <div className="md:page-detail md:mx-auto w-full">
                    <div class="md:flex md:flex-wrap w-full md:content-center md:justify-center md:h-screen ">
                        <div class="md:flex md:gap-6">
                            <div class="md:flex p-4 md:p-0 md:flex-wrap md:content-center md:justify-center">
                                <div class="w-full">
                                    <div class="p-4 box-shadow rounded-md bg-white mt-16 md:mt-0 md:py-8">
                                        <form className="">
                                            <h3 className="text-gray-600 dark:text-white font-semibold text-2xl pb-8">Guest Information</h3>
                                            <input type="hidden" name="access_key" value="" />

                                            <div className="relative mt-3 z-0 mb-6 w-full group">

                                                <input type="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-black dark:focus:border-primary-500 focus:outline-none focus:ring-0 focus:border-primary-600 peer" placeholder=" " required />
                                                <label for="floating_email" className="absolute text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary-600 peer-focus:dark:text-primary-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your name</label>
                                            </div>
                                            <div className="relative mt-3 z-0 mb-6 w-full group">
                                                <input type="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-black dark:focus:border-primary-500 focus:outline-none focus:ring-0 focus:border-primary-600 peer" placeholder=" " required />
                                                <label for="floating_email" className="absolute text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary-600 peer-focus:dark:text-primary-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your phone number</label>
                                            </div>
                                            <div className="relative mt-3 z-0 mb-6 w-full group">
                                                <input type="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-black dark:focus:border-primary-500 focus:outline-none focus:ring-0 focus:border-primary-600 peer" placeholder=" " required />
                                                <label for="floating_email" className="absolute text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary-600 peer-focus:dark:text-primary-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your email</label>
                                            </div>
                                            <div className="mt-6 text-center text-gray-400 text-xs">
                                                <p>By Check out, you have agreed with <span className="text-primaruy-600">terms and condition</span></p>
                                            </div>
                                            <div className="w-full h-full">
                                                <Link to={`/payment/${product.id}`}>
                                                    <button className="bg-primary w-full py-4 text-white rounded hover:bg-primary-300 focus:bg-primary-600">

                                                        <Space>
                                                            <FiLogOut className="text-lg" />Check out
                                                        </Space>
                                                    </button>
                                                </Link>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div class="md:flex p-4 md:p-0 md:content-center md:justify-center">
                                <div className="dark:bg-gray-900">
                                    <div className="box-shadow p-4 md:max-w-sm rounded-md md:py-8">
                                        <div className="flex gap-4">
                                            <div className="flex h-full w-1/2">
                                                <img className="object-contain h-32 rounded-lg w-full" src={product.image} />
                                            </div>
                                            <div className="flex w-1/2">
                                                <h6 className="text-lg line-clamp-2 dark:text-white">{product.title}</h6>
                                            </div>
                                        </div>
                                        <div className="p-4 md:p-0 dark:text-white">
                                            <h6 className="text-2xl font-bold dark:text-white">Order Summary</h6>
                                            <div className="my-3 border-b pb-3 border-gray-300 items-center">
                                                <span>${product.price} Per Ticket</span>
                                            </div>
                                            <div className="my-3 border-b pb-3 border-gray-300">
                                                <div className="flex gap-2">
                                                    <div className="flex w-1/2 justify-start items-center">
                                                        <span>${product.price} * 1 Ticket</span>
                                                    </div>
                                                    <div className="flex w-1/2 justify-end items-center">
                                                        <span>${product.price}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="my-3 border-b pb-3 border-gray-300">
                                                <div className="flex gap-2">
                                                    <div className="flex w-1/2 justify-start items-center">
                                                        <span>Tax</span>
                                                    </div>
                                                    <div className="flex w-1/2 justify-end items-center">
                                                        <span>$0.50</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="my-3 border-b pb-3 border-gray-300">
                                                <div className="flex gap-2">
                                                    <div className="flex w-1/2 justify-start items-center">
                                                        <span>Total Price</span>
                                                    </div>
                                                    <div className="flex w-1/2 justify-end items-center">
                                                        <span className="text-2xl font-bold">${product.price + 0.5}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GuestInfo

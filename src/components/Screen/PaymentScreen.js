import React,{useState,useEffect} from "react";
import abaLogo from "../../images/aba.png"
import creditLogo from "../../images/credit.png"
import Footer from "../Footer";
import { Link, useParams } from "react-router-dom"
import Loading from "../Loading/Loading";
import { Space } from "antd";
import NavLogo from "../NavLogo";

function PaymentPage() {
    const param = useParams()
    const [loading, setLoading] = useState(false)
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
            <Loading/>
        )
    }
    return (
        <div>
             <NavLogo />
            <div className="w-full text-black h-full pt-24 md:pt-32 md:pb-16 dark:text-white px-4 md:px-0">
                <div className="container mx-auto">
                    <div className="md:flex md:gap-4">
                        <div className="md:flex md:w-1/6 items-center"></div>
                        <div className="md:flex h-full md:w-2/6 rounded-lg p-4 box-shadow justify-start items-center bg-white dark:bg-gray-800">
                            <div className="w-full">
                                <h1 className="text-2xl font-meduim dark:text-white py-3">Choose Payment Methods</h1>
                                <div>
                                    <div className="flex border border-gray-400 rounded-lg">
                                        <div className="w-full h-full">
                                            <div className="flex items-start px-8 py-3 gap-2">
                                                <div className="flex">
                                                    <img className="w-14 h-10  mr-4 box-shadow" src={abaLogo} alt="avatar" />
                                                </div>
                                                <div className="flex-block w-3/6">
                                                    <div className="flex items-center justify-between">
                                                        <h2 className="text-sm font-semibold text-gray-900 dark:text-white -mt-1">ABA PAY</h2>

                                                    </div>
                                                    <div className="flex items-center">
                                                        <span className="text-gray-400 text-xs dark:text-white">Scan to pay with ABA Mobile</span>
                                                    </div>
                                                </div>
                                                <div className="flex w-2/6 my-auto h-full justify-end ">
                                                    <div className="flex-block h-full items-center">
                                                        <svg t="1669178518020" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4946" width="20" height="20"><path d="M512 65.984C266.08 65.984 65.984 266.08 65.984 512c0 245.952 200.064 446.016 446.016 446.016 245.952 0 446.016-200.064 446.016-446.016C958.016 266.08 757.952 65.984 512 65.984zM512 894.016C301.344 894.016 129.984 722.624 129.984 512 129.984 301.344 301.344 129.984 512 129.984c210.624 0 382.016 171.36 382.016 382.016C894.016 722.624 722.624 894.016 512 894.016z" p-id="4947" fill="#2EBAE2"></path><path d="M512 352c-88.224 0-160 71.776-160 160s71.776 160 160 160 160-71.776 160-160S600.224 352 512 352z" p-id="4948" fill="#2EBAE2"></path></svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="flex border my-3 border-gray-400 rounded">
                                        <div className="w-full h-full">
                                            <div className="flex items-start px-8 py-3 gap-2">
                                                <div className="flex">
                                                    <img className="w-14 h-10  mr-4 box-shadow" src={creditLogo} alt="avatar" />
                                                </div>
                                                <div className="flex-block w-3/6">
                                                    <div className="flex items-center justify-between">
                                                        <h2 className="text-sm font-semibold text-gray-900 dark:text-white -mt-1">ABA PAY</h2>

                                                    </div>
                                                    <div className="flex items-center">
                                                        <span className="text-gray-400 text-xs dark:text-white">Scan to pay with ABA Mobile</span>
                                                    </div>
                                                </div>
                                                <div className="flex w-2/6 my-auto h-full justify-end">
                                                    <svg t="1669179384368" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5892" width="22" height="22"><path d="M512 213.333333a298.666667 298.666667 0 1 1-298.666667 298.666667 298.666667 298.666667 0 0 1 298.666667-298.666667m0-85.333333a384 384 0 1 0 384 384A384 384 0 0 0 512 128z" p-id="5893" fill="#2EBAE2"></path></svg>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="my-4 text-center">
                                    <h6 className="dark:text-white">By Paynow, you have agreed with <span className="text-primary">terms & condition</span></h6>
                                </div>
                                <div className="w-full h-full">
                                    <Link to="/ticket">
                                        <button className="bg-primary w-full py-4 text-white rounded hover:bg-primary-300 focus:bg-primary-600">
                                            
                                            <Space>
                                            <svg t="1672215516468" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5508" width="24" height="24"><path d="M864 896H32c-19.2 0-32-12.8-32-32V288c0-19.2 12.8-32 32-32h832c19.2 0 32 12.8 32 32v576c0 19.2-12.8 32-32 32zM64 832h768V320H64v512z" fill="#e6e6e6" p-id="5509"></path><path d="M448 768c-70.4 0-128-51.2-128-112 0-19.2 12.8-32 32-32s32 12.8 32 32c0 25.6 28.8 48 64 48s64-22.4 64-48c0-22.4-25.6-48-64-48-70.4 0-128-48-128-112 0-60.8 57.6-112 128-112s128 51.2 128 112c0 19.2-12.8 32-32 32s-32-12.8-32-32c0-25.6-28.8-48-64-48s-64 22.4-64 48 28.8 48 64 48c70.4 0 128 51.2 128 112S518.4 768 448 768z" fill="#e6e6e6" p-id="5510"></path><path d="M448 441.6c-19.2 0-32-12.8-32-32V384c0-19.2 12.8-32 32-32s32 12.8 32 32v25.6c0 19.2-12.8 32-32 32zM448 800c-19.2 0-32-12.8-32-32v-25.6c0-19.2 12.8-32 32-32s32 12.8 32 32v25.6c0 19.2-12.8 32-32 32z" fill="#e6e6e6" p-id="5511"></path><path d="M992 800c-19.2 0-32-12.8-32-32V192H128c-19.2 0-32-12.8-32-32s12.8-32 32-32h864c19.2 0 32 12.8 32 32v608c0 19.2-12.8 32-32 32z" fill="#e6e6e6" p-id="5512"></path></svg>
                                            Pay Now
                                            </Space>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="md:flex mt-4 md:pt-0  h-full items-center box-shadow rounded-lg md:max-w-sm dark:bg-gray-800  bg-red-400">
                            <div className="p-4 box-shadow h-full dark:bg-gray-800">
                                <div className="flex gap-4">
                                    <div className="flex h-full w-1/2 bg-gray-200">
                                        <img className="object-contain h-32 box-shadow rounded-lg w-full" src={product.image} />
                                    </div>
                                    <div className="flex w-1/2">
                                        <h6 className="text-lg line-clamp-2 dark:text-white">{product.title}</h6>
                                    </div>
                                </div>
                                <div className="p-4 dark:text-white">
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
            <div className="pb-16 md:pb-0">
            <Footer/>
            </div>
        </div>

    )
}

export default PaymentPage
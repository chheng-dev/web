import React from "react";
import { Link } from "react-router-dom"

function Cart({ title, description, image, price, id }) {
    return (
        <>
            <Link to={`/event/${id}`}>
                <img
                    className="rounded-t-lg h-48 w-full object-contain"
                    src={image}
                    alt="thumbnail"
                    loading="lazy"
                />

                <div className="py-2 px-4">
                    <span className="text-xs text-gray-400"></span>
                    <h1
                        className="text-lg font-medium leading-6 tracking-wide text-gray-300 "
                    >
                        <Link to={`/event/${id}`}>
                            <span className="text-gray-700 dark:text-white md:text-sm line-clamp-1">
                                {title}
                            </span>
                        </Link>
                    </h1>
                    <p className="text-xs text-gray-500">
                        <span className="flex">
                            <span className="flex">
                                <svg t="1669090505682" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2331" width="17" height="17"><path d="M512 64c-172.3 0-312 139.7-312 312 0 139.8 205.3 437 282.8 544.3 7.2 9.9 18.2 14.9 29.2 14.9s22-5 29.2-14.9C618.7 813 824 515.8 824 376c0-172.3-139.7-312-312-312z m0 424c-64.1 0-116-51.9-116-116s51.9-116 116-116 116 51.9 116 116-51.9 116-116 116z" p-id="2332"></path></svg>
                            </span>
                            <span className="flex w-2/3 ml-1 line-clamp-1 dark:text-white">{description}</span>
                        </span>
                    </p>
                    <div>
                        <span className="font-medium text-lg text-red-700">${price}</span> <span className="font-normal text-gray-500 dark:text-white">/ Per Ticket</span>
                    </div>
                    <div className="flex my-6">
                        <div className="flex items-center">
                            <img className="w-8 h-8 rounded-full ring ring-gray-800" src="https://image.shutterstock.com/mosaic_250/2780032/1194497215/stock-photo-portrait-of-smiling-african-american-student-looking-at-camera-sitting-in-caf-black-millennial-1194497215.jpg" />
                            <span className="text-gray-500 ml-2 dark:text-white">Techo Startup Center</span>
                        </div>
                    </div>
                </div>
            </Link>
        </>


    )
}

export default Cart;
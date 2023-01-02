import React, { useEffect, useState } from "react";
import Category from "../Category";
import Cart from "./Cart";
import { Link, Outlet } from "react-router-dom"
import Loading from "../Loading/Loading";

function Filter(props) {
    const [openTab, setOpenTab] = useState(1);
    const [products, setPosts] = useState([]);
    const [loading, setLoading] = useState(false)

    const getPosts = async () => {
        try {
            setLoading(true);
            const respone = await fetch("https://fakestoreapi.com/products");
            const data = await respone.json();
            setPosts(data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    useEffect(() => {
        getPosts();
    }, []);

    if (loading) {
        return (
            <Loading />
        )
    }

    return (
        <div className="w-full h-full">
            <div className="inline-flex mb-4" role="group">
                <button
                    type="button"
                    className="
                rounded
                px-4
                py-1
                md:px-6
                md:py-2        
                border border-gray-300
                dark:text-white
                focus:bg-primary-600
                focus:text-white
                text-gray-600
                font-medium
                text-xs
                leading-tight
                uppercase
                hover:bg-black hover:bg-opacity-5 hover:border hover:border-gray-700 
                focus:outline-none focus:ring-0
                transition
                duration-150
                ease-in-out
            "
                    onClick={() => setOpenTab(1)}
                >
                    All
                </button>
                <button
                    type="button"
                    className="
            rounded
                 px-4
                py-1
                md:px-6
                md:py-2    
                border border-gray-300
                dark:text-white
                focus:bg-primary-600
                focus:text-white
                text-gray-600
                font-medium
                text-xs
                leading-tight
                uppercase
                hover:bg-black hover:bg-opacity-5 hover:border hover:border-gray-700
                focus:outline-none focus:ring-0
                transition
                duration-150
                ease-in-out
                ml-2
            "
                    onClick={() => setOpenTab(2)}
                >
                    Today
                </button>
                <button
                    type="button"
                    className="
                rounded
                 px-4
                py-1
                md:px-6
                md:py-2    
                border border-gray-300
                dark:text-white
                focus:bg-primary-600
                focus:text-white
                focus:border-0
                text-gray-600
                font-medium
                text-xs
                leading-tight
                uppercase
                hover:bg-black hover:bg-opacity-5 hover:border hover:border-gray-700
                focus:outline-none focus:ring-0
                transition
                duration-150
                ease-in-out
                ml-2
            "
                    onClick={() => setOpenTab(3)}
                >
                    This Week
                </button>
                <button
                    type="button"
                    className="
                rounded
                 px-4
                py-1
                md:px-6
                md:py-2    
                border border-gray-300
                dark:text-white
                focus:bg-primary-600
                focus:text-white
                text-gray-600
                font-medium
                text-xs
                leading-tight
                uppercase
                hover:bg-black hover:bg-opacity-5 hover:border hover:border-gray-700
                focus:outline-none focus:ring-0
                transition
                duration-150
                ease-in-out
                ml-2
            "
                    onClick={() => setOpenTab(4)}
                >
                    This Month
                </button>

            </div>
            <div className={openTab === 1 ? "block" : "hidden"}>
                <div className="grid grid-cols-1 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 2xl:grid 2xl:grid-cols-5 gap-4">
                    {
                        products.map((product, idx) => {
                            return (
                                <div className=" h-full mx-auto dark:bg-gray-900 dark:text-white box-shadow hover:shadow-2xl rounded-lg " key={idx}>
                                    <Cart id={product.id} title={product.title} image={product.image} description={product.description} price={product.price} />
                                </div>
                            )
                        })
                    }

                </div>

            </div>
            <div className="w-full text-center my-8">
                <Link to="/event">
                    <button className="py-4 px-28 border border-primary rounded text-primary font-meduim">More event</button>
                </Link>
            </div>
            {/* <Outlet /> */}
        </div>

    )
}

export default Filter
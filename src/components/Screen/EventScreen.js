import React, { useState, useEffect } from "react";
// import Maps from "../Maps";
// import Filter from "../Filter/button"
import { Link, withRouter } from "react-router-dom"
import Loading from "../Loading/Loading";
import Cart from "../Filter/Cart";
import { BrowserView, MobileView } from "react-device-detect";
import Navbar from "../Navbar";
import NavbarBottom from "../NavBarBottom";
import { Map, GoogleApiWrapper } from 'google-maps-react';

function EventScreen(props) {

    const [openTab, setOpenTab] = useState(1)
    const [loading, setLoading] = useState(false)
    const [products, setProduct] = useState([])

    const getProductList = async () => {
        try {
            setLoading(true)
            const respone = await fetch(`https://fakestoreapi.com/products`, {});
            const data = await respone.json();
            setProduct(data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    useEffect(() => {
        getProductList();
    }, [])

    if (loading) {
        return <Loading />
    }

    return (
        <>
            <BrowserView>
                <Navbar />
            </BrowserView>
            <div className="md:overflow-y-hidden md:event-h-screen mt-24 md:pt-16 md:mt-0">
                <div className="container">
                    <div className="p-4 md:p-0 md:overflow-hidden w-screen lg:event-h-screen ">
                        <div className="lg:flex grid grid-cols-1 md:grid md:grid-cols-1 h-full gap-4 event-h-screen pb-32">
                            <div className="md:p-4 md:pb-8 lg:flex lg:w-2/3 lg:overflow-x-hidden lg:overflow-y-auto lg:mb-16 lg:h-screen">
                                <div className="w-full">
                                    <div className=" inline-flex mb-4" role="group">
                                        <button
                                            type="button"
                                            className="
                                            rounded
                                            px-4
                                            py-1
                                            md:px-6
                                            md:py-2        
                                            border border-gray-300
                                            text-gray-600
                                            font-medium
                                            text-xs
                                            leading-tight
                                            uppercase
                                            hover:bg-black hover:bg-opacity-5
                                            focus:outline-none focus:ring-0
                                            transition
                                            duration-150
                                            ease-in-out
            "
                                            onClick={() => setOpenTab(1)}
                                        >
                                            Date
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
                                            text-gray-600
                                            font-medium
                                            text-xs
                                            leading-tight
                                            uppercase
                                            hover:bg-black hover:bg-opacity-5
                                            focus:outline-none focus:ring-0
                                            transition
                                            duration-150
                                            ease-in-out
                                            ml-2
                                        "
                                            onClick={() => setOpenTab(2)}
                                        >
                                            Price
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
                                            text-gray-600
                                            font-medium
                                            text-xs
                                            leading-tight
                                            uppercase
                                            hover:bg-black hover:bg-opacity-5
                                            focus:outline-none focus:ring-0
                                            transition
                                            duration-150
                                            ease-in-out
                                            ml-2
                                        "
                                            onClick={() => setOpenTab(3)}
                                        >
                                            Keyword
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
                                            text-gray-600
                                            font-medium
                                            text-xs
                                            leading-tight
                                            uppercase
                                            hover:bg-black hover:bg-opacity-5
                                            focus:outline-none focus:ring-0
                                            transition
                                            duration-150
                                            ease-in-out
                                            ml-2
                                        "
                                            onClick={() => setOpenTab(4)}
                                        >
                                            More Filters
                                        </button>

                                    </div>
                                    <div className={openTab === 1 ? "block" : "hidden"}>
                                        <div className="grid grid-cols-1 md:grid md:grid-cols-3 lg:grid lg:grid-cols-3 2xl:grid 2xl:grid-cols-4 gap-4">
                                            {
                                                products.map((product, idx) => {
                                                    return (
                                                        <div className="h-full mx-auto bg-white box-shadow hover:shadow-2xl rounded-lg " key={idx}>
                                                            <Cart id={product.id} title={product.title} image={product.image} description={product.description} price={product.price} />
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className={openTab === 2 ? "block" : "hidden"}>
                                        <div className="md:pb-24 grid grid-cols-1 sm:grid sm:grid-cols-2 md:grid md:grid-cols-2 md:gap-4 lg:grid lg:grid-cols-3  2xl:grid 2xl:grid-cols-4 gap-6 mt-3" >
                                            <div className="h-full mx-auto bg-white drop-shadow-lg rounded-lg hover:shadow-2xl ">
                                                <img
                                                    className="rounded-lg h-48 w-full"
                                                    src="https://i1.wp.com/www.aseanfootball.org/v3/wp-content/uploads/2022/04/The-Look-Company-FIFA.jpeg?resize=900%2C450&ssl=1"
                                                    alt="thumbnail"
                                                    loading="lazy"
                                                />

                                                <div className="py-2 px-4">
                                                    <span className="text-xs text-gray-400">11 Nov - 12 Nov</span>
                                                    <h1
                                                        className="text-lg font-medium leading-6 tracking-wide text-gray-300 "
                                                    >
                                                        <Link to={`/event-detail`}>
                                                            <span className="text-gray-700 md:text-sm">SparkMeet “Deep Learning and Khmer Text Recognit…</span>
                                                        </Link>
                                                    </h1>
                                                    <p className="text-xs text-gray-500">
                                                        <span className="flex">
                                                            <svg t="1669090505682" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2331" width="17" height="17"><path d="M512 64c-172.3 0-312 139.7-312 312 0 139.8 205.3 437 282.8 544.3 7.2 9.9 18.2 14.9 29.2 14.9s22-5 29.2-14.9C618.7 813 824 515.8 824 376c0-172.3-139.7-312-312-312z m0 424c-64.1 0-116-51.9-116-116s51.9-116 116-116 116 51.9 116 116-51.9 116-116 116z" p-id="2332"></path></svg>
                                                            <span className="ml-1">The Desk Flagship - Daun Penh…</span>
                                                        </span>
                                                    </p>
                                                    <div>
                                                        <span className="font-medium text-lg">$10.00</span> <span className="font-normal text-gray-500">/ Per Ticket</span>
                                                    </div>
                                                    <div className="flex my-6">
                                                        <div className="flex items-center">
                                                            <img className="w-8 h-8 rounded-full ring ring-gray-800" src="https://image.shutterstock.com/mosaic_250/2780032/1194497215/stock-photo-portrait-of-smiling-african-american-student-looking-at-camera-sitting-in-caf-black-millennial-1194497215.jpg" />
                                                            <span className="text-gray-500 ml-2">Techo Startup Center</span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className="h-full mx-auto bg-white drop-shadow-lg rounded-lg hover:shadow-2xl ">
                                                <img
                                                    className="rounded-lg h-48 w-full"
                                                    src="https://d12eu00glpdtk2.cloudfront.net/public/images/events/kidzania-football-cup-2022-registration/KidZania-Doha-Football-Cup-2022.jpg"
                                                    alt="thumbnail"
                                                    loading="lazy"
                                                />

                                                <div className="py-2 px-4">
                                                    <span className="text-xs text-gray-500">11 Nov - 12 Nov</span>
                                                    <h1
                                                        className="text-lg font-medium leading-6 tracking-wide text-gray-300 "
                                                    >
                                                        <Link to={`/event-detail`}>
                                                            <span className="text-gray-700 md:text-sm">SparkMeet “Deep Learning and Khmer Text Recognit…</span>
                                                        </Link>
                                                    </h1>
                                                    <p className="text-xs text-gray-400">
                                                        <span className="flex">
                                                            <svg t="1669090505682" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2331" width="17" height="17"><path d="M512 64c-172.3 0-312 139.7-312 312 0 139.8 205.3 437 282.8 544.3 7.2 9.9 18.2 14.9 29.2 14.9s22-5 29.2-14.9C618.7 813 824 515.8 824 376c0-172.3-139.7-312-312-312z m0 424c-64.1 0-116-51.9-116-116s51.9-116 116-116 116 51.9 116 116-51.9 116-116 116z" p-id="2332"></path></svg>
                                                            <span className="ml-1">The Desk Flagship - Daun Penh…</span>
                                                        </span>
                                                    </p>
                                                    <div>
                                                        <span className="font-medium text-lg">$10.00</span> <span className="font-normal text-gray-400">/ Per Ticket</span>
                                                    </div>
                                                    <div className="flex my-6">
                                                        <div className="flex items-center">
                                                            <img className="w-8 h-8 rounded-full ring ring-gray-800" src="https://image.shutterstock.com/mosaic_250/2780032/1194497215/stock-photo-portrait-of-smiling-african-american-student-looking-at-camera-sitting-in-caf-black-millennial-1194497215.jpg" />
                                                            <span className="text-gray-500 ml-2">Techo Startup Center</span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className="h-full mx-auto bg-white drop-shadow-lg rounded-lg hover:shadow-2xl ">
                                                <img
                                                    className="rounded-lg h-48 w-full"
                                                    src="https://library.sportingnews.com/styles/twitter_card_120x120/s3/2022-02/FIFA%20Club%20World%20Cup%20trophy%20020422.jpg?itok=5pZc3sgR"
                                                    alt="thumbnail"
                                                    loading="lazy"
                                                />

                                                <div className="py-2 px-4">
                                                    <span className="text-xs text-gray-500">11 Nov - 12 Nov</span>
                                                    <h1
                                                        className="text-lg font-medium leading-6 tracking-wide text-gray-300 "
                                                    >
                                                        <Link to="/event-detail">
                                                            <span className="text-gray-700 md:text-sm">SparkMeet “Deep Learning and Khmer Text Recognit…</span>
                                                        </Link>
                                                    </h1>
                                                    <p className="text-xs text-gray-400">
                                                        <span className="flex">
                                                            <svg t="1669090505682" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2331" width="17" height="17"><path d="M512 64c-172.3 0-312 139.7-312 312 0 139.8 205.3 437 282.8 544.3 7.2 9.9 18.2 14.9 29.2 14.9s22-5 29.2-14.9C618.7 813 824 515.8 824 376c0-172.3-139.7-312-312-312z m0 424c-64.1 0-116-51.9-116-116s51.9-116 116-116 116 51.9 116 116-51.9 116-116 116z" p-id="2332"></path></svg>
                                                            <span className="ml-1">The Desk Flagship - Daun Penh…</span>
                                                        </span>
                                                    </p>
                                                    <div>
                                                        <span className="font-medium text-lg">$10.00</span> <span className="font-normal text-gray-400">/ Per Ticket</span>
                                                    </div>
                                                    <div className="flex my-6">
                                                        <div className="flex items-center">
                                                            <img className="w-8 h-8 rounded-full ring ring-gray-800" src="https://image.shutterstock.com/mosaic_250/2780032/1194497215/stock-photo-portrait-of-smiling-african-american-student-looking-at-camera-sitting-in-caf-black-millennial-1194497215.jpg" />
                                                            <span className="text-gray-500 ml-2">Techo Startup Center</span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className="h-full mx-auto bg-white drop-shadow-lg rounded-lg hover:shadow-2xl ">
                                                <img
                                                    className="rounded-lg h-48 w-full"
                                                    src="https://m.thepeninsulaqatar.com/get/maximage/20221021_1666370619-755.JPG?1666370619"
                                                    alt="thumbnail"
                                                    loading="lazy"
                                                />

                                                <div className="py-2 px-4">
                                                    <span className="text-xs text-gray-500">11 Nov - 12 Nov</span>
                                                    <h1
                                                        className="text-lg font-medium leading-6 tracking-wide text-gray-300 "
                                                    >
                                                        <Link to="event-detail">
                                                            <span className="text-gray-700 md:text-sm">SparkMeet “Deep Learning and Khmer Text Recognit…</span>
                                                        </Link>
                                                    </h1>
                                                    <p className="text-xs text-gray-400">
                                                        <span className="flex">
                                                            <svg t="1669090505682" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2331" width="17" height="17"><path d="M512 64c-172.3 0-312 139.7-312 312 0 139.8 205.3 437 282.8 544.3 7.2 9.9 18.2 14.9 29.2 14.9s22-5 29.2-14.9C618.7 813 824 515.8 824 376c0-172.3-139.7-312-312-312z m0 424c-64.1 0-116-51.9-116-116s51.9-116 116-116 116 51.9 116 116-51.9 116-116 116z" p-id="2332"></path></svg>
                                                            <span className="ml-1">The Desk Flagship - Daun Penh…</span>
                                                        </span>
                                                    </p>
                                                    <div>
                                                        <span className="font-medium text-lg">$10.00</span> <span className="font-normal text-gray-400">/ Per Ticket</span>
                                                    </div>
                                                    <div className="flex my-6">
                                                        <div className="flex items-center">
                                                            <img className="w-8 h-8 rounded-full ring ring-gray-800" src="https://image.shutterstock.com/mosaic_250/2780032/1194497215/stock-photo-portrait-of-smiling-african-american-student-looking-at-camera-sitting-in-caf-black-millennial-1194497215.jpg" />
                                                            <span className="text-gray-500 ml-2">Techo Startup Center</span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pb-8 py-4 lg:p-0  lg:w-1/3 md:flex md:h-full h-full">
                                <div className="w-full h-full">
                                    <div className="w-full h-full">
                                        <div className="w-full h-full flex items-center justify-center text-gray-900">
                                            <div className="rounded-md w-full h-screen" style={{ width: '100%', position: "relative" }}>
                                                <Map
                                                    google={props.google}
                                                    zoom={14}
                                                    // style={mapStyles}
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MobileView>
                <NavbarBottom />
            </MobileView>
        </>
    )
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
})(EventScreen);
// export default EventScreen;
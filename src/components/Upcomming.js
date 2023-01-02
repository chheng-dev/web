import React from "react";
import Card1 from "../images/card1.png"
import Card2 from "../images/card2.png"
import Card3 from "../images/card3.png"
import Card4 from "../images/card4.jpeg"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../App.css'

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
        slidesToSlide: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const CustomDot = ({ onMove, index, onClick, active }) => {
    return (
        <li
            className={active ? "active" : "inactive"}
            onClick={() => onClick()}
        >
            <svg t="1668420162984" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5172" width="30" height="30"><path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" p-id="5173" fill="#e6e6e6"></path></svg>

        </li>
    );
};

const CustomRight = ({ onClick }) => (
    <button className="arrow right" onClick={onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="30" height="30">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
    </button>
);
const CustomLeft = ({ onClick }) => (
    <button className="arrow left" onClick={onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="30" height="30">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>

    </button>
);


// const arrowStyle = {
//     background: "transparent",
//     border: 0,
//     color: "#fff",
//     fontSize: "80px"
//   };
//   const CustomRight = ({ onClick }) => (
//     <button className="arrow right" onClick={onClick} style={arrowStyle}>
//       <svg t="1668420785744" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6132" width="200" height="200"><path d="M641.28 278.613333l-45.226667-45.226666-278.634666 278.762666 278.613333 278.485334 45.248-45.269334-233.365333-233.237333z" p-id="6133"></path></svg>
//     </button>
//   );
//   const CustomLeft = ({ onClick }) => (
//     <button className="arrow left" onClick={onClick} style={arrowStyle}>
//       <svg t="1668420805001" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6287" width="200" height="200"><path d="M320 885.333333c-8.533333 0-17.066667-4.266667-23.466667-10.666666-12.8-12.8-10.666667-34.133333 2.133334-44.8L654.933333 512 298.666667 194.133333c-12.8-10.666667-14.933333-32-2.133334-44.8 10.666667-12.8 32-14.933333 44.8-2.133333l384 341.333333c6.4 6.4 10.666667 14.933333 10.666667 23.466667 0 8.533333-4.266667 17.066667-10.666667 23.466667l-384 341.333333c-6.4 6.4-12.8 8.533333-21.333333 8.533333z" p-id="6288"></path></svg>
//     </button>
//   );



function UpComming() {
    return (
        <div className="w-full text-black mt-16 pb-8">
            <div className="container m-auto">
                <h1 className="md:text-4xl md:text-left font-black text-md text-center">Upcomming Event</h1>
                <Carousel
                    arrows
                    responsive={responsive}
                    showDots={true}
                    transitionDuration={500}
                    keyBoardControl
                    swipeable
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    customDot={<CustomDot />}
                    customRightArrow={<CustomRight />}
                    customLeftArrow={<CustomLeft />}
                >
                    <div className="mt-8 pr-4">
                        <div className="h-full mx-auto bg-gray-900 rounded-lg">
                            <img
                                className="rounded-lg rounded-b-none h-48 w-full bg-cover"
                                src={Card1}
                                alt="thumbnail"
                                loading="lazy"
                            />
                            <div className="flex justify-between -mt-4 px-4">
                                <span
                                    className="inline-block ring-4 bg-red-500 ring-gray-800 rounded-full text-sm font-medium tracking-wide text-gray-100 px-3 pt-0.5"
                                >Tech</span
                                >
                                <span
                                    className="flex h-min space-x-1 items-center rounded-full text-gray-400 bg-gray-900 py-1 px-2 text-xs font-medium"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <p className="text-blue-500 font-semibold text-xs">
                                        6 Mins
                                    </p>
                                </span>
                            </div>
                            <div className="py-2 px-4">
                                <h1
                                    className="text-md font-medium leading-6 tracking-wide text-gray-300 hover:text-blue-500 cursor-pointer"
                                >
                                    <a href="event/1">JIT Mode - A faster, more powerful, on-demand engine for tailwind</a>
                                </h1>
                            </div>
                            <div className="flex flex-row items-end h-full w-full px-4 mt-4">
                                <div className="flex border-t border-gray-700 w-full py-4">
                                    <div
                                        className="flex items-center space-x-3 border-r border-gray-700 w-full"
                                    >
                                        <img
                                            className="object-cover w-8 h-8 border-2 border-white rounded-full"
                                            src="https://storageapi.fleek.co/kamaludin21-team-bucket/portfolio/avatar.jpg"
                                            alt="profile users"
                                            loading="lazy"
                                        />
                                        <div className="">
                                            <p className="text-sm font-semibold tracking-wide text-gray-200">
                                                Author
                                            </p>
                                            <p className="text-xs font-light tracking-wider text-gray-300">
                                                2 Hours ago
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center flex-shrink-0 px-2">
                                        <div className="flex items-center space-x-1 text-gray-400">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                                />
                                            </svg>
                                            <p className="font-medium">10</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pr-4">
                        <div className="h-full mx-auto bg-gray-900 rounded-lg">
                            <img
                                className="rounded-lg rounded-b-none h-48 w-full"
                                src={Card2}
                                alt="thumbnail"
                                loading="lazy"
                            />
                            <div className="flex justify-between -mt-4 px-4">
                                <span
                                    className="inline-block ring-4 bg-red-500 ring-gray-800 rounded-full text-sm font-medium tracking-wide text-gray-100 px-3 pt-0.5"
                                >Tech</span
                                >
                                <span
                                    className="flex h-min space-x-1 items-center rounded-full text-gray-400 bg-gray-900 py-1 px-2 text-xs font-medium"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <p className="text-blue-500 font-semibold text-xs">
                                        6 Mins
                                    </p>
                                </span>
                            </div>
                            <div className="py-2 px-4">
                                <h1
                                    className="text-md font-medium leading-6 tracking-wide text-gray-300 hover:text-blue-500 cursor-pointer"
                                >
                                    <a href="event/1">JIT Mode - A faster, more powerful, on-demand engine for tailwind</a>
                                </h1>
                            </div>
                            <div className="flex flex-row items-end h-full w-full px-4 mt-4">
                                <div className="flex border-t border-gray-700 w-full py-4">
                                    <div
                                        className="flex items-center space-x-3 border-r border-gray-700 w-full"
                                    >
                                        <img
                                            className="object-cover w-8 h-8 border-2 border-white rounded-full"
                                            src="https://storageapi.fleek.co/kamaludin21-team-bucket/portfolio/avatar.jpg"
                                            alt="profile users"
                                            loading="lazy"
                                        />
                                        <div className="">
                                            <p className="text-sm font-semibold tracking-wide text-gray-200">
                                                Author
                                            </p>
                                            <p className="text-xs font-light tracking-wider text-gray-300">
                                                2 Hours ago
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center flex-shrink-0 px-2">
                                        <div className="flex items-center space-x-1 text-gray-400">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                                />
                                            </svg>
                                            <p className="font-medium">10</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="mt-8 pr-4">
                        <div className="h-full mx-auto bg-gray-900 rounded-lg">
                            <img
                                className="rounded-lg rounded-b-none h-48 w-full"
                                src={Card3}
                                alt="thumbnail"
                                loading="lazy"
                            />
                            <div className="flex justify-between -mt-4 px-4">
                                <span
                                    className="inline-block ring-4 bg-red-500 ring-gray-800 rounded-full text-sm font-medium tracking-wide text-gray-100 px-3 pt-0.5"
                                >Tech</span
                                >
                                <span
                                    className="flex h-min space-x-1 items-center rounded-full text-gray-400 bg-gray-900 py-1 px-2 text-xs font-medium"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <p className="text-blue-500 font-semibold text-xs">
                                        6 Mins
                                    </p>
                                </span>
                            </div>
                            <div className="py-2 px-4">
                                <h1
                                    className="text-md font-medium leading-6 tracking-wide text-gray-300 hover:text-blue-500 cursor-pointer"
                                >
                                    <a href="event/1">JIT Mode - A faster, more powerful, on-demand engine for tailwind</a>
                                </h1>
                            </div>
                            <div className="flex flex-row items-end h-full w-full px-4 mt-4">
                                <div className="flex border-t border-gray-700 w-full py-4">
                                    <div
                                        className="flex items-center space-x-3 border-r border-gray-700 w-full"
                                    >
                                        <img
                                            className="object-cover w-8 h-8 border-2 border-white rounded-full"
                                            src="https://storageapi.fleek.co/kamaludin21-team-bucket/portfolio/avatar.jpg"
                                            alt="profile users"
                                            loading="lazy"
                                        />
                                        <div className="">
                                            <p className="text-sm font-semibold tracking-wide text-gray-200">
                                                Author
                                            </p>
                                            <p className="text-xs font-light tracking-wider text-gray-300">
                                                2 Hours ago
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center flex-shrink-0 px-2">
                                        <div className="flex items-center space-x-1 text-gray-400">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                                />
                                            </svg>
                                            <p className="font-medium">10</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="mt-8 pr-4">
                        <div className="h-full mx-auto bg-gray-900 rounded-lg">
                            <img
                                className="rounded-lg rounded-b-none h-48 w-full"
                                src={Card4}
                                alt="thumbnail"
                                loading="lazy"
                            />
                            <div className="flex justify-between -mt-4 px-4">
                                <span
                                    className="inline-block ring-4 bg-red-500 ring-gray-800 rounded-full text-sm font-medium tracking-wide text-gray-100 px-3 pt-0.5"
                                >Tech</span
                                >
                                <span
                                    className="flex h-min space-x-1 items-center rounded-full text-gray-400 bg-gray-900 py-1 px-2 text-xs font-medium"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <p className="text-blue-500 font-semibold text-xs">
                                        6 Mins
                                    </p>
                                </span>
                            </div>
                            <div className="py-2 px-4">
                                <h1
                                    className="text-md font-medium leading-6 tracking-wide text-gray-300 hover:text-blue-500 cursor-pointer"
                                >
                                    <a href="event/1">JIT Mode - A faster, more powerful, on-demand engine for tailwind</a>
                                </h1>
                            </div>
                            <div className="flex flex-row items-end h-full w-full px-4 mt-4">
                                <div className="flex border-t border-gray-700 w-full py-4">
                                    <div
                                        className="flex items-center space-x-3 border-r border-gray-700 w-full"
                                    >
                                        <img
                                            className="object-cover w-8 h-8 border-2 border-white rounded-full"
                                            src="https://storageapi.fleek.co/kamaludin21-team-bucket/portfolio/avatar.jpg"
                                            alt="profile users"
                                            loading="lazy"
                                        />
                                        <div className="">
                                            <p className="text-sm font-semibold tracking-wide text-gray-200">
                                                Author
                                            </p>
                                            <p className="text-xs font-light tracking-wider text-gray-300">
                                                2 Hours ago
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center flex-shrink-0 px-2">
                                        <div className="flex items-center space-x-1 text-gray-400">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                                />
                                            </svg>
                                            <p className="font-medium">10</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="mt-8 pr-4">
                        <div className="h-full mx-auto bg-gray-900 rounded-lg">
                            <img
                                className="rounded-lg rounded-b-none h-48 w-full"
                                src={Card4}
                                alt="thumbnail"
                                loading="lazy"
                            />
                            <div className="flex justify-between -mt-4 px-4">
                                <span
                                    className="inline-block ring-4 bg-red-500 ring-gray-800 rounded-full text-sm font-medium tracking-wide text-gray-100 px-3 pt-0.5"
                                >Tech</span
                                >
                                <span
                                    className="flex h-min space-x-1 items-center rounded-full text-gray-400 bg-gray-900 py-1 px-2 text-xs font-medium"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <p className="text-blue-500 font-semibold text-xs">
                                        6 Mins
                                    </p>
                                </span>
                            </div>
                            <div className="py-2 px-4">
                                <h1
                                    className="text-md font-medium leading-6 tracking-wide text-gray-300 hover:text-blue-500 cursor-pointer"
                                >
                                    <a href="event/1">JIT Mode - A faster, more powerful, on-demand engine for tailwind</a>
                                </h1>
                            </div>
                            <div className="flex flex-row items-end h-full w-full px-4 mt-4">
                                <div className="flex border-t border-gray-700 w-full py-4">
                                    <div
                                        className="flex items-center space-x-3 border-r border-gray-700 w-full"
                                    >
                                        <img
                                            className="object-cover w-8 h-8 border-2 border-white rounded-full"
                                            src="https://storageapi.fleek.co/kamaludin21-team-bucket/portfolio/avatar.jpg"
                                            alt="profile users"
                                            loading="lazy"
                                        />
                                        <div className="">
                                            <p className="text-sm font-semibold tracking-wide text-gray-200">
                                                Author
                                            </p>
                                            <p className="text-xs font-light tracking-wider text-gray-300">
                                                2 Hours ago
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center flex-shrink-0 px-2">
                                        <div className="flex items-center space-x-1 text-gray-400">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                                />
                                            </svg>
                                            <p className="font-medium">10</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="mt-8 pr-4">
                        <div className="h-full mx-auto bg-gray-900 rounded-lg">
                            <img
                                className="rounded-lg rounded-b-none h-48 w-full"
                                src={Card4}
                                alt="thumbnail"
                                loading="lazy"
                            />
                            <div className="flex justify-between -mt-4 px-4">
                                <span
                                    className="inline-block ring-4 bg-red-500 ring-gray-800 rounded-full text-sm font-medium tracking-wide text-gray-100 px-3 pt-0.5"
                                >Tech</span
                                >
                                <span
                                    className="flex h-min space-x-1 items-center rounded-full text-gray-400 bg-gray-900 py-1 px-2 text-xs font-medium"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <p className="text-blue-500 font-semibold text-xs">
                                        6 Mins
                                    </p>
                                </span>
                            </div>
                            <div className="py-2 px-4">
                                <h1
                                    className="text-md font-medium leading-6 tracking-wide text-gray-300 hover:text-blue-500 cursor-pointer"
                                >
                                    <a href="event/1">JIT Mode - A faster, more powerful, on-demand engine for tailwind</a>
                                </h1>
                            </div>
                            <div className="flex flex-row items-end h-full w-full px-4 mt-4">
                                <div className="flex border-t border-gray-700 w-full py-4">
                                    <div
                                        className="flex items-center space-x-3 border-r border-gray-700 w-full"
                                    >
                                        <img
                                            className="object-cover w-8 h-8 border-2 border-white rounded-full"
                                            src="https://storageapi.fleek.co/kamaludin21-team-bucket/portfolio/avatar.jpg"
                                            alt="profile users"
                                            loading="lazy"
                                        />
                                        <div className="">
                                            <p className="text-sm font-semibold tracking-wide text-gray-200">
                                                Author
                                            </p>
                                            <p className="text-xs font-light tracking-wider text-gray-300">
                                                2 Hours ago
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center flex-shrink-0 px-2">
                                        <div className="flex items-center space-x-1 text-gray-400">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                                />
                                            </svg>
                                            <p className="font-medium">10</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="mt-8 pr-4">
                        <div className="h-full mx-auto bg-gray-900 rounded-lg">
                            <img
                                className="rounded-lg rounded-b-none h-48 w-full"
                                src={Card4}
                                alt="thumbnail"
                                loading="lazy"
                            />
                            <div className="flex justify-between -mt-4 px-4">
                                <span
                                    className="inline-block ring-4 bg-red-500 ring-gray-800 rounded-full text-sm font-medium tracking-wide text-gray-100 px-3 pt-0.5"
                                >Tech</span
                                >
                                <span
                                    className="flex h-min space-x-1 items-center rounded-full text-gray-400 bg-gray-900 py-1 px-2 text-xs font-medium"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-blue-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <p className="text-blue-500 font-semibold text-xs">
                                        6 Mins
                                    </p>
                                </span>
                            </div>
                            <div className="py-2 px-4">
                                <h1
                                    className="text-md font-medium leading-6 tracking-wide text-gray-300 hover:text-blue-500 cursor-pointer"
                                >
                                    <a href="event/1">JIT Mode - A faster, more powerful, on-demand engine for tailwind</a>
                                </h1>
                            </div>
                            <div className="flex flex-row items-end h-full w-full px-4 mt-4">
                                <div className="flex border-t border-gray-700 w-full py-4">
                                    <div
                                        className="flex items-center space-x-3 border-r border-gray-700 w-full"
                                    >
                                        <img
                                            className="object-cover w-8 h-8 border-2 border-white rounded-full"
                                            src="https://storageapi.fleek.co/kamaludin21-team-bucket/portfolio/avatar.jpg"
                                            alt="profile users"
                                            loading="lazy"
                                        />
                                        <div className="">
                                            <p className="text-sm font-semibold tracking-wide text-gray-200">
                                                Author
                                            </p>
                                            <p className="text-xs font-light tracking-wider text-gray-300">
                                                2 Hours ago
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center flex-shrink-0 px-2">
                                        <div className="flex items-center space-x-1 text-gray-400">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                                />
                                            </svg>
                                            <p className="font-medium">10</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </Carousel>

            </div>
        </div>
    )
}

export default UpComming
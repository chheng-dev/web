import React from "react";
import { QRCode } from 'react-qrcode-logo';
import Footer from "../Footer";
import Logo from '../../images/logo.png';
import Lottie from 'react-lottie';
import checked from "./checked.json"
import { FiDownload } from "react-icons/fi";

function Ticket() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: checked,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <div>
            <div className="w-full text-black mt-16 pb-8 md:pb-16 p-4 md:p-0 dark:text-white">
                <div className="text-center mb-4">
                    <div>
                        <Lottie options={defaultOptions} height={150}
                        width={150} />
                    </div>
                    <h1 className="text-xl text-center dark:text-white">Congratulations Chheng you have successfully booked a ticket!</h1>
                    <span className="text-gray-400 text-sm text-center">Download the e-ticket below in order to attend the event.</span>
                </div>
                <div className="max-w-sm bg-white dark:bg-gray-900 mx-auto">

                    <div className="box-shadow">
                        <img
                            className="rounded-t-lg"
                            src="https://m.thepeninsulaqatar.com/get/maximage/20221021_1666370619-755.JPG?1666370619"
                            alt="thumbnail"
                            loading="lazy"
                        />

                        <div className="p-6 text-sm">
                            <h3 className="text-lg dark:text-white">6th JCI Cambodia Leadership Academy is back!!</h3>
                            <p className="text-gray-400 my-2">Ticket No <span className="text-black font-bold dark:text-white">12345678</span></p>
                            <div className="my-4 border-y py-4 border-gray-400">
                                <p className=" text-gray-400">Guest Information</p>
                                <p className="my-1">Menghour lao | +855 69 823 451</p>
                                <p>laomenghour@gmail.com</p>
                            </div>
                            <div className="border-b border-gray-400 pb-4">
                                <div className="my-2">
                                    <p className="text-gray-400">Duration</p>
                                    <p>From 30th Sep - 3rd Oct 2022</p>
                                </div>
                                <div>
                                    <p className="text-gray-400">Time</p>
                                    <p>Start Time : 9:00 AM - 6:00 PM</p>
                                </div>
                            </div>
                            <div className="my-6">
                                <div className="flex">
                                    <div className="flex w-1/2 justify-start">
                                        <span>$68.00 * 1 Ticket</span>
                                    </div>
                                    <div className="flex w-1/2 justify-end">
                                        <span className="font-bold text-primary">$68.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mx-auto">
                                <QRCode size="100" qrStyle="squares" ecLevel="L" logoOpacity="1" value="https://github.com/gcoro/react-qrcode-logo" logoImage="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmFjZXxlbnwwfHwwfHw%3D&w=1000&q=80" logoWidth="20" logoHeight="20" />
                                <p className="mb-1">Ticket No 12345678</p>
                                <span className="text-gray-400">Powered by BookMeTicket | 2022</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 ">
                        <button className="w-full bg-primary hover:bg-primary-400 text-white py-2 px-4 rounded-md">
                            <div className="flex justify-center">
                                <span className="flex w-1/3 justify-center">
                                    <FiDownload className="text-xl"/>
                                    {/* <svg t="1668753260263" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4790" width="22" height="22"><path d="M955.076923 610.461538h-59.076923c-15.753846 0-29.538462 13.784615-29.538462 29.538462v196.923077c0 15.753846-13.784615 29.538462-29.538461 29.538461h-649.846154c-15.753846 0-29.538462-13.784615-29.538461-29.538461v-196.923077c0-15.753846-13.784615-29.538462-29.538462-29.538462h-59.076923c-15.753846 0-29.538462 13.784615-29.538462 29.538462V905.846154c0 43.323077 35.446154 78.769231 78.769231 78.769231h787.692308c43.323077 0 78.769231-35.446154 78.769231-78.769231V640c0-15.753846-13.784615-29.538462-29.538462-29.538462zM492.307692 740.430769c11.815385 11.815385 29.538462 11.815385 41.353846 0l265.846154-265.846154c11.815385-11.815385 11.815385-29.538462 0-41.353846l-41.353846-41.353846c-11.815385-11.815385-29.538462-11.815385-41.353846 0l-110.276923 110.276923c-11.815385 11.815385-33.476923 3.938462-33.476923-13.784615V68.923077C571.076923 53.169231 555.323077 39.384615 541.538462 39.384615h-59.076924c-15.753846 0-29.538462 13.784615-29.538461 29.538462v417.476923c0 17.723077-21.661538 25.6-33.476923 13.784615l-110.276923-110.276923c-11.815385-11.815385-29.538462-11.815385-41.353846 0L226.461538 433.230769c-11.815385 11.815385-11.815385 29.538462 0 41.353846L492.307692 740.430769z" p-id="4791" fill="#e6e6e6"></path></svg> */}
                                </span>
                                <span className="flex w-2/3 justify-start">Download E-Ticket</span>
                            </div>
                        </button>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Ticket
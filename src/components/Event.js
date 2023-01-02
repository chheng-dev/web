import React from "react";
import Filter from "./Filter/Tab";

function Event() {

    return (
        <div className="container p-4  mx-auto lg:p-4">
            <div className="w-full text-black mt-8 pb-8">
                <div className="">
                    <h2 className="mb-4 text-2xl font-bold dark:text-white">Discovery event in Cambodia</h2>
                    <div className=" flex">
                        <div className="w-full">
                            <Filter />
                        </div>
                    </div>
                    < div class="relative container mx-auto height-bg overflow-hidden">
                        <div class="absolute z-30 flex w-full h-full items-center">
                            <div class="relative z z-30 w-full   px-6 py-8 text-white md:py-10 md:w-1/3">
                                <div className="ml-6">
                                    {/* <h2 class="md:text-5xl text-3xl text-white">Create your event Freely with us!</h2> */}
                                    <div className=''>
                                        {/* <Link to="/event"> */}
                                            {/* <button className="bg-white hover:bg-white text-primary font-semibold  py-2 px-12 rounded">
                                                Create Account
                                            </button> */}
                                        {/* </Link> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="absolute top-0 right-0 block w-full h-full rounded-lg">
                            <img alt="Snowy mountain lake" class="object-cover rounded-lg min-w-full h-full" src={require("../images/cover.png")} />
                        </div> 
                    </div>

                </div>
            </div>
        </div>
    )
}


export default Event
import React from "react";
import { withRouter } from "react-router-dom";
import catSport from "../images/sport.svg"
import catUser from "../images/user.svg"
// import catTrainning from "../images/hat.svg"

function Category() {
    return (
        <div className="md:container w-full p-4 mx-auto text-black dark:text-white mt-8 pb-8">
            <div className="w-full">
                <div >
                <h2 className="mb-4 text-2xl font-bold dark:text-white">All Categories</h2>
                    <div className="grid">
                        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
                            <div className="flex items-start  bg-white dark:bg-gray-900 hover:shadow-xl p-4 rounded-lg box-shadow transition-all duration-150 ease-out hover:ease-in">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                                        <g id="Group_211" data-name="Group 211" transform="translate(-200 -770)">
                                            <rect id="Rectangle_117" data-name="Rectangle 117" width="48" height="48" rx="24" transform="translate(200 770)" fill="#2ebae2" opacity="0.1" />
                                            <path id="sport" d="M101.57,85.333a16.237,16.237,0,1,0,16.237,16.237A16.237,16.237,0,0,0,101.57,85.333ZM112.06,109.2h-3.767a1.624,1.624,0,0,0-1.624,1.169l-1.088,3.6a12.811,12.811,0,0,1-8.119,0l-1.088-3.6a1.624,1.624,0,0,0-1.624-1.169H90.984a12.99,12.99,0,0,1-2.4-7.631l3.1-2.176a1.624,1.624,0,0,0,.617-1.883l-1.234-3.54a12.99,12.99,0,0,1,6.495-4.757l3.02,2.289a1.624,1.624,0,0,0,1.981,0l3-2.289a12.99,12.99,0,0,1,6.495,4.757l-1.218,3.54a1.624,1.624,0,0,0,.617,1.883l3.1,2.176A12.99,12.99,0,0,1,112.06,109.2ZM106.6,99.037a1.429,1.429,0,0,1,.568,1.624l-1.624,4.693a1.624,1.624,0,0,1-1.624,1.055H99.054a1.624,1.624,0,0,1-1.624-1.055l-1.624-4.693a1.429,1.429,0,0,1,.568-1.624l4.043-2.841a1.77,1.77,0,0,1,1.981,0Z" transform="translate(122.43 692.43)" fill="#2ebae2" />
                                        </g>
                                    </svg>

                                </div>

                                <div className="ml-2 mt-4 justify-center">
                                    <h2 className="text-xs md:font-semibold md:text-sm dark:text-white">Sport</h2>
                                </div>
                            </div>

                            <div className="flex items-start  bg-white dark:bg-gray-900 hover:shadow-xl p-4 rounded-lg box-shadow transition-all duration-150 ease-out hover:ease-in">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                                        <g id="Group_212" data-name="Group 212" transform="translate(-455 -770)">
                                            <rect id="Rectangle_119" data-name="Rectangle 119" width="48" height="48" rx="24" transform="translate(455 770)" fill="#f36c33" opacity="0.1" />
                                            <path id="music" d="M154.783,147.366V129.518a1.642,1.642,0,0,0-1.979-1.59l-14.6,3.245a1.623,1.623,0,0,0-1.266,1.59v13.532a5.663,5.663,0,1,0,3.245,5.16,7.074,7.074,0,0,0,0-.844v-16.55l11.358-2.515v11.5a5.663,5.663,0,1,0,3.245,5.143,7.411,7.411,0,0,0,0-.827Z" transform="translate(335.38 650.763)" fill="#f36c33" />
                                        </g>
                                    </svg>
                                </div>

                                <div className="ml-2 mt-4 justify-center">
                                    <h2 className="text-xs md:font-semibold md:text-sm inline-block align-middle dark:text-white">Concert</h2>

                                </div>
                            </div>
                            <div className="flex items-start  bg-white dark:bg-gray-900 hover:shadow-xl p-4 rounded-lg box-shadow transition-all duration-150 ease-out hover:ease-in">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                                        <g id="Group_214" data-name="Group 214" transform="translate(-965 -770)">
                                            <rect id="Rectangle_123" data-name="Rectangle 123" width="48" height="48" rx="24" transform="translate(965 770)" fill="#39c38f" opacity="0.1" />
                                            <g id="Group_87" data-name="Group 87" transform="translate(689.199 -318.589)">
                                                <path id="Path_24" data-name="Path 24" d="M1022.692,99.721l-1.039-.357c-.741-.253-1.485-.5-2.222-.761a2.066,2.066,0,0,1-.554-.291.347.347,0,0,1,.005-.611,1.927,1.927,0,0,1,.521-.272q6.548-2.235,13.1-4.461c.455-.155.91-.308,1.361-.474a.981.981,0,0,1,.692,0q6.258,2.167,12.518,4.329c.622.215,1.246.424,1.865.646a2.112,2.112,0,0,1,.509.254.373.373,0,0,1,0,.677,1.974,1.974,0,0,1-.507.258q-4.29,1.486-8.583,2.963c-1.86.642-3.72,1.281-5.576,1.934a1.284,1.284,0,0,1-.9,0q-4.75-1.636-9.509-3.247a.325.325,0,0,0-.258.054,3.728,3.728,0,0,0-1.361,2.142,18.039,18.039,0,0,0-.273,1.87.324.324,0,0,0,.109.243,1.527,1.527,0,0,1,.07,2.366c-.16.144-.088.3-.083.456.028,1.085.1,2.171.082,3.255a4.918,4.918,0,0,1-.72,2.615,3.409,3.409,0,0,1-1.51,1.288.394.394,0,0,1-.259,0,6.786,6.786,0,0,1-2.109-1.224c.087-.111.17-.218.254-.323a12.182,12.182,0,0,0,2.233-4.013c.167-.545.263-1.112.394-1.669a.2.2,0,0,0-.108-.241,1.528,1.528,0,0,1,.126-2.653.267.267,0,0,0,.153-.262c.037-.571.054-1.145.132-1.71a4.612,4.612,0,0,1,1.323-2.637C1022.608,99.825,1022.639,99.783,1022.692,99.721Z" transform="translate(-734.063 1009.323)" fill="#39c38f" />
                                                <path id="Path_25" data-name="Path 25" d="M1180.237,343.465l1.581.536,7.379,2.513a1.685,1.685,0,0,1,.241.087,1.576,1.576,0,0,0,1.343.011c2.86-1.007,5.731-1.986,8.6-2.975l1.241-.426v.836c0,1.994-.024,3.989.012,5.983a2.1,2.1,0,0,1-.913,1.817,8.4,8.4,0,0,1-2.833,1.308,21.624,21.624,0,0,1-4.7.764,26.993,26.993,0,0,1-6.08-.288,14.251,14.251,0,0,1-3.943-1.162,4.388,4.388,0,0,1-1.534-1.122,1.626,1.626,0,0,1-.389-1.07q.007-3.288,0-6.575Z" transform="translate(-889.828 768.451)" fill="#39c38f" />
                                            </g>
                                        </g>
                                    </svg>

                                </div>

                                <div className="ml-2 mt-4 justify-center">
                                    <h2 className="text-xs md:font-semibold md:text-sm dark:text-white">Community Meetups</h2>

                                </div>
                            </div>
                            <div className="flex items-start  bg-white dark:bg-gray-900  p-4 rounded-lg box-shadow transition-all duration-150 ease-out hover:ease-in">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                                        <g id="Group_224" data-name="Group 224" transform="translate(-710 -770)">
                                            <g id="Group_213" data-name="Group 213">
                                                <rect id="Rectangle_121" data-name="Rectangle 121" width="48" height="48" rx="24" transform="translate(710 770)" fill="#4781fb" opacity="0.1" />
                                                <g id="Group_84" data-name="Group 84" transform="translate(656.463 479.656)">
                                                    <path id="Path_18" data-name="Path 18" d="M213.779,453.781a8.666,8.666,0,0,1,3.323-8.793,7.693,7.693,0,0,0,9.872.022,8.495,8.495,0,0,1,3.346,8.769A54.881,54.881,0,0,1,213.779,453.781Z" transform="translate(-136.913 -128.227)" fill="#4781fb" />
                                                    <path id="Path_19" data-name="Path 19" d="M74.986,427.634c.645.722,1.295,1.43,1.913,2.165a.541.541,0,0,1,.019.509,10.233,10.233,0,0,0-1.906,6.3,2.041,2.041,0,0,1-.035.26,54.028,54.028,0,0,1-13.276-.393,8.416,8.416,0,0,1,3.278-8.758C68.265,430.087,71.559,430.1,74.986,427.634Z" transform="translate(0 -112.609)" fill="#4781fb" />
                                                    <path id="Path_21" data-name="Path 21" d="M86.745,308.409a5.914,5.914,0,1,1,5.885,5.935A5.931,5.931,0,0,1,86.745,308.409Z" transform="translate(-22.729)" fill="#4781fb" />
                                                    <path id="Path_22" data-name="Path 22" d="M244.722,319.4a5.921,5.921,0,1,1-5.9,5.923A5.9,5.9,0,0,1,244.722,319.4Z" transform="translate(-159.598 -15.206)" fill="#4781fb" />
                                                </g>
                                            </g>
                                        </g>
                                    </svg>

                                </div>

                                <div className="ml-2 md:ml-2 mt-4 justify-center">
                                    <h2 className="text-xs md:font-semibold md:text-sm dark:text-white">Skill Training</h2>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default withRouter(Category);
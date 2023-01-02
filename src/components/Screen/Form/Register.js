import React from "react";
import { Space, Tabs } from "antd";
import { Divider, Input, Button } from "antd";
import { FiEye, FiEyeOff, FiMail, FiLock, FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";

function Register() {
    const PhoneNumberContent = () => {
        return (
            <>
                <div className="relative mt-3 z-0 mb-3 w-full group">
                    <div className="mb-2">
                        <label className="text-gray-600 mb-4 font-normal">Phone Number</label>
                    </div>
                    <Input type="number" bordered addonBefore={<FiPhone />} placeholder="010 XXX XXXX" size="large" className="rounded-lg" />
                </div>
                <div className="relative mt-3 z-0 mb-3 w-full group pt-1">
                    <Button className="text-xs w-full" size={'large'}>
                        Send verification code
                    </Button>
                </div>
                <div className="relative z-0 mb-3 w-full group">
                    <div className="mb-2">
                        <label className="text-gray-600 mb-4 font-normal">Password</label>
                    </div>
                    <Input type="password" bordered placeholder="*********" addonBefore={<FiLock />} size="large" className="rounded-lg" iconRender={visible => (visible ? <FiEye /> : <FiEyeOff />)} />
                </div>
                <div className="relative z-0 mb-3 w-full group">
                    <div className="mb-2">
                        <label className="text-gray-600 mb-4 font-normal">Confirm Password</label>
                    </div>
                    <Input type="password" bordered placeholder="*********" addonBefore={<FiLock />} size="large" className="rounded-lg" iconRender={visible => (visible ? <FiEye /> : <FiEyeOff />)} />
                </div>
            </>
        )
    }
    const EmailContent = () => {
        return (
            <>
                <div className="relative mt-3 z-0 mb-3 w-full group">
                    <div className="mb-2">
                        <label className="text-gray-600 mb-4 font-normal">Email</label>
                    </div>
                    <Input className="text-xs" addonBefore={<FiMail />} type="email" bordered placeholder="example@gmail.com" size="large" />
                </div>
                <div className="relative z-0 mb-3 w-full group">
                    <div className="mb-2">
                        <label className="text-gray-600 mb-4 font-normal">Password</label>
                    </div>
                    <Input type="password" bordered addonBefore={<FiLock />} placeholder="*********" size="large" className="rounded-lg" />
                </div>
                <div className="relative mt-3 z-0 mb-3 w-full group pt-1">
                    <div className="mb-2">
                        <label className="text-gray-600 mb-4 font-normal">Confirm Password</label>
                    </div>
                    <Input type="password" bordered addonBefore={<FiLock />} placeholder="*********" size="large" className="rounded-lg" />
                </div>
            </>
        )
    }
    return (
        <div class="h-screen md:flex p-4 md:p-0">
            <div class="hidden md:flex w-1/2 bg-gradient-to-tr from-primary to-primary-600 i justify-around items-center">
                <div className="max-w-md">
                    <h1 class="text-white font-bold text-6xl font-sans">Create the new an account</h1>
                    <p class="text-white mt-8 text-base">You can log in with your phone number or email address, which is extremely convenient and fast.</p>
                </div>
            </div>
            <div class="md:flex md:w-1/2 md:justify-center md:items-center">
                <div className="w-full md:max-w-lg pb-4 md:pb-0">
                    <form>
                        <h1 class="text-gray-800 font-bold text-3xl mb-4 text-center">Create your account</h1>
                        <Tabs
                            className="tabs"
                            defaultActiveKey="1"
                            items={[
                                {
                                    label: 'Phone Number',
                                    key: '1',
                                    children: <PhoneNumberContent />,
                                },
                                {
                                    label: 'Email',
                                    key: '3',
                                    children: <EmailContent />,
                                },
                            ]}
                        />
                        <div className="my-4">
                            <button className="btn-primary text-lg rounded-md">Sign up</button>
                        </div>
                        <div className="mt-8">
                            <Divider plain className="text-red-300">
                                <span className="text-lightGray-800">Or Sign up with</span>
                            </Divider>
                        </div>

                        {/* Socail Medail */}
                        <div className="w-full py-2">
                            <div className="flex gap-4">
                                <div className="flex w-1/2 justify-end">
                                    <div className="border flex items-center border-lightGray-600 px-5 py-1 rounded-md">
                                        <Space >
                                            <svg t="1672221534460" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11141" width="28" height="28"><path d="M928 514.24A416 416 0 1 0 448 928v-288h-106.56v-125.76H448V403.2a142.4 142.4 0 0 1 138.24-139.52 402.24 402.24 0 0 1 107.52 8.96v101.44h-68.48a52.48 52.48 0 0 0-51.84 54.4v85.76h117.12L672 640h-98.56v288A417.6 417.6 0 0 0 928 514.24z" p-id="11142" fill="#1777f2"></path></svg>
                                            <span className="text-xs font-meduim">Facebook</span>
                                        </Space>
                                    </div>
                                </div>
                                <div className="flex w-1/2 justify-start">
                                    <div className="border flex items-center border-lightGray-600 px-5 py-1 rounded-md">
                                        <Space >
                                            <svg t="1672221926434" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13127" width="24" height="24"><path d="M214.101333 512c0-32.512 5.546667-63.701333 15.36-92.928L57.173333 290.218667A491.861333 491.861333 0 0 0 4.693333 512c0 79.701333 18.858667 154.88 52.394667 221.610667l172.202667-129.066667A290.56 290.56 0 0 1 214.101333 512" fill="#FBBC05" p-id="13128"></path><path d="M516.693333 216.192c72.106667 0 137.258667 25.002667 188.458667 65.962667L854.101333 136.533333C763.349333 59.178667 646.997333 11.392 516.693333 11.392c-202.325333 0-376.234667 113.28-459.52 278.826667l172.373334 128.853333c39.68-118.016 152.832-202.88 287.146666-202.88" fill="#EA4335" p-id="13129"></path><path d="M516.693333 807.808c-134.357333 0-247.509333-84.864-287.232-202.88l-172.288 128.853333c83.242667 165.546667 257.152 278.826667 459.52 278.826667 124.842667 0 244.053333-43.392 333.568-124.757333l-163.584-123.818667c-46.122667 28.458667-104.234667 43.776-170.026666 43.776" fill="#34A853" p-id="13130"></path><path d="M1005.397333 512c0-29.568-4.693333-61.44-11.648-91.008H516.650667V614.4h274.602666c-13.696 65.962667-51.072 116.650667-104.533333 149.632l163.541333 123.818667c93.994667-85.418667 155.136-212.650667 155.136-375.850667" fill="#4285F4" p-id="13131"></path></svg>
                                            <span className="text-xs font-meduim">Google</span>
                                        </Space>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full text-center my-6">
                            <p className="text-sm text-lightGray-800">Already have an account?
                                <Link to='/login'>
                                    <span className="text-primary cursor-pointer ml-1">Login</span>
                                </Link>
                            </p>
                        </div>
                        <div className="w-full text-center my-6">
                            <p className="text-sm text-lightGray-800">By signing up or logging in, you acknowledge and agree to the <span className="text-primary">Terms of Use and Privacy Policy</span></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
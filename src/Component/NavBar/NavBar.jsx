// import React from 'react'
import { BsBorderWidth } from "react-icons/bs";

const NavBar = () => {
    return (
        <div>
            <header className="bg-none fixed left-0 w-full pt-6 pb-8 z-10 transition-all duration-200 shadow-md">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center">
                        <a href="#">
                            <img src="/src/assets/ibadLogo.svg" alt="" className="h-6 lg:h-8" />
                        </a>

                        <div className="text-2xl text-blue-900 md:hidden lg:text-3xl cursor-pointer">
                            <BsBorderWidth className="text-2xl text-blue-900 md:hidden lg:text-3xl cursor-pointer"/>
                        </div>
                    
                        <nav className="md:flex hidden">
                            <ul className="md:flex md:gap-x-12 font-bold text-blue-900">
                                <li>
                                    <a href="#" className="text-[20px] font-medium hover:border-b border-yellow-500 transition-all">
                                        Speakers
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-[20px] font-medium hover:border-b border-yellow-500 transition-all">
                                        Contact
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-[20px] font-medium hover:border-b border-yellow-500 transition-all">
                                        Venue
                                    </a>
                                </li>
                            </ul>

                            <a href="#" className="flex justify-center items-center py-1 px-5 bg-yellow-600 hover:bg-yellow-500 ms-4 me-7 border border-yellow-500 shadow-sm rounded-sm text-blue-900 hover:text-white transition-all duration-200 ease-in-out">
                                <button className="flex justify-center items-center">
                                    Get Tickets
                                </button>
                            </a>
                        </nav>

                        <div className="hidden left-0 md:hidden fixed bottom-0 w-full max-w-xs h-screen transition-all">
                            <div className="w-full shadow-2xl font-serif">
                                <ul className="text-center h-full flex flex-col items-center justify-center gap-y-6">
                                    <li className="cursor-pointer">
                                        <a href="#" className="text-[24px] font-medium text-blue-900">
                                            Speakers
                                        </a>
                                    </li>
                                    <li className="cursor-pointer">
                                        <a href="#" className="text-[24px] font-medium text-blue-900">
                                            Contact
                                        </a>
                                    </li>
                                    <li className="cursor-pointer">
                                        <a href="#" className="text-[24px] font-medium text-blue-900">
                                            Venue
                                        </a>
                                    </li>

                                    <a href="#" className="flex justify-center items-center py-1 px-5 bg-yellow-600 hover:bg-yellow-500 ms-4 me-7 border border-yellow-500 shadow-sm rounded-sm text-blue-900 hover:text-white transition-all duration-200 ease-in-out">
                                        <button className="flex justify-center items-center">
                                            Get Tickets
                                        </button>
                                    </a>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="h-[850px] bg-right bg-cover w-full pt-[100px] md:pt-[120px] pb:[150px]">
                <div className="container mx-auto">
                    <div>
                        <img src="/src/assets/ibdExpo.svg" alt="" className="w-full"/>
                    </div>

                    <div className="flex flex-col justify-center items-center md:flex-row my-3">
                        <div className="flex gap-x-3">
                            <h1 className="lg:text-[24px] font-medium">MAIDEN EDITION</h1>
                            <img src="/src/assets/line1.svg" alt="" className="w-[50%] flex items-center"/>
                        </div>
                        <div className="mr-7 lg:mr-20">
                            <img className="w-10 md:w-20 flex justify-center items-center border border-green-700 rounded-full p-2 animate-spin transition delay-1000" src="/src/assets/star.svg" alt="" />
                        </div>
                        <div className="flex gap-x-3">
                            <img src="/src/assets/line1.svg" alt="" className="w-[50%] flex items-center"/>
                            <h1 className="lg:text-[24px] font-medium">September 9, 2023</h1>
                        </div>
                    </div>

                    <div className="flex flex-col gap-y-7 md:flex-row items-center gap-x-7 mt-10 mb-20">
                        <a href="#" className="w-full bg-yellow-400 border-[1px] border-yellow-400 py-1 text-center">
                            <button className="font-medium text-blue-900 text-[24px] uppercase">
                                Buy Tickets
                            </button>
                        </a>
                        <a href="#" className="text-[24px] text-blue-900 font-medium w-full bg-transparent border-[1px] border-blue-800 py-1 flex justify-center items-center">
                            <button className="uppercase">
                                Become A Sponsor
                            </button>
                        </a>
                    </div>

                    <div className="rounded-sm border-2 shadow-sm bg-blue-600">
                        <div className="md:mx-auto md:container flex flex-col gap-y-16 items-center text-center py-6 w-full text-black">
                            <div className="leading-[50px]">
                                <h1 className="text-[30px] md:text-[50px] font-bold">
                                    Venue:
                                </h1>
                                <p className="leading-8 md:text-[30px] font-bold">
                                    The International Conference Center, Agbowo, Ibadan, Ibadan.
                                </p>
                            </div>

                            <div className="leading-[50px]">
                                <h1 className="text-[30px] md:text-[50px] font-bold">
                                    Date:
                                </h1>
                                <p className="leading-8 md:text-[30px] font-bold">
                                    Saturday, September 9th, 2023.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar
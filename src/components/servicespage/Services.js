import { faAppStore } from '@fortawesome/free-brands-svg-icons'
import { faCode, faCrop } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Services = () => {
    return (
        <section className='px-4 md:py-14 fade-services' id='services'>
            <div className='text-center text-5xl pt-2 mb-14'>
                <p> My Services </p>
            </div>
            <div className='md:w-[85%] md:mx-auto grid md:grid-cols-3 grid-cols-1 md:gap-x-5 md:gap-y-0 gap-y-5 items-center justify-center'>
                <div className="px-8 border border-[#0ef] hover:translate-y-[-8px] hover:bg-[#54b9c0] hover:text-gray-700 duration-500 cursor-pointer">
                    <div className="py-6">
                        <FontAwesomeIcon icon={faCrop} className='text-[#63E6BE] text-6xl' />
                    </div>
                    <div className="pb-6">
                        <h5 className="text-2xl mb-3 tracking-widest"> Frontend <br /> <span className='text-xl'> (web) </span> Developer</h5>
                        <p className="tracking-wider">I'm a frontend developer...</p>
                        <div className='my-7'>
                            <button class="relative overflow-hidden md:px-10 px-5 py-3 hover:text-black duration-300 font-semibold border border-[#0ef] group">
                                <span class="absolute inset-0 bg-gradient-to-r from-transparent via-[#0ef] to-[#0ef] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                                <span class="relative z-[10px]"> More About Me </span>
                            </button>
                        </div>
                    </div>
                </div>


                <div className="px-8 border border-[#0ef] hover:translate-y-[-8px] hover:bg-[#54b9c0] hover:text-gray-700 duration-500  cursor-pointer">
                    <div className="py-6">
                        <FontAwesomeIcon icon={faAppStore} className='text-[#63E6BE] text-6xl' />
                    </div>
                    <div className="pb-6">
                        <h5 className="text-2xl mb-3 tracking-widest"> Backend <br /> <span className='text-xl'> (node-Js) </span> Developer </h5>
                        <p className="tracking-wider">I'm a backend developer (basic)...</p>
                        <div className='my-7'>
                            <button class="relative overflow-hidden md:px-10 px-5 py-3 hover:text-black duration-300 font-semibold border border-[#0ef] group">
                                <span class="absolute inset-0 bg-gradient-to-r from-transparent via-[#0ef] to-[#0ef] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                                <span class="relative z-[10px]"> More About Me </span>
                            </button>
                        </div>
                    </div>
                </div>


                <div className="px-8 border border-[#0ef] hover:translate-y-[-8px] hover:bg-[#54b9c0] hover:text-gray-700  duration-500  cursor-pointer">
                    <div className="py-6">
                        <FontAwesomeIcon icon={faCode} className='text-[#63E6BE] text-6xl' />
                    </div>
                    <div className="pb-6">
                        <h5 className="text-2xl mb-3 tracking-widest"> Frontend <br /> <span className='text-xl'> (web) </span> Designer</h5>
                        <p className="tracking-wider">I'm a frontend designer...</p>
                        <div className='my-7'>
                            <button class="relative overflow-hidden md:px-10 px-5 py-3 hover:text-black duration-300 font-semibold border border-[#0ef] group">
                                <span class="absolute inset-0 bg-gradient-to-r from-transparent via-[#0ef] to-[#0ef] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                                <span class="relative z-[10px]"> More About Me </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services

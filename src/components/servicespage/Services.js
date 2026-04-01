import { faAppStore } from '@fortawesome/free-brands-svg-icons'
import { faCode, faCrop } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React from 'react'

gsap.registerPlugin(ScrollTrigger)

const Services = () => {

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#services',
                start: 'top 75%',
            }
        });

        // Heading: top to bottom
        tl.fromTo('#services-head', {
            opacity: 0,
            y: -60,
        }, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
        });

        // Left card: left to right
        tl.fromTo('#card-left', {
            opacity: 0,
            x: -120,
        }, {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: 'power2.out',
        }, '-=0.3');

        // Center card: fade in
        tl.fromTo('#card-center', {
            opacity: 0,
            scale: 0.9,
        }, {
            opacity: 1,
            scale: 1,
            duration: 0.7,
            ease: 'power2.out',
        }, '-=0.4');

        // Right card: right to left
        tl.fromTo('#card-right', {
            opacity: 0,
            x: 120,
        }, {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: 'power2.out',
        }, '-=0.4');

    }, []);

    return (
        <section className='px-4 md:py-14' id='services'>
            <div className='text-center text-5xl pt-2 mb-14' id='services-head'>
                <p> My Services </p>
            </div>
            <div className='md:w-[85%] md:mx-auto grid md:grid-cols-3 grid-cols-1 md:gap-x-5 md:gap-y-0 gap-y-5 items-center justify-center'>

                {/* Left Card — slides in from LEFT */}
                <div id='card-left' className="px-8 border border-[#0ef] hover:translate-y-[-8px] hover:bg-[#54b9c0] hover:text-gray-700 duration-500 cursor-pointer">
                    <div className="py-6">
                        <FontAwesomeIcon icon={faCrop} className='text-[#63E6BE] text-6xl' />
                    </div>
                    <div className="pb-6">
                        <h5 className="text-2xl mb-3 tracking-widest"> Frontend <br /> <span className='text-xl'> (web) </span> Developer</h5>
                        <p className="tracking-wider">I'm a frontend developer...</p>
                        <div className='my-7'>
                            <button className="relative overflow-hidden md:px-10 px-5 py-3 hover:text-black duration-300 font-semibold border border-[#0ef] group">
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0ef] to-[#0ef] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                                <span className="relative z-[10px]"> More About Me </span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Center Card — FADE IN */}
                <div id='card-center' className="px-8 border border-[#0ef] hover:translate-y-[-8px] hover:bg-[#54b9c0] hover:text-gray-700 duration-500 cursor-pointer">
                    <div className="py-6">
                        <FontAwesomeIcon icon={faAppStore} className='text-[#63E6BE] text-6xl' />
                    </div>
                    <div className="pb-6">
                        <h5 className="text-2xl mb-3 tracking-widest"> Backend <br /> <span className='text-xl'> (node-Js) </span> Developer </h5>
                        <p className="tracking-wider">I'm a backend developer (basic)...</p>
                        <div className='my-7'>
                            <button className="relative overflow-hidden md:px-10 px-5 py-3 hover:text-black duration-300 font-semibold border border-[#0ef] group">
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0ef] to-[#0ef] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                                <span className="relative z-[10px]"> More About Me </span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Card — slides in from RIGHT */}
                <div id='card-right' className="px-8 border border-[#0ef] hover:translate-y-[-8px] hover:bg-[#54b9c0] hover:text-gray-700 duration-500 cursor-pointer">
                    <div className="py-6">
                        <FontAwesomeIcon icon={faCode} className='text-[#63E6BE] text-6xl' />
                    </div>
                    <div className="pb-6">
                        <h5 className="text-2xl mb-3 tracking-widest"> React Native <br /> (App) Developer</h5>
                        <p className="tracking-wider">I'm a App developer...</p>
                        <div className='my-7'>
                            <button className="relative overflow-hidden md:px-10 px-5 py-3 hover:text-black duration-300 font-semibold border border-[#0ef] group">
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0ef] to-[#0ef] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                                <span className="relative z-[10px]"> More About Me </span>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Services
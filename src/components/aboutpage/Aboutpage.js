import React, { useEffect, useRef } from 'react';
import heroimg from '../../images/myimage2.jpg';
import prashanth from '../../images/Prashanthup.pdf';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const Aboutpage = () => {


    return (
        <section className='px-4 py-14 bg-primary-50 fade-about' id='about'>
            <div className='grid md:grid-cols-2 grid-cols-1 items-center justify-center md:w-[80%] md:mx-auto'>

                <div className='flex items-center'>
                    <img src={heroimg} className='md:w-[40%] w-[70%] md:mx-0 mx-auto rounded-full' />
                </div>

                <div>
                    <div className="py-5 mb-3">
                        <h3 className="text-5xl">  About <span className='text-[#0ef]'> Me</span> </h3>
                        <h1 className="text-3xl pt-4"> I'm a Web Developer <span className='text-lg text-[#0ef]'> (React js) </span> </h1>
                    </div>
                    <div>
                        <p className='leading-[30px] text-justify'> I have 1-year-experienced Frontend Developer. I have developed many projects, such as an admin panel and an ecommerce website, with React.js and JavaScript for the frontend to design modern, user-friendly UI components.
                        </p>
                        <p className='my-2 leading-[30px]'> Basic knowledge about <span> Node.js, Express, and MongoDB </span> have been used to create APIs for functionalities like registration, login, product management, user management, add-to-cart, payment gateways, and order processing... </p>
                    </div>
                    <div className='flex items-center gap-x-5 mt-8'>
                        <div>
                            <a href='https://www.facebook.com/' target='_blank'>
                                <FontAwesomeIcon icon={faFacebook} className='text-2xl text-[#63E6BE] border border-[#0ef] p-1 hover:shadow-[0px_0px_20px_#0ef] duration-300 cursor-pointer rounded-md' />
                            </a>
                        </div>

                        <div>
                            <a href='https://www.instagram.com' target='_blank'>
                                <FontAwesomeIcon icon={faInstagram} className='text-2xl text-[#63E6BE] border border-[#0ef] p-1 hover:shadow-[0px_0px_20px_#0ef] duration-300 cursor-pointer rounded-md' />
                            </a>
                        </div>

                        <div>
                            <a
                                href="https://wa.me/8106124493?text=Hello%20I%20am%20interested%20in%20working%20with%20you!"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon
                                    icon={faWhatsapp}
                                    className="text-2xl text-[#63E6BE] border border-[#0ef] p-1 hover:shadow-[0px_0px_20px_#0ef] duration-300 cursor-pointer rounded-md"
                                />
                            </a>
                        </div>
                        <div>
                            <a href='https://www.linkedin.com/in/prashanth-uppari-a3441a233/' target='_blank'>
                                <FontAwesomeIcon icon={faLinkedin} className='text-2xl text-[#63E6BE] border border-[#0ef] p-1 hover:shadow-[0px_0px_20px_#0ef] duration-300 cursor-pointer rounded-md' />
                            </a>
                        </div>
                    </div>
                    <div className='flex items-center my-5 gap-x-4'>
                        <button class="relative overflow-hidden md:px-5 px-4 py-3 font-semibold border hover:text-black duration-300 border-[#0ef] rounded-full group">
                            <span class="absolute inset-0 bg-gradient-to-r from-transparent via-[#0ef] to-[#0ef] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                            <span class="relative z-[10px]">More About Me</span>
                        </button>

                        <button class="relative overflow-hidden px-6 py-3 hover:text-black duration-300 font-semibold border border-[#0ef] rounded-full group">
                            <a
                                href={prashanth}
                                download="Prashanth.pdf"
                                class="overflow-hidden hover:text-black duration-300 font-semibold"
                            >
                                <span class="absolute inset-0 bg-gradient-to-r from-transparent via-[#0ef] to-[#0ef] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                                <span class="relative z-[10px]">Download CV</span>
                            </a>
                        </button>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Aboutpage

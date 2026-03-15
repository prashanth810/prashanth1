import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import heroimg from '../../images/myimage2.jpg';
import prashanth from '../../images/Prashanthup.pdf';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const Herobanner = () => {
    const typedElement = useRef(null);

    useEffect(() => {
        const options = {
            strings: ["Front End developer", "Web Designer", "Web Developer", "Coder"],
            typeSpeed: 200,
            backSpeed: 100,
            backDelay: 1000,
            loop: true,
        };

        const typed = new Typed(typedElement.current, options);

        return () => {
            typed.destroy();
        };
    }, []);


    return (
        <section className='px-4 py-14 fade-in'>
            <div className='md:grid md:grid-cols-2 grid-cols-1 items-center justify-center md:w-[85%] md:mx-auto mt-16 flex flex-col-reverse'>
                <div>
                    <div className="py-5">
                        <h3 className="text-4xl">Hello, It's Me</h3>
                        <h1 className="text-4xl pt-4"> Prashanth </h1>
                    </div>
                    <h3 className="text-2xl mb-4">
                        And I'm a <span className="text-[#0ef] text-4xl" ref={typedElement}></span>
                    </h3>
                    <div>
                        <p className='leading-[32px] text-justify'>As a Frontend Developer with 1 year of experience, I’ve worked on projects dynamic e-commerce website using React.js, JavaScript, and Tailwind css , CSS, Bootstarp, Html. </p>
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
                    <div className='flex items-center my-5 md:gap-x-4 gap-x-1'>
                        <button class="relative overflow-hidden md:px-5 px-4 py-3 font-semibold border hover:text-black duration-300 border-[#0ef] rounded-full group">
                            <span class="absolute inset-0 bg-gradient-to-r from-transparent via-[#0ef] to-[#0ef] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                            <span class="relative z-[10px]">More About Me</span>
                        </button>

                        <button class="relative overflow-hidden md:px-6 px-8 py-3 hover:text-black duration-300 font-semibold border border-[#0ef] rounded-full group">
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

                <div className='flex justify-center cursor-pointer'>
                    <img src={heroimg} className='md:w-[40%] w-[70%] md:mx-0 mx-auto rounded-full' />
                </div>

            </div>
        </section>
    )
}

export default Herobanner

import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import heroimg from '../../images/photo.png';
import prashanth from '../../images/Prashanth.pdf';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Antigravity from '../antigravity/Antigravity';

const Herobanner = () => {
    const typedElement = useRef(null);

    useEffect(() => {
        const options = {
            strings: ["FRONT END DEVELOPER", "BACK END DEVELOPER", "REACT NATIVE DEVELOPER", "WEB DESIGNER", "COADER"],
            typeSpeed: 200,
            backSpeed: 100,
            backDelay: 1000,
            loop: true,
        };
        const typed = new Typed(typedElement.current, options);
        return () => typed.destroy();
    }, []);

    return (
        <section className='px-4 py-14 fade-in' style={{ position: 'relative', overflow: 'hidden' }}>

            {/* Antigravity — pointer events ON so canvas tracks the mouse */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0,
                width: '100%', height: '100%',
                zIndex: 0,
            }}>
                <Antigravity
                    count={300}
                    magnetRadius={6}
                    ringRadius={7}
                    waveSpeed={0.4}
                    waveAmplitude={1}
                    particleSize={1.5}
                    lerpSpeed={0.05}
                    color="#5227FF"
                    autoAnimate
                    particleVariance={1}
                    rotationSpeed={0}
                    depthFactor={1}
                    pulseSpeed={3}
                    particleShape="capsule"
                    fieldStrength={10}
                />
            </div>

            {/* Content — pointer events ON so buttons/links still work */}
            <div
                className='md:grid md:grid-cols-2 grid-cols-1 items-center justify-center md:w-[85%] lg:mx-auto md:mx-auto mt-16 flex flex-col-reverse'
                style={{ position: 'relative', zIndex: 1 }}
            >
                <div>
                    <div className="py-5">
                        <h3 className="text-4xl">Hello, It's Me</h3>
                        <h1 className="text-4xl pt-4"> Prashanth </h1>
                    </div>
                    <h3 className="text-2xl mb-4">
                        And I'm a <span className="text-[#0ef] text-3xl textstyle" ref={typedElement}></span>
                    </h3>

                    <div>
                        <p className='leading-[32px] text-justify'>
                            As a Frontend Developer with 2 years of experience, I've built dynamic web and mobile applications using React.js, JavaScript, and React Native. My expertise spans the MERN stack, including Node.js and Express.js, along side frontend styling with Tailwind CSS, Bootstrap, and HTML.
                        </p>
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
                            <a href="https://wa.me/8106124493?text=Hello%20I%20am%20interested%20in%20working%20with%20you!" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faWhatsapp} className="text-2xl text-[#63E6BE] border border-[#0ef] p-1 hover:shadow-[0px_0px_20px_#0ef] duration-300 cursor-pointer rounded-md" />
                            </a>
                        </div>
                        <div>
                            <a href='https://www.linkedin.com/in/prashanth-uppari-a3441a233/' target='_blank'>
                                <FontAwesomeIcon icon={faLinkedin} className='text-2xl text-[#63E6BE] border border-[#0ef] p-1 hover:shadow-[0px_0px_20px_#0ef] duration-300 cursor-pointer rounded-md' />
                            </a>
                        </div>
                    </div>

                    <div className='flex items-center my-5 md:gap-x-4 gap-x-1'>
                        <button className="relative overflow-hidden md:px-5 px-4 py-3 font-semibold border hover:text-black duration-300 border-[#0ef] rounded-full group">
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0ef] to-[#0ef] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                            <span className="relative z-[10px]">More About Me</span>
                        </button>

                        <button className="relative overflow-hidden md:px-6 px-8 py-3 hover:text-black duration-300 font-semibold border border-[#0ef] rounded-full group">
                            <a href={prashanth} download="Prashanth.pdf" className="overflow-hidden hover:text-black duration-300 font-semibold">
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0ef] to-[#0ef] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                                <span className="relative z-[10px]">Download CV</span>
                            </a>
                        </button>
                    </div>
                </div>

                <div className='flex justify-center cursor-pointer'>
                    <img src={heroimg} className='md:w-[60%] w-[70%] md:mx-0 mx-auto rounded' />
                </div>
            </div>
        </section>
    )
}

export default Herobanner;
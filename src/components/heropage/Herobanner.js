import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import heroimg from '../../images/photo.png';
import prashanth from '../../images/Prashanth.pdf';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Antigravity from '../antigravity/Antigravity';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const Herobanner = () => {
    const typedElement = useRef(null);

    useGSAP(() => {
        const bannertimeline = gsap.timeline();

        bannertimeline.fromTo("#hello", {
            opacity: 0,
            y: 20
        }, {
            opacity: 1,
            y: 0,
            yoyo: true,
            duration: 0.8,
            ease: "power1.out",
        });

        bannertimeline.fromTo("#typing", {
            opacity: 0,
        }, {
            opacity: 1,
            duration: 0.3,
            ease: "power1.inOut",
        });

        bannertimeline.fromTo("#para", {
            opacity: 0,
            y: 20
        }, {
            opacity: 1,
            duration: 0.5,
            y: 0,
            ease: "power1.inOut",
        })
        bannertimeline.fromTo("#image", {
            opacity: 0,
            xPercent: 20,
        }, {
            opacity: 1,
            xPercent: 0,
            duration: 1,
            ease: "power1.inOut",
        })
    }, []);

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
        <section className='px-4 py-10 md:py-14' style={{ position: 'relative', overflow: 'hidden' }}>

            {/* Antigravity — smaller on mobile using responsive sizing */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0,
                width: '100%', height: '100%',
                zIndex: 0,
            }}>
                {/* Desktop — full size */}
                <div className='hidden md:block w-full h-full'>
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

                {/* Mobile — smaller, fewer particles */}
                <div className='block md:hidden w-full h-full'>
                    <Antigravity
                        count={80}
                        magnetRadius={3}
                        ringRadius={4}
                        waveSpeed={0.3}
                        waveAmplitude={0.6}
                        particleSize={0.8}
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
            </div>

            {/* Content */}
            <div
                className='md:grid md:grid-cols-2 grid-cols-1 items-center justify-center md:w-[85%] lg:mx-auto md:mx-auto mt-10 md:mt-16 flex flex-col-reverse gap-y-6 md:gap-y-0'
                style={{ position: 'relative' }}
            >
                <div>
                    <div className="py-3 md:py-5" id='hello'>
                        <h3 className="text-2xl md:text-4xl">Hello, It's Me</h3>
                        <h1 className="text-3xl md:text-4xl pt-2 md:pt-4">Prashanth</h1>
                    </div>

                    <h3 className="text-lg md:text-2xl mb-3 md:mb-4" id='typing'>
                        And I'm a{' '}
                        <span className="text-[#0ef] text-xl md:text-3xl textstyle" ref={typedElement}></span>
                    </h3>

                    <div id='para'>
                        <p className='leading-[28px] md:leading-[32px] text-justify text-sm md:text-base'>
                            As a Frontend Developer with 2 years of experience, I've built dynamic web and mobile applications using React.js, JavaScript, and React Native. My expertise spans the MERN stack, including Node.js and Express.js, alongside frontend styling with Tailwind CSS, Bootstrap, and HTML.
                        </p>
                    </div>

                    <div className='flex items-center gap-x-4 mt-6 md:mt-8' id='para'>
                        <a href='https://www.facebook.com/' target='_blank'>
                            <FontAwesomeIcon icon={faFacebook} className='text-xl md:text-2xl text-[#63E6BE] border border-[#0ef] p-1 hover:shadow-[0px_0px_20px_#0ef] duration-300 cursor-pointer rounded-md' />
                        </a>
                        <a href='https://www.instagram.com' target='_blank'>
                            <FontAwesomeIcon icon={faInstagram} className='text-xl md:text-2xl text-[#63E6BE] border border-[#0ef] p-1 hover:shadow-[0px_0px_20px_#0ef] duration-300 cursor-pointer rounded-md' />
                        </a>
                        <a href="https://wa.me/8106124493?text=Hello%20I%20am%20interested%20in%20working%20with%20you!" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faWhatsapp} className="text-xl md:text-2xl text-[#63E6BE] border border-[#0ef] p-1 hover:shadow-[0px_0px_20px_#0ef] duration-300 cursor-pointer rounded-md" />
                        </a>
                        <a href='https://www.linkedin.com/in/prashanth-uppari-a3441a233/' target='_blank'>
                            <FontAwesomeIcon icon={faLinkedin} className='text-xl md:text-2xl text-[#63E6BE] border border-[#0ef] p-1 hover:shadow-[0px_0px_20px_#0ef] duration-300 cursor-pointer rounded-md' />
                        </a>
                    </div>

                    <div className='flex items-center my-4 md:my-5 gap-x-3 md:gap-x-4' id='para'>
                        <button className="relative overflow-hidden px-4 md:px-5 py-2.5 md:py-3 text-sm md:text-base font-semibold border hover:text-black duration-300 border-[#0ef] rounded-full group">
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0ef] to-[#0ef] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                            <span className="relative z-[10px]">More About Me</span>
                        </button>

                        <button className="relative overflow-hidden px-4 md:px-6 py-2.5 md:py-3 text-sm md:text-base hover:text-black duration-300 font-semibold border border-[#0ef] rounded-full group">
                            <a href={prashanth} download="Prashanth.pdf" className="overflow-hidden hover:text-black duration-300 font-semibold">
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0ef] to-[#0ef] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                                <span className="relative z-[10px]">Download CV</span>
                            </a>
                        </button>
                    </div>
                </div>

                <div className='flex justify-center cursor-pointer' id='image'>
                    <img
                        src={heroimg}
                        className='w-[50%] md:w-[60%] mx-auto rounded'
                        alt="Prashanth"
                    />
                </div>
            </div>
        </section>
    );
}

export default Herobanner;
import React, { useEffect, useRef } from 'react';
import heroimg from '../../images/photo.png';
import prashanth from '../../images/Prashanth.pdf';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Aboutpage = () => {

    useGSAP(() => {
        const about = gsap.timeline({
            scrollTrigger: {
                trigger: "#about",
                start: "top 70%",
            }
        });

        // Image slides in from left
        about.from("#about-image", {
            opacity: 0,
            x: -120,
            duration: 1,
            ease: "power2.out",
        });

        // Heading fades up
        about.fromTo("#about-head", {
            opacity: 0,
            y: 40,
        }, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
        }, "-=0.5");

        // Paragraph — clip/reveal from bottom properly
        about.fromTo("#para p", {
            opacity: 0,
            y: 30,
            clipPath: "inset(100% 0% 0% 0%)",
        }, {
            opacity: 1,
            y: 0,
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1,
            ease: "power2.out",
        }, "-=0.3");

        // Each social icon staggers in from below
        about.from(".social-icon", {
            opacity: 0,
            y: 30,
            stagger: 0.15,
            duration: 0.5,
            ease: "back.out(1.7)",
        }, "-=0.3");

    }, []);

    return (
        <section className='px-4 py-14 bg-primary-50' id='about'>
            <div className='grid md:grid-cols-2 grid-cols-1 items-center justify-center md:w-[80%] md:mx-auto'>

                <div className='flex items-center' id='about-image'>
                    <img src={heroimg} className='md:w-[60%] w-[70%] md:mx-0 mx-auto rounded shadow-sm drop-shadow' />
                </div>

                <div>
                    <div className="py-5 mb-3" id='about-head'>
                        <h3 className="text-5xl"> About <span className='text-[#0ef]'> Me</span> </h3>
                        <h1 className="text-3xl pt-4"> I'm a Web Developer <span className='text-lg text-[#0ef]'> (React js) </span> </h1>
                    </div>

                    <div id='para'>
                        <p className='leading-[30px] text-justify'>
                            I am a Frontend Developer with 2 years of experience specializing in React.js, JavaScript, and React Native to build modern e-commerce sites and mobile applications. I also have hands-on experience with the MERN stack (Node.js, Express, and MongoDB) to develop full-stack features like authentication and payment integration. My focus is on creating seamless, user-friendly interfaces across both web and mobile platforms.
                        </p>
                    </div>

                    <div className='flex items-center gap-x-5 mt-8'>
                        <div className='social-icon'>
                            <a href='https://www.facebook.com/' target='_blank'>
                                <FontAwesomeIcon icon={faFacebook} className='text-2xl text-[#63E6BE] border border-[#0ef] p-1 hover:shadow-[0px_0px_20px_#0ef] duration-300 cursor-pointer rounded-md' />
                            </a>
                        </div>

                        <div className='social-icon'>
                            <a href='https://www.instagram.com' target='_blank'>
                                <FontAwesomeIcon icon={faInstagram} className='text-2xl text-[#63E6BE] border border-[#0ef] p-1 hover:shadow-[0px_0px_20px_#0ef] duration-300 cursor-pointer rounded-md' />
                            </a>
                        </div>

                        <div className='social-icon'>
                            <a href="https://wa.me/8106124493?text=Hello%20I%20am%20interested%20in%20working%20with%20you!" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faWhatsapp} className="text-2xl text-[#63E6BE] border border-[#0ef] p-1 hover:shadow-[0px_0px_20px_#0ef] duration-300 cursor-pointer rounded-md" />
                            </a>
                        </div>

                        <div className='social-icon'>
                            <a href='https://www.linkedin.com/in/prashanth-uppari-a3441a233/' target='_blank'>
                                <FontAwesomeIcon icon={faLinkedin} className='text-2xl text-[#63E6BE] border border-[#0ef] p-1 hover:shadow-[0px_0px_20px_#0ef] duration-300 cursor-pointer rounded-md' />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Aboutpage;
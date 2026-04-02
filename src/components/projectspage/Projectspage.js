import React, { useState } from 'react';
import icecream from '../../images/icecreamimg.png';
import fooddelivery from '../../images/food-delivery.png';
import appointement from '../../images/appointement.png';
import dianapps from '../../images/diansapps.png';
import schools from '../../images/schools.png';
import youtubeclone from '../../images/youtubeclone.png';
import geminiai from '../../images/gemini ai.png';
import cabpooling from '../../images/cabpooling.png';
import pickles from '../../images/pickles.png';
import photograph from '../../images/photograph.png';
import rewards from '../../images/rewards.png';
import zipto from '../../images/zipto.png';
import ecommerce from '../../images/ecommerce.png';
import ygeiai from '../../images/ygeiai.png';
import chatapp from '../../images/chatapp.png';
import livechat from '../../images/livechat.png';
import islandportfolio from '../../images/islandportfolio.png';
import spaceportfolio from '../../images/spaceportfolio.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faMobile, faGlobe, faServer } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ALL_PROJECTS = [
    // ── MERN ──────────────────────────────────────────────
    {
        id: 17,
        title: 'Wedding Photography Platform',
        image: photograph, // replace with photography screenshot
        tools: 'React JS, Node JS, Express JS, MongoDB, Cloudinary, Tailwind CSS',
        link: 'https://dineshphotographer.vercel.app', // update link
        category: 'mern',
        isGithub: false,
        badge: 'New',
    },
    {
        id: 3,
        title: 'Live Chat Application',
        image: livechat,
        tools: 'React JS, Node JS, Express JS, MongoDB, Tailwind CSS, WebSocket',
        link: 'https://livechatfrontend.onrender.com/',
        category: 'mern',
        isGithub: false,
    },
    {
        id: 1,
        title: "Grandmom's Pickles",
        image: pickles,
        tools: 'React JS, Node JS, Express JS, MongoDB, Tailwind CSS',
        link: 'https://pickles-murex.vercel.app',
        category: 'mern',
        isGithub: false,
    },
    {
        id: 2,
        title: 'Cab Pooling',
        image: cabpooling,
        tools: 'React JS, Node JS, Express JS, MongoDB, Tailwind CSS',
        link: 'https://cabpooling.vercel.app',
        category: 'mern',
        isGithub: false,
    },

    // ── MOBILE ────────────────────────────────────────────
    {
        id: 4,
        title: 'E-Commerce Mobile App',
        image: ecommerce,
        tools: 'React Native (Expo), Redux Toolkit, Node JS, Express JS, MongoDB, Razorpay',
        link: 'https://github.com/prashanth810/delivery-app',
        category: 'mobile',
        isGithub: true,
    },
    {
        id: 5,
        title: 'Real-Time Chat App',
        image: chatapp,
        tools: 'React Native CLI, Reanimated, WebSocket, Node JS, Express JS, MongoDB',
        link: 'https://github.com/prashanth810/livechatappfrontend',
        category: 'mobile',
        isGithub: true,
        badge: 'New',
    },
    {
        id: 6,
        title: 'Ygeiai Health App',
        image: ygeiai,
        tools: 'React Native CLI, Reanimated, Redux Toolkit, Node JS, Express JS, MongoDB',
        link: 'https://github.com/prashanth810/ygeiai',
        category: 'mobile',
        isGithub: true,
    },
    {
        id: 14,
        title: 'Zipto Clone (Booking Products)',
        image: zipto, // replace with your zipto image when ready
        tools: 'React Native CLI, Redux Toolkit, Node JS, Express JS, MongoDB, Google Maps API',
        link: 'https://github.com/prashanth810/Zepto_clone',
        category: 'mobile',
        isGithub: true,
        badge: 'New',
    },

    // ── WEB DESIGN ────────────────────────────────────────
    {
        id: 15,
        title: 'Spaceman 3D Portfolio',
        image: spaceportfolio, // replace with spaceman screenshot
        tools: 'React JS, Three.js, JavaScript, Tailwind CSS',
        link: 'https://prahsnathspacex.vercel.app/', // update link
        category: 'webdesign',
        isGithub: false,
        badge: 'New',
    },
    {
        id: 16,
        title: 'Island 3D Website',
        image: islandportfolio, // replace with island screenshot
        tools: 'React JS, Three.js, JavaScript, Tailwind CSS',
        link: 'https://3portfolio-beige.vercel.app/', // update link
        category: 'webdesign',
        isGithub: false,
        badge: 'New',
    },
    {
        id: 7,
        title: 'Ice Cream Parlour',
        image: icecream,
        tools: 'React JS, JavaScript, Tailwind CSS',
        link: 'https://icecream-gamma.vercel.app',
        category: 'webdesign',
        isGithub: false,
    },
    {
        id: 8,
        title: 'Food Delivery',
        image: fooddelivery,
        tools: 'React JS, JavaScript, Tailwind CSS',
        link: 'https://serene-chebakia-2f093e.netlify.app/',
        category: 'webdesign',
        isGithub: false,
    },
    {
        id: 9,
        title: 'Doctor Appointment',
        image: appointement,
        tools: 'React JS, JavaScript, CSS',
        link: 'https://iridescent-pegasus-aa66e4.netlify.app/',
        category: 'webdesign',
        isGithub: false,
    },
    {
        id: 10,
        title: 'Dian Apps',
        image: dianapps,
        tools: 'React JS, JavaScript, Tailwind CSS',
        link: 'https://github.com/prashanth810/dians-clone-website',
        category: 'webdesign',
        isGithub: true,
    },
    {
        id: 11,
        title: 'Schools',
        image: schools,
        tools: 'React JS, JavaScript, Tailwind CSS',
        link: 'https://github.com/prashanth810/Schools',
        category: 'webdesign',
        isGithub: true,
    },
    {
        id: 12,
        title: 'YouTube Clone',
        image: youtubeclone,
        tools: 'React JS, JavaScript, Tailwind CSS',
        link: 'https://youtube-clone-delta-swart.vercel.app/',
        category: 'webdesign',
        isGithub: false,
    },
    {
        id: 13,
        title: 'Gemini AI Clone',
        image: geminiai,
        tools: 'React JS, JavaScript, Tailwind CSS',
        link: 'https://stirring-tanuki-d750a2.netlify.app/',
        category: 'webdesign',
        isGithub: false,
    },
    {
        id: 18,
        title: 'Rewards Web App',
        image: rewards, // replace with rewards screenshot
        tools: 'React JS, Node JS, Express JS, MongoDB, Tailwind CSS',
        link: 'https://rewards-sigma-ten.vercel.app/rewards', // update link
        category: 'mern',
        isGithub: false,
        badge: 'New',
    },

];

const TABS = [
    { key: 'all', label: 'All', icon: faGlobe },
    { key: 'mern', label: 'MERN Stack (Web)', icon: faServer },
    { key: 'mobile', label: 'React Native (App)', icon: faMobile },
    { key: 'webdesign', label: 'Web Design', icon: faGlobe },
];

const CATEGORY_META = {
    mern: { label: 'MERN', color: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/25' },
    mobile: { label: 'React Native', color: 'bg-purple-500/15 text-purple-400 border-purple-500/25' },
    webdesign: { label: 'Web Design', color: 'bg-sky-500/15 text-sky-400 border-sky-500/25' },
};

const ProjectCard = ({ title, image, tools, link, category, isGithub, badge }) => {
    const meta = CATEGORY_META[category];

    return (
        <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col bg-[#111] border border-[#1e1e1e] rounded-2xl overflow-hidden
                       hover:border-[#0ef]/40 hover:shadow-[0_0_28px_rgba(0,238,255,0.06)]
                       transition-all duration-300 h-full"
        >
            {/* Image */}
            <div className="relative overflow-hidden h-[180px] shrink-0 bg-[#0d0d0d]">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />

                {/* Top badges row */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    {/* Category badge */}
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border backdrop-blur-sm ${meta.color}`}>
                        {meta.label}
                    </span>
                    {/* "New" badge */}
                    {badge && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#0ef]/20 text-[#0ef] border border-[#0ef]/30 backdrop-blur-sm animate-pulse">
                            {badge}
                        </span>
                    )}
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100
                                transition-opacity duration-300 flex flex-col items-center justify-center gap-1.5">
                    <FontAwesomeIcon
                        icon={isGithub ? faGithub : faArrowUpRightFromSquare}
                        className="text-[#0ef] text-xl mb-1"
                    />
                    <span className="text-[#0ef] font-semibold text-xs tracking-widest uppercase">
                        {isGithub ? 'View on GitHub' : 'Visit Site'}
                    </span>
                </div>
            </div>

            {/* Info */}
            <div className="px-4 pt-3 pb-4 flex flex-col flex-1">
                <p className="text-white font-semibold text-sm mb-2 group-hover:text-[#0ef]
                              transition-colors duration-200 leading-snug line-clamp-1">
                    {title}
                </p>

                {/* Tools tags */}
                <div className="flex flex-wrap gap-1 mt-auto">
                    {tools.split(',').map((tool) => (
                        <span
                            key={tool}
                            className="text-[10px] px-2 py-0.5 rounded-md bg-[#1a1a1a] text-[#555]
                                       border border-[#252525] leading-tight"
                        >
                            {tool.trim()}
                        </span>
                    ))}
                </div>
            </div>
        </a>
    );
};

const Projectspage = () => {
    const [activeTab, setActiveTab] = useState('all');

    const filtered = activeTab === 'all'
        ? ALL_PROJECTS
        : ALL_PROJECTS.filter((p) => p.category === activeTab);


    useGSAP(() => {
        // ✅ Safety: ensure buttons are visible even if ScrollTrigger fails
        gsap.set(".filter-btn", { opacity: 1, x: 0 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#projects",
                start: "top 80%",
                toggleActions: "play none none none",
                onEnter: () => {
                    gsap.from(".filter-btn", {
                        opacity: 0,
                        x: 100,
                        duration: 0.5,
                        stagger: 0.15,
                        ease: "power2.out",
                    });
                }
            }
        });

        tl.from("#projects-head", {
            opacity: 0,
            y: 30,
            duration: 0.6,
            ease: "power2.out"
        });

        tl.from("#projects-sub", {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: "power2.out"
        }, "-=0.3");

    }, []);

    return (
        <section id="projects" className="px-4 sm:px-6 py-10 lg:py-16">

            {/* Heading */}
            <div className="text-center mb-10 project">
                <h1 id="projects-head" className="text-4xl lg:text-5xl font-bold text-white tracking-tight mb-3">
                    Projects
                </h1>
                <p id="projects-sub" className="text-[#444] text-sm">A collection of things I've built</p>
            </div>

            {/* Filter Tabs */}
            <div className="flex justify-center gap-2 mb-10 flex-wrap">
                {TABS.map((tab) => {
                    const count = tab.key === 'all'
                        ? ALL_PROJECTS.length
                        : ALL_PROJECTS.filter(p => p.category === tab.key).length;

                    return (
                        <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key)}
                            className={`filter-btn flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm
                            font-medium border transition-all duration-200 cursor-pointer
                    ${activeTab === tab.key
                                    ? 'bg-[#0ef] text-black border-[#0ef] shadow-[0_0_16px_rgba(0,238,255,0.25)]'
                                    : 'bg-transparent text-[#666] border-[#252525] hover:border-[#0ef]/50 hover:text-[#0ef]'
                                }`}
                        >
                            <FontAwesomeIcon icon={tab.icon} className="text-[11px]" />
                            {tab.label}
                            <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold min-w-[18px] text-center
                    ${activeTab === tab.key ? 'bg-black/20 text-black' : 'bg-[#1a1a1a] text-[#444]'}`}>
                                {count}
                            </span>
                        </button>
                    );
                })}
            </div>
            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
                            gap-4 max-w-[1200px] mx-auto">
                {filtered.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                ))}
            </div>


        </section>
    );
};

export default Projectspage;
import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHtml5, faCss3Alt, faJs, faReact, faNode, faBootstrap
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faShippingFast, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const SKILLS = [
    { label: 'React JS', icon: faReact, color: '#61DAFB', target: 80 },
    { label: 'JavaScript', icon: faJs, color: '#F7DF1E', target: 72 },
    { label: 'Node JS', icon: faNode, color: '#68A063', target: 60 },
    { label: 'Express JS', icon: faShippingFast, color: '#FF6B35', target: 60 },
    { label: 'MongoDB', icon: faDatabase, color: '#3FA037', target: 50 },
    { label: 'Tailwind CSS', icon: faCss3Alt, color: '#38BDF8', target: 90 },
    { label: 'Material UI', icon: faLayerGroup, color: '#007FFF', target: 40 },
    { label: 'Bootstrap', icon: faBootstrap, color: '#7952B3', target: 85 },
    { label: 'CSS', icon: faCss3Alt, color: '#264DE4', target: 90 },
    { label: 'HTML', icon: faHtml5, color: '#F06529', target: 93 },
];

const SkillBar = ({ label, icon, color, target }) => {
    const [value, setValue] = useState(0);
    const ref = useRef(null);
    const started = useRef(false);
    const intervalRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    let current = 0;
                    intervalRef.current = setInterval(() => {
                        current += 1;
                        setValue(current);
                        if (current >= target) clearInterval(intervalRef.current);
                    }, 12);
                }
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => {
            observer.disconnect();
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [target]);

    return (
        <div
            ref={ref}
            className="skill-card bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4 
                       hover:border-[#444] hover:-translate-y-1 
                       transition-all duration-300"
        >
            <div className="flex items-center gap-2 mb-3">
                <FontAwesomeIcon icon={icon} style={{ color, fontSize: '18px' }} />
                <span className="flex-1 text-[#e0e0e0] text-sm font-medium">
                    {label}
                </span>
                <span className="text-[#aaa] text-xs font-semibold min-w-[36px] text-right">
                    {value}%
                </span>
            </div>

            <div className="w-full h-2 bg-[#2e2e2e] rounded-full overflow-hidden">
                <div
                    className="h-full rounded-full"
                    style={{
                        width: `${value}%`,
                        backgroundColor: color,
                        transition: 'width 50ms linear',
                    }}
                />
            </div>
        </div>
    );
};

const Skillspage = () => {

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#skills",
                start: "top 75%",
                toggleActions: "play none none none"
            }
        });

        tl.from("#skills-head", {
            opacity: 0,
            y: 30,
            duration: 0.6,
            ease: "power2.out"
        });

        tl.from("#skills-sub", {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: "power2.out"
        }, "-=0.3");

    }, []);

    return (
        <section id="skills" className="px-5 py-10 lg:py-14">
            <div className="text-center mb-12" id="skills-head">
                <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-tight mb-2">
                    Skills
                </h1>
                <p className="text-[#888] text-base" id="skills-sub">
                    Technologies I work with
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
                            gap-4 md:gap-5 max-w-[1200px] mx-auto">
                {SKILLS.map((skill) => (
                    <SkillBar key={skill.label} {...skill} />
                ))}
            </div>
        </section>
    );
};

export default Skillspage;
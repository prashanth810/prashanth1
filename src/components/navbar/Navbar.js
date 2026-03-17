import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const NAV_LINKS = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const navigate = useNavigate();
    const [active, setActive] = useState('#');
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Shrink navbar on scroll
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Close sidebar on resize to desktop
    useEffect(() => {
        const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    // Lock body scroll when sidebar open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    const handleNav = (href) => {
        setActive(href);
        setMenuOpen(false);
    };

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
                    ${scrolled
                        ? 'bg-[#0a0a0a]/95 backdrop-blur-md py-3'
                        : 'bg-transparent py-5'
                    }`}
            >
                <nav className="max-w-[85%] mx-auto px-5 flex items-center justify-between">

                    {/* Logo */}
                    <div
                        onClick={() => { navigate('/'); window.scrollTo(0, 0); setActive('#'); }}
                        className="cursor-pointer select-none"
                    >
                        <span className="text-3xl font-black tracking-tighter text-white">
                            P<span className="text-[#0ef]">.</span>
                        </span>
                    </div>

                    {/* Desktop Links */}
                    <ul className="hidden md:flex items-center gap-1">
                        {NAV_LINKS.map(({ label, href }) => (
                            <li key={href}>
                                <a
                                    href={href}
                                    onClick={() => handleNav(href)}
                                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200
                                        ${active === href
                                            ? 'text-[#0ef]'
                                            : 'text-[#999] hover:text-white'
                                        }`}
                                >
                                    {label}
                                    {/* Active underline dot */}
                                    {active === href && (
                                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#0ef]" />
                                    )}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* CTA Button - desktop */}
                    <a
                        href="#contact"
                        onClick={() => handleNav('#contact')}
                        className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold
                                   bg-[#0ef]/10 text-[#0ef] border border-[#0ef]/20
                                   hover:bg-[#0ef] hover:text-black transition-all duration-200"
                    >
                        Hire Me
                    </a>

                    {/* Hamburger - mobile */}
                    <button
                        onClick={() => setMenuOpen((p) => !p)}
                        className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg
                                   bg-[#1a1a1a] border border-[#2a2a2a] text-white
                                   hover:border-[#0ef]/40 transition-all duration-200"
                        aria-label="Toggle menu"
                    >
                        <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} className="text-base" />
                    </button>
                </nav>
            </header>

            {/* Mobile Sidebar Overlay */}
            <div
                onClick={() => setMenuOpen(false)}
                className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden
                    ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            />

            {/* Mobile Sidebar Drawer */}
            <aside
                className={`fixed top-0 right-0 bottom-0 z-50 w-[75%] max-w-[300px] bg-[#0d0d0d]
                            border-l border-[#1e1e1e] flex flex-col
                            transition-transform duration-300 ease-in-out md:hidden
                            ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                {/* Sidebar Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-[#1a1a1a]">
                    <span className="text-2xl font-black text-white tracking-tighter">
                        P<span className="text-[#0ef]">.</span>
                    </span>
                    <button
                        onClick={() => setMenuOpen(false)}
                        className="w-8 h-8 flex items-center justify-center rounded-lg
                                   bg-[#1a1a1a] border border-[#2a2a2a] text-[#888]
                                   hover:text-white hover:border-[#0ef]/40 transition-all duration-200"
                    >
                        <FontAwesomeIcon icon={faXmark} className="text-sm" />
                    </button>
                </div>

                {/* Sidebar Links */}
                <ul className="flex flex-col gap-1 px-4 py-6 flex-1">
                    {NAV_LINKS.map(({ label, href }, i) => (
                        <li key={href}>
                            <a
                                href={href}
                                onClick={() => handleNav(href)}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium
                                            transition-all duration-200
                                    ${active === href
                                        ? 'bg-[#0ef]/10 text-[#0ef] border border-[#0ef]/20'
                                        : 'text-[#777] hover:bg-[#1a1a1a] hover:text-white border border-transparent'
                                    }`}
                                style={{ animationDelay: `${i * 40}ms` }}
                            >
                                <span className={`w-1.5 h-1.5 rounded-full shrink-0
                                    ${active === href ? 'bg-[#0ef]' : 'bg-[#333]'}`}
                                />
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Sidebar Footer CTA */}
                <div className="px-4 pb-8">
                    <a
                        href="#contact"
                        onClick={() => handleNav('#contact')}
                        className="block text-center py-3 rounded-xl text-sm font-semibold
                                   bg-[#0ef] text-black hover:bg-[#0ef]/80 transition-all duration-200"
                    >
                        Hire Me
                    </a>
                </div>
            </aside>
        </>
    );
};

export default Navbar;
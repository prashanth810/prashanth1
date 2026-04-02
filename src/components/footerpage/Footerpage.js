import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faPhoneVolume, faLocationDot, faCircleCheck, faSpinner, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Footerpage = () => {
    const [formdata, setFormdata] = useState({
        name: '', email: '', mobile: '', message: '',
    });
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // 'success' | 'error' | null

    useGSAP(() => {
        const t1 = gsap.timeline({
            scrollTrigger: {
                trigger: "#contact",
                start: "top 75%",
                toggleActions: "play none none none",
            }
        });


        const t2 = gsap.timeline({
            scrollTrigger: {
                trigger: "#contact",
                start: "top 25%",
                toggleActions: "play none none none",
            }
        });

        t1.fromTo(".contactme-head", {
            opacity: 0,
            yPercent: 30,
        }, {
            opacity: 1,
            yPercent: 0,
            duration: 1,
            ease: "power1.inOut",
        })

        t1.fromTo(".sub-head", {
            opacity: 0,
            yPercent: 30,
        }, {
            opacity: 1,
            yPercent: 0,
            duration: 1,
            ease: "power2.inOut",
        })

        t2.fromTo(".letswork", {
            opacity: 0,
            yPercent: 20,
        }, {
            opacity: 1,
            yPercent: 0,
            duration: 1,
            ease: "power1.inOut",
        })

        t2.fromTo(".contactform", {
            opacity: 0,
            yPercent: 20,
        }, {
            opacity: 1,
            yPercent: 0,
            duration: 1,
            ease: "power1.inOut",
        })
    }, []);

    const handlechange = (e) => {
        const { name, value } = e.target;
        setFormdata((prev) => ({ ...prev, [name]: value }));
    };

    const handlesubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        try {
            await axios.post(
                'https://photograph-1lqy.onrender.com/api/auth/mail/send-mail',
                formdata,
                { headers: { 'Content-Type': 'application/json' } }
            );
            setStatus('success');
            setFormdata({ name: '', email: '', mobile: '', message: '' });
        } catch (error) {
            console.error('Mail failed:', error.message);
            setStatus('error');
        } finally {
            setLoading(false);
            setTimeout(() => setStatus(null), 4000);
        }
    };

    return (
        <section className="px-5 py-16 bg-[#0a0a0a]" id="contact">

            {/* Heading */}
            <div className="text-center mb-14">
                <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight mb-3 contactme-head">
                    Contact <span className="text-[#0ef]">Me</span>
                </h2>
                <p className="text-[#555] text-sm sub-head">Let's work together — drop me a message!</p>
            </div>

            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">

                {/* ── LEFT INFO ── */}
                <div className="flex flex-col gap-8 letswork">
                    <div>
                        <h3 className="text-white text-xl font-semibold mb-3">Let's Work Together</h3>
                        <p className="text-[#666] text-sm leading-relaxed">
                            If you're interested in collaborating with me, send a message using this form.
                            I'll review your request and evaluate the opportunity — if it's a good fit, I'll reach out to you.
                        </p>
                    </div>

                    <div className="flex flex-col gap-8 pt-6">
                        <a href="mailto:prashanthuppari1999@gmail.com" className="flex items-center gap-4 group">
                            <div className="w-10 h-10 rounded-xl bg-[#0ef]/10 border border-[#0ef]/20 flex items-center justify-center shrink-0 group-hover:bg-[#0ef]/20 transition-all duration-200">
                                <FontAwesomeIcon icon={faPaperPlane} className="text-[#0ef] text-sm" />
                            </div>
                            <div>
                                <p className="text-[#444] text-xs mb-0.5">Email</p>
                                <p className="text-[#ccc] text-sm group-hover:text-[#0ef] transition-colors duration-200">
                                    prashanthuppari1999@gmail.com
                                </p>
                            </div>
                        </a>

                        <a href="tel:8106124493" className="flex items-center gap-4 group">
                            <div className="w-10 h-10 rounded-xl bg-[#0ef]/10 border border-[#0ef]/20 flex items-center justify-center shrink-0 group-hover:bg-[#0ef]/20 transition-all duration-200">
                                <FontAwesomeIcon icon={faPhoneVolume} className="text-[#0ef] text-sm" />
                            </div>
                            <div>
                                <p className="text-[#444] text-xs mb-0.5">Phone</p>
                                <p className="text-[#ccc] text-sm group-hover:text-[#0ef] transition-colors duration-200">
                                    +91 8106124493
                                </p>
                            </div>
                        </a>

                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-[#0ef]/10 border border-[#0ef]/20 flex items-center justify-center shrink-0">
                                <FontAwesomeIcon icon={faLocationDot} className="text-[#0ef] text-sm" />
                            </div>
                            <div>
                                <p className="text-[#444] text-xs mb-0.5">Location</p>
                                <p className="text-[#ccc] text-sm">Hyderabad, Telangana, India</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── RIGHT FORM ── */}
                <div className="bg-[#111] border border-[#1e1e1e] rounded-2xl p-6 sm:p-8 ">

                    {/* Success / Error Banner */}
                    {status === 'success' && (
                        <div className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/25 rounded-xl px-4 py-3 mb-5">
                            <FontAwesomeIcon icon={faCircleCheck} className="text-emerald-400 text-lg shrink-0" />
                            <p className="text-emerald-400 text-sm font-medium">
                                Message sent! I'll get back to you soon.
                            </p>
                        </div>
                    )}
                    {status === 'error' && (
                        <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/25 rounded-xl px-4 py-3 mb-5">
                            <FontAwesomeIcon icon={faCircleXmark} className="text-red-400 text-lg shrink-0" />
                            <p className="text-red-400 text-sm font-medium">
                                Something went wrong. Please try again.
                            </p>
                        </div>
                    )}

                    <form onSubmit={handlesubmit} className="flex flex-col gap-5">

                        {/* Name + Mobile */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 contactform">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[#666] text-xs font-medium">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formdata.name}
                                    onChange={handlechange}
                                    placeholder="Your name"
                                    required
                                    className="bg-[#0d0d0d] border border-[#252525] rounded-xl px-4 py-3 text-sm text-white
                                               placeholder-[#333] outline-none focus:border-[#0ef]/40
                                               transition-colors duration-200"
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[#666] text-xs font-medium">Mobile</label>
                                <input
                                    type="text"
                                    name="mobile"
                                    value={formdata.mobile}
                                    onChange={(e) => {
                                        const value = e.target.value.replace(/\D/g, '').slice(0, 10);
                                        handlechange({ target: { name: 'mobile', value } });
                                    }}
                                    placeholder="+91 00000 00000"
                                    required
                                    className="bg-[#0d0d0d] border border-[#252525] rounded-xl px-4 py-3 text-sm text-white
                                               placeholder-[#333] outline-none focus:border-[#0ef]/40
                                               transition-colors duration-200"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-1.5 contactform">
                            <label className="text-[#666] text-xs font-medium">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formdata.email}
                                onChange={handlechange}
                                placeholder="your@email.com"
                                required
                                className="bg-[#0d0d0d] border border-[#252525] rounded-xl px-4 py-3 text-sm text-white
                                           placeholder-[#333] outline-none focus:border-[#0ef]/40
                                           transition-colors duration-200"
                            />
                        </div>

                        {/* Message */}
                        <div className="flex flex-col gap-1.5 contactform">
                            <label className="text-[#666] text-xs font-medium">Message</label>
                            <textarea
                                rows={4}
                                name="message"
                                value={formdata.message}
                                onChange={handlechange}
                                placeholder="Write your message..."
                                required
                                className="bg-[#0d0d0d] border border-[#252525] rounded-xl px-4 py-3 text-sm text-white
                                           placeholder-[#333] outline-none focus:border-[#0ef]/40
                                           transition-colors duration-200 resize-none"
                            />
                        </div>

                        <div className='contactform'>
                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2
                                        transition-all duration-200
                                ${loading
                                        ? 'bg-[#0ef]/30 text-black/60 cursor-not-allowed'
                                        : 'bg-[#0ef] text-black hover:bg-[#0ef]/80 hover:shadow-[0_0_20px_rgba(0,238,255,0.2)] cursor-pointer'
                                    }`}
                            >
                                {loading ? (
                                    <>
                                        <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <FontAwesomeIcon icon={faPaperPlane} />
                                        Send Message
                                    </>
                                )}
                            </button>
                        </div>

                    </form>
                </div>
            </div>

            {/* ── FOOTER BAR ── */}
            <div className="max-w-5xl mx-auto mt-14 pt-6 border-t border-[#1a1a1a]
                flex flex-col sm:flex-row items-center justify-between gap-3 contactform">
                <p className="text-[#666] text-xs">© 2026 Prashanth. All Rights Reserved.</p>
                <button onClick={() => { navigate('/privacy'); window.scrollTo(0, 0) }}
                    className="text-[#666] text-xs cursor-pointer hover:text-[#0ef] transition-colors duration-200" >
                    Privacy Policy
                </button>
            </div>

        </section>
    );
};

export default Footerpage;
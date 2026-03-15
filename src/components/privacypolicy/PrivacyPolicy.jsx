import React from 'react';
import Navbar from '../navbar/Navbar';

const SECTIONS = [
    {
        title: '1. Information I Collect',
        content: `When you use the contact form on my portfolio, I collect the following information:
- Full Name
- Email Address
- Mobile Number
- Message / Inquiry

This information is collected solely to respond to your inquiry or collaboration request.`,
    },
    {
        title: '2. How I Use Your Information',
        content: `The information you provide is used only to:
- Respond to your message or collaboration request
- Contact you regarding project opportunities
- Improve the user experience of this portfolio

I do not use your data for marketing, advertising, or any commercial purposes.`,
    },
    {
        title: '3. Data Sharing',
        content: `I do not sell, trade, rent, or share your personal information with any third parties. Your data is strictly used for communication between you and me (Prashanth Uppari).`,
    },
    {
        title: '4. Data Storage',
        content: `Messages submitted through the contact form are received via email (nodemailer) and may be stored in my personal email inbox. I do not store your data in any external database beyond what is necessary to respond to your inquiry.`,
    },
    {
        title: '5. Cookies',
        content: `This portfolio website does not use tracking cookies or any third-party analytics tools that collect personal data. Basic session data may be used for authentication purposes where applicable.`,
    },
    {
        title: '6. Third-Party Services',
        content: `This website may use the following third-party services:
- Vercel — for website hosting
- Render — for backend hosting
- MongoDB Atlas — for database (if applicable)
- Cloudinary — for image storage (if applicable)

Each of these services has their own privacy policies. I encourage you to review them.`,
    },
    {
        title: '7. Your Rights',
        content: `You have the right to:
- Request access to any personal data you've shared with me
- Request deletion of your data
- Withdraw consent at any time

To exercise any of these rights, contact me directly at prashanthuppari1999@gmail.com.`,
    },
    {
        title: "8. Children's Privacy",
        content: `This portfolio is not directed at children under the age of 13. I do not knowingly collect personal information from children.`,
    },
    {
        title: '9. Changes to This Policy',
        content: `I may update this Privacy Policy occasionally. Any changes will be reflected on this page with an updated date. Continued use of this website after changes means you accept the updated policy.`,
    },
    {
        title: '10. Contact',
        content: `If you have any questions about this Privacy Policy, feel free to reach out:

📧  prashanthuppari1999@gmail.com
📞  +91 8106124493
📍  Hyderabad, Telangana, India`,
    },
];

const Privacypolicy = () => {
    return (
        <>
            <Navbar />
            <section className="bg-black min-h-screen px-5 pt-20 pb-16">
                <div className="max-w-[760px] mx-auto">

                    {/* Header */}
                    <div className="mb-12 border-b border-[#1f1f1f] pb-8">
                        <p className="text-[#0ef] text-[11px] font-semibold tracking-[3px] uppercase mb-3">
                            Legal
                        </p>
                        <h1 className="text-white text-4xl font-bold tracking-tight mb-3">
                            Privacy Policy
                        </h1>
                        <p className="text-[#555] text-sm">
                            Last updated: <span className="text-[#666]">March 2025</span>
                        </p>

                        {/* Intro box */}
                        <div className="mt-6 px-5 py-4 bg-[#0f0f0f] border border-[#1e1e1e] rounded-xl">
                            <p className="text-[#aaa] text-sm leading-7">
                                This Privacy Policy explains how{' '}
                                <span className="text-white font-semibold">Prashanth Uppari</span>{' '}
                                collects, uses, and protects the information you provide when visiting this portfolio website.
                            </p>
                        </div>
                    </div>

                    {/* Sections */}
                    <div className="flex flex-col gap-4">
                        {SECTIONS.map((section, i) => (
                            <div
                                key={i}
                                className="bg-[#0d0d0d] border border-[#2a2a2a] rounded-2xl p-6"
                            >
                                <h2 className="text-white text-sm font-semibold mb-3">
                                    {section.title}
                                </h2>
                                <p className="text-[#aaa] text-sm leading-7 whitespace-pre-line">
                                    {section.content}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Footer */}
                    <div className="mt-12 pt-6 border-t border-[#1a1a1a] text-center">
                        <p className="text-[#555] text-xs">
                            © 2025 Prashanth Uppari. All Rights Reserved.
                        </p>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Privacypolicy;
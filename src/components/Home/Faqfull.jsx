import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: 'What services does PTS offer?',
        answer:
            'We specialize in custom software development, SaaS solutions, mobile and web app development, DevOps, UI/UX design, and emerging tech solutions including AI/ML, blockchain, and cloud infrastructure.',
    },
    {
        question: 'Who are your ideal clients?',
        answer:
            'We work with startups, SMEs, and large enterprises across industries like fintech, e-commerce, healthtech, and social media who are looking for scalable, secure, and innovative digital solutions.',
    },
    {
        question: '. What industries have you worked with?',
        answer:
            'Our team has delivered successful projects in fintech, retail, e-learning, social media, healthcare, logistics, and enterprise solutions.',
    },
    {
        question: 'Do you offer MVP development for startups?',
        answer:
            'Yes. We provide rapid MVP development to help startups validate their ideas, attract investors, and scale efficiently.',
    },
    {
        question: 'What technologies do you use?',
        answer:
            'Our tech stack includes React, Node.js, MongoDB, Flutter, AWS, Azure, Docker, Kubernetes, AI/ML tools, and modern DevOps platforms like GitHub, Jenkins, SonarQube, and Blazemeter.',
    },
    {
        question: 'How do you manage projects?',
        answer:
            'We follow agile methodology with sprint-based planning, regular updates, transparent communication, and strong QA/testing practices to ensure timely, quality delivery.',
    },
    {
        question: 'Do you offer post-launch support?',
        answer:
            'Yes, we provide ongoing support, maintenance, monitoring, and DevOps services post-deployment to ensure performance and stability.',
    },
    {
        question: 'Where are you based?',
        answer:
            'Our head office is located at 3rd Floor, Reliance Smart Bazaar Building, Hosur Rd, Electronic City Phase II, Bengaluru, Karnataka 560100',
    },
    {
        question: 'How do I get started with PTS?',
        answer:
            'Simply reach out via our contact form, email us at contact@pixalivetech.com, or call us at +91-8778584566. We’ll schedule a consultation and take  it  forward.',
    }
   
];

const Faqfull = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-[1270px] mx-auto py-16">
            <div className="bg-white w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-20 py-12">
                <div className="flex flex-col max-w-[1100px] mx-auto lg:flex-row justify-between items-start lg:items-center gap-10">
                    {/* Left Section */}
                    <div className="flex-1 -translate-x-2 sm:-translate-x-4 transform">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                            Frequently<br />
                            Asked <br />
                            Questions
                        </h2>
                    </div>
                </div>

                {/* Flex row for content */}
                <div className="flex flex-col lg:flex-row gap-6 mt-8">
                    {/* Left content */}
                    <div className="w-full lg:w-1/2">
                        <p className="text-base sm:text-lg md:text-xl text-gray-700"></p>
                    </div>

                    {/* Right content */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-4">
                        <p className="text-base sm:text-lg md:text-xl text-black">
                            We’ve built long-lasting partnerships
                            with the most ambitious brands
                            across the globe
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-10 p-2 space-y-4 max-w-[980px] ml-auto pr-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="border-b pb-4"
                        style={{ borderColor: '#E7E7E7' }}
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="flex justify-between items-center w-full text-left text-base md:text-lg font-medium py-4"
                        >
                            <span>{`${index + 1}. ${faq.question}`}</span>
                            <div
                                className="cursor-pointer border border-gray-300 rounded-full p-1 hover:bg-gray-100 transition"
                            >
                                {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                            </div>
                        </button>
                        <div
                            className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'
                                }`}
                        >
                            <p className="text-[18px] text-[#5D5D5D]">
                                {faq.answer}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faqfull;
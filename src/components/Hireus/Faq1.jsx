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
            'My ideal clients are individuals and businesses seeking intelligent, efficient assistance with writing, coding, creativity, and problem-solving.',
    },
    {
        question: 'What industries have you worked with?',
        answer:
            'I have worked with industries including technology, education, healthcare, finance, marketing, legal, and e-commerce.',
    },
    {
        question: 'Do you offer MVP development for startups?',
        answer:
            'Yes, I offer MVP development support for startups, from idea validation to prototyping and launch.',
    },
    {
        question: 'What technologies do you use?',
        answer:
            'I work with technologies like JavaScript, React, Node.js, Python, SQL, Tailwind CSS, and various APIs and frameworks.',
    },
    {
        question: 'How do you manage projects?',
        answer:
            'I manage projects using agile methodologies, clear milestones, regular updates, and collaborative tools like Trello, Notion, or GitHub.',
    },
    {
        question: 'Do you offer post-launch support?',
        answer:
            'Yes, I offer post-launch support including maintenance, updates, and feature enhancements.',
    },
    {
        question: 'Where are you based?',
        answer:
            'I am based in the cloud, accessible globally to support you anytime, anywhere.',
    },
    {
        question: 'How do I get started with PTS?',
        answer:
            'To get started with PTS, simply contact us through our website or schedule a free consultation.',
    },
];

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
            <div className=" p-2 w-full max-w-[1280px] mx-auto text-black sm:px-6 md:px-10 py-12 sm:py-16">
                <div className=" w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-20 py-12">
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

export default Faq;
    import React, { useState } from "react";
    import CountUp from "react-countup";
    import { motion, AnimatePresence } from "framer-motion";
    import rajasekar from './../../assets/imgs/home/team1.png';
    import penugonda from './../../assets/imgs/home/penugonda.png';
    import dey from './../../assets/imgs/home/dey.png';

    const testimonials = [
    {
        name: "Rajaseker Sundaresan",
        company: "Pixalive tech network",
        location: "Bengaluru, India",
        image: rajasekar,
        quote: "PIXALIVE TECHNOLOGY SERVICES is one of the India’s fastest growing Software Development Company",
        users: "10",
        growth: "99",
    },
    {
        name: "Devendar Penugonda",
        company: "Krishivan Technologies",
        location: "Bengaluru, India",
        image: penugonda,
        quote: "Krishivan Technologies is an innovative startup dedicated to transforming agriculture through advanced methods, technologies, and services.",
        users: "8",
        growth: "94",
    },
    {
        name: "Anirban Dey",
        company: "Chaimug",
        location: "West Bengal, India",
        image: dey,
        quote: "Chaimug is a one-of-a-kind social platform that replicates the offline chai shop experience—where you can order tea, read the news, share gossip, and connect with others over casual, meaningful conversations.",
        users: "12",
        growth: "98",
    },
    ];

    export default function TestimonialsTabs() {
    const [activeIndex, setActiveIndex] = useState(0);
    const active = testimonials[activeIndex];

    return (
        <div className="p-4 w-full max-w-[1280px] mx-auto text-black sm:px-6 md:px-10 py-12 sm:py-16">
        <div className="flex justify-between items-start flex-wrap gap-2">
            <h4 className="text-black text-sm font-[20px]-medium mb-1">What our clients say</h4>
            <h2 className="text-2xl md:text-3xl font-normal text-start w-full md:w-[700px] leading-[150%] mb-2">
            Our clients share real stories of growth, trust, and successful collaboration with us.
            </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mt-[40px] md:mt-[60px]">
            {/* Tabs */}
            <div className="flex flex-col gap-4 w-full md:w-1/4">
            {testimonials.map((client, idx) => (
                <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`text-left cursor-pointer p-3 transition-all duration-300 
                    ${idx === activeIndex
                    ? "font-bold text-black border-b-1 border-black"
                    : "text-[#B0B0B0] border-b"
                    }`}
                >
                <p className="text-[20px]">{client.name}</p>
                <p className="text-sm">{client.company}</p>
                <p className="text-xs">{client.location}</p>
                </button>
            ))}
            </div>

            {/* Content Section */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 w-full">
            {/* Animated Image */}
            <AnimatePresence mode="wait">
                <motion.div
                key={`image-${activeIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="w-full md:w-1/3 -mt-2 md:-mt-9"
                >
                <img
                    src={active.image}
                    alt={active.name}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                />
                </motion.div>
            </AnimatePresence>

            {/* Animated Quote */}
            <AnimatePresence mode="wait">
                <motion.div
                key={`quote-${activeIndex}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="w-full md:w-1/3"
                >
                <p className="text-md">“{active.quote}”</p>
                </motion.div>
            </AnimatePresence>

            {/* Static Stats */}
            <div className="w-full md:w-1/3 flex flex-col md:gap-10 gap-4">
                <div className="bg-white p-4 text-center cursor-pointer hover:scale-[1.05] transition-all duration-300 ease-in-out ">
                <p className="text-[19px] text-black">Active Users</p>
                <p className="text-[36px] font-normal">
                    <CountUp
                    key={`users-${activeIndex}`}
                    end={parseInt(active.users)}
                    duration={2}
                    start={0}
                    suffix="k"
                    />
                </p>
                </div>
                <div className="bg-white p-4 text-center cursor-pointer hover:scale-[1.05] transition-all duration-300 ease-in-out ">
                <p className="text-[19px] text-black">Agent Growth</p>
                <p className="text-[36px] font-normal">
                    <CountUp
                    key={`growth-${activeIndex}`}
                    end={parseInt(active.growth)}
                    duration={2}
                    start={0}
                    suffix="%"
                    />
                </p>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
    }

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LiveShoppingCTA = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      navigate('/contact');
    }, 300);
  };

  return (
    <section className="py-16 px-4 text-center bg-[#f9f9f9]">
      <div className="max-w-2xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
          Transform Your Business with <br className="hidden sm:block" />
          start Your Pixalive
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 text-base mb-8">
          Join hundreds of successful entrepreneurs across industries who are <br className="hidden sm:block" />
          building scalable, recurring revenue businesses
        </p>

        {/* Button */}
        <button
          onClick={handleClick}
          className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white text-sm font-medium rounded hover:bg-gray-800 transition"
        >
          Start Your Journey
          <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
};

export default LiveShoppingCTA;

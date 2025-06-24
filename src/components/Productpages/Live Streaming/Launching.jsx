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
    <section className="py-16 px-4 text-center bg-white">
      <div className="max-w-2xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
          Launch Your Social Live <br className="hidden sm:block" />
          Streaming Experience Today
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 text-base mb-8">
          Captivate your audience with interactive features designed to keep them engaged and coming back for more.
        </p>

        {/* Button */}
        <button
          onClick={handleClick}
          className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white text-sm font-medium rounded hover:bg-gray-800 transition"
        >
          Book Live Demo
          <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
};

export default LiveShoppingCTA;

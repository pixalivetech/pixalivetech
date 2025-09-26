import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LiveShoppingCTA = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Navigate after slight delay to allow scroll
    setTimeout(() => {
      navigate('/contact');
    }, 300); // optional delay for smoother effect
  };

  return (
    <section className="py-16 px-4 text-center bg-white">
      <div className="max-w-2xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
          Launch Your Live Shopping <br className="hidden sm:block" />
          Journey with Pixalive
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 text-base mb-8">
          Captivate your audience in real time and turn engagement into sales.
        </p>

        {/* Button with scroll and navigate */}
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

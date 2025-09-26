import React from 'react';
import { useNavigate } from 'react-router-dom';

const Gmail = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w[1280px] flex flex-col md:flex-row items-start justify-between px-6 md:px-20 py-12  min-h-[300px]">
      <p className="text-sm text-gray-700 mb-4 md:mb-0">
        Ready to Connect With Pixalive?
      </p>

      <div className="max-w-2xl">
        <h2 className="font-lufga font-semibold text-xl sm:text-2xl md:text-3xl leading-relaxed text-black mb-8">
          Let’s turn bold ideas into powerful tech. <br />
          Whether you're a business looking to innovate or a talent ready to create, <br />
          we’d love to hear from you.
        </h2>

        <button
          onClick={() => navigate('/contact')}
          className="group inline-flex cursor-pointer items-center gap-2 text-base font-medium border-b border-black "
        >
          Contact Us
          <span className="transform transition-transform group-hover:translate-x-1">↗</span>
        </button>
      </div>

      {/* Replace the email with your image */}
     
    </div>
  );
};

export default Gmail;

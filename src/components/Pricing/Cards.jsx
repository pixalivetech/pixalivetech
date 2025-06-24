import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import tool from './../../assets/Pricing/tool.png';

const plans = [
  {
    title: 'STANDARD',
    subtitle: 'Get a taste of live commerce',
    featuresTitle: 'Key benefits of Standard:',
    features: [
      'Free storage up to 50 GB',
      'Free streaming minutes up to 20,000 min per month',
      'Free short video views up to 100,000 per month',
      'Unlimited concurrent viewers',
      'Save and archive livestreams',
      'Upload recorded videos',
      'Livestream moderation',
      'Adaptive bitrate',
      'Livestream and video analytics',
      'Livecast to social media platforms simultaneously',
    ],
    category: 'LORA',
  },
  {
    title: 'PRO',
    subtitle: 'Elevate your live stream interactivity',
    featuresTitle: 'All benefits of Standard, plus:',
    features: [
      'Free storage up to 200 GB',
      'Free streaming minutes up to 100,000 min per month',
      'Free short video views up to 500,000 per month',
      'In-stream voucher code',
      'Live engagement tools',
      'Video player theme customization',
      'Ecommerce Integration',
      'Interactive branching video',
      'Built-in video editor',
      'Webhooks (for integrations)',
    ],
    category: 'LORA',
  },
  {
    title: 'END - TO - END DEVELOPMENT',
    subtitle: 'Tailored to your needs',
    featuresTitle: 'Fully customized features, such as:',
    features: [
      'Social features',
      'Multi-host live streaming',
      'Complete e-commerce integration',
      'Monetization (ticketing, subscription, tipping, etc)',
      'Interactive mini games',
      'Virtual gifting (2D/3D)',
      'Streamer battles',
      '360 degrees video',
      'Mobile (iOS/Android) and Web support',
    ],
    category: 'ENTERPRISE',
  },
];

const PlansSection = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('LORA');

  const handleContactClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/contact');
  };

  const filteredPlans = plans.filter(plan => plan.category === selectedCategory);

  return (
    <section className=" max-w-[1280px] mx-auto text-black font-medium px-2 md:px-16 py-16">
      {/* Heading */}
      <h2 className="text-4xl mb-4 font-md">
        Choose a Plan That<br />Suits Your Needs
      </h2>

      {/* Toggle Buttons */}
      <div className="flex justify-center items-center space-x-2 mb-10">
        <div className="bg-gray-200 p-1 rounded">
          <button
            className={`px-4 py-1 rounded-l ${selectedCategory === 'LORA' ? 'bg-black text-white' : 'bg-gray-200 text-black'}`}
            onClick={() => setSelectedCategory('LORA')}
          >
            LORA
          </button>
          <button
            className={`px-4 py-1 cursor-pointer rounded-r ${selectedCategory === 'ENTERPRISE' ? 'bg-black text-white' : 'bg-gray-200 text-black'}`}
            onClick={() => setSelectedCategory('ENTERPRISE')}
          >
            ENTERPRISE
          </button>
        </div>
      </div>

      {/* Cards Container */}
      <div className="flex flex-wrap justify-center gap-6">
        {filteredPlans.map((plan, index) => (
          <div
            key={index}
            className="w-full sm:w-[90%] md:w-[48%] lg:w-[30%] border border-gray-300 bg-white p-6 flex flex-col justify-between shadow-sm"
          >
            <div>
              <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4">
                <img src={tool} alt="icon" className="w-5 h-5" />
              </div>
              <h3 className="text-xl mb-1">{plan.title}</h3>
              <p className="text-gray-600 mb-4">{plan.subtitle}</p>
              <hr className="border-gray-300 mb-4" />
              <p className="mb-2 font-semibold">{plan.featuresTitle}</p>
              <ul className="text-sm text-gray-700 space-y-1">
                {plan.features.map((feature, i) => (
                  <li key={i}>✓ {feature}</li>
                ))}
              </ul>
            </div>
            <button
              className="mt-6 border cursor-pointer border-black py-2 px-4 hover:bg-black hover:text-white transition"
              onClick={handleContactClick}
            >
              Contact us
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlansSection;

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import buyerImage from './../../../assets/Product1/buyer-image.png'; // Replace with actual path
import sellerImage from './../../../assets/Product1/seller-image.png'; // Optional: add a different image for sellers

const buyerQuestions = [
  {
    question: 'Streamlined checkout',
    answer:
      'Swift checkout process to reduce the number of abandoned carts and ensure an effective sales funnel. The checkout module at Yo!Kart multi-vendor marketplace platform enables buyers to pick their preferences for shipping (Standard or express shipping) and delivery (Home delivery or pick up in-store).',
  },
  {
    question: 'Rewards & Discounts',
    answer:
      'Buyers receive personalized rewards and discounts to encourage repeat purchases and boost loyalty',
  },
  {
    question: 'Ratings & Reviews',
    answer:
      'Buyers can rate products and leave reviews which helps others in the decision-making process and builds credibility for sellers.',
  },
  {
    question: 'Smart Recommendations',
    answer:
      'Our AI engine recommends products based on buyer behavior and purchase history, helping in product discovery and increasing sales.',
  },
];

const sellerQuestions = [
  {
    question: 'Banner Advertisement',
    answer:
      'Sellers can create and manage banner advertisements to promote their products effectively.',

  },
  {
    question: 'Rewards & Discounts',
    answer:
      'Sellers can set up personalized rewards and discounts to encourage repeat purchases and boost loyalty.',
    
  },
  {
    question: 'Ratings & Reviews',
    answer:
      'Sellers can rate products and leave reviews which helps others in the decision-making process and builds credibility for buyers.',
   
  },
  {
    question: 'Smart Recommendations',
    answer:
      'Sellers benefit from AI-driven product suggestions to optimize listings and increase visibility to potential buyers.',
  },
];

const BuyerSellerFeatures = () => {
  const [activeTab, setActiveTab] = useState('buyer');
  const [openIndex, setOpenIndex] = useState(null);

  const questions = activeTab === 'buyer' ? buyerQuestions : sellerQuestions;
  const imageToShow = activeTab === 'buyer' ? buyerImage : sellerImage;

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className=" p-4 w-full max-w-[1280px] mx-auto text-black sm:px-6 md:px-10 py-12 sm:py-16">
      <div className="max-w-[1260px] mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-lufga text-[#000000]">
          Focused Buyer And Seller Features
        </h2>
        <p className="text-[#000000] mt-13 max-w-2xl mx-auto text-md md:text-lg">
          Compliment your eCommerce marketplace with tailor-made features that cover essential use cases for both of the user profiles.
        </p>

        <div className="bg-[#D1D1D1] md:text-lg text-sm font-semibold py-2 md:mt-15 mt-10 md:w-95 w-85 ml-2 md:ml-100 flex justify-center gap-4">
          <button
            onClick={() => {
              setActiveTab('buyer');
              setOpenIndex(null);
            }}
            className={`px-6 py-2 font-lufga   ${
              activeTab === 'buyer' ? 'bg-[#000000] text-[#FFFFFF]' : 'bg-[#D1D1D1] text-[#3E3E3E]'
            }`}
          >
            Buyer Features
          </button>
          <button
            onClick={() => {
              setActiveTab('seller');
              setOpenIndex(null);
            }}
            className={`px-6 py-2 font-lufga cursor-pointer   ${
              activeTab === 'seller' ? 'bg-[#000000] text-[#FFFFFF] cursor-pointer' : 'cursor-pointer bg-[#D1D1D1] text-[#3E3E3E]'
            }`}
          >
            Seller Features
          </button>
        </div>

        {/* Feature Content */}
        <div className="md:mt-25 mt-15 flex flex-col lg:flex-row gap-10 justify-between items-start">
          {/* Left Accordion Section */}
          <div className="w-full lg:w-1/2 space-y-4">
            {questions.map((item, index) => (
              <div key={index} className=" p-4  shadow-sm">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleOpen(index)}
                >
                  <h3 className="text-lg font-lufga text-[#000000]">{item.question}</h3>
                  {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
                {openIndex === index && (
                  <p className="mt-3 text-sm text-[#5D5D5D] text-left leading-relaxed">{item.answer}</p>
                )}
              </div>
            ))}
          </div>

          {/* Right Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src={imageToShow}
              alt={`${activeTab} features`}
              className="max-w-full h-auto object-contain"
              loading='lazy'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyerSellerFeatures;

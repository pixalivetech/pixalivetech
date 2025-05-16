import React from 'react';
import innovationImg from './../../assets/imgs/home/cardicon1.png';
import customerImg from './../../assets/imgs/home/cardicon2.png';
import scalableImg from './../../assets/imgs/home/cardicon3.png';

const CardsHome = () => {
  const cards = [
    {
      image: innovationImg,
      title: 'Innovation at the Core',
      description:
        'We continuously innovate to provide businesses with the most advanced technologies, helping them stay ahead in a rapidly evolving digital landscape.',
    },
    {
      image: customerImg,
      title: 'Customer Centric Excellence',
      description:
        'We focus on understanding our clients’ needs and crafting bespoke solutions that deliver real, measurable impact, ensuring maximum value from every partnership.',
    },
    {
      image: scalableImg,
      title: 'Scalable Success',
      description:
        'Our solutions are designed with scalability in mind, enabling businesses to grow seamlessly as they expand into new markets or increase their operational capacity.',
    },
  ];

  return (
    <div className="p-4 w-full max-w-[1280px] mx-auto text-black sm:px-6 md:px-10 py-1 sm:py-3">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className="group bg-white border border-[#5D5D5D]/20 rounded-md p-6 transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-2xl cursor-pointer hover:shadow-black/20 h-[355px]"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-10 h-10 mb-5 cursor-pointer transform transition-transform duration-300 ease-in-out group-hover:scale-125"
            />
            <h3 className="text-[24px] w-[220px] font-normal mb-2 mt-[50px]">
              {card.title}
            </h3>
            <p className="text-[16px] text-[#5D5D5D] mt-2">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsHome;

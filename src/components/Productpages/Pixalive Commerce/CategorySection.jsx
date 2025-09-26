import React from "react";
import img1 from "./../../../assets/Product1/11.jpg";
import img2 from "./../../../assets/Product1/22.jpg";
import img3 from "./../../../assets/Product1/33.png";
import img4 from "./../../../assets/Product1/44.jpg";
import img5 from "./../../../assets/Product1/55.jpg";
import img6 from "./../../../assets/Product1/66.jpg";
import img7 from "./../../../assets/Product1/77.jpg";
import img8 from "./../../../assets/Product1/88.jpg";
import img9 from "./../../../assets/Product1/99.jpg";
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    title: "Fashion",
    image: img1,
    description:
      "From global names to growing brands, fashion thrives on innovation and style. Pixalive Tech empowers you to build a dynamic fashion marketplace — tailored to trends, packed with features, and designed to elevate the shopping experience.",
  },
  {
    title: "Furniture",
    image: img2,
    description:
      "Inspired by IKEA’s innovation, Pixalive Tech crafts smart digital storefronts for artisans and businesses. Our solutions help you showcase products beautifully, manage inventory with ease, and create a smooth, engaging shopping experience.",
  },
  {
    title: "Electronics",
    image: img3,
    description:
      "With Pixalive Tech, build a dynamic online hub for gadget lovers — offering sleek product showcases, accurate inventory control, and smooth transactions. We help you launch an electronics marketplace as powerful as Newegg.",
  },
  {
    title: "Sports",
    image: img4,
    description:
      "Level up your sports retail game with Pixalive Tech’s tailored eCommerce solutions. We help you build dynamic, vendor-friendly platforms with responsive designs to showcase sports gear effortlessly and engage enthusiasts with ease.",
  },
  {
    title: "Liquor",
    image: img5,
    description:
      "Launch a secure, user-friendly liquor marketplace with Pixalive Tech. We build age-gated platforms that comply with industry regulations while delivering a smooth and engaging shopping experience like Vivino.",
  },
  {
    title: "Digital Products",
    image: img6,
    description:
      "At Pixalive Tech, we empower you to build digital product marketplaces like Yo!Kart, designed to meet modern demands. Seamlessly sell creative assets with secure transactions and smooth digital downloads, all backed by our robust platform.",
  },
  {
    title: "Jewelry",
    image: img7,
    description:
      "Leverage Pixalive Tech’s sleek platform to showcase your products with style. Our solution enables efficient inventory management, smooth seller-buyer interactions, and an outstanding shopping experience.",
  },
  {
    title: "Hand-made",
    image: img8,
    description:
      "Pixalive Tech provides solutions to build marketplaces for unique handmade goods, just like Etsy. Our platform helps artisans showcase their creations while giving buyers easy access to exclusive, one-of-a-kind items.",
  },
  {
    title: "Hardware",
    image: img9,
    description:
      "Pixalive Tech powers your hardware business with smart software that connects sellers and buyers effortlessly. Manage inventory, showcase products effectively, and offer a smooth shopping experience tailored for hardware pros and DIY enthusiasts alike.",
  },
];

const CategorySection = () => {
  return (
    <section className=" p-4 w-full max-w-[1280px] mx-auto text-black sm:px-6 md:px-10 py-12 sm:py-16">
      {/* Heading */}
      <div className="flex flex-col lg:flex-col justify-between text-[#000000] space-y-6">
          <h1 className="text-3xl md:text-5xl  font-lufga ">
          Pixalive Built for Every eCommerce Possibility
          </h1>
          <div className="grid grid-cols-1 md:ml-130 ml-0 text-lg md:grid-cols-2 md:mt-20 mt-4 md:gap-25 gap-6">
            <p>
            At Pixalive Tech, we deliver industry-specific multi-vendor eCommerce solutions tailored to your unique business requirements.
            </p>
            <p className='md:mt-0 mt-8'>
            Our goal is to empower you to stay competitive and grow in the ever-evolving digital marketplace.
            </p>
          </div>
        </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:mt-25 mt-8 md:grid-cols-3 gap-6">
        {categories.map((cat, idx) => (
          <div key={idx} className="group [perspective:1000px] relative h-64">
            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-xl">
              {/* Front Side */}
              <div className="absolute w-full h-full [backface-visibility:hidden] cursor-pointer">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover "
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 text-white  flex items-center justify-center text-2xl font-semibold">
                  {cat.title}
                </div>
              </div>

              {/* Back Side */}
              <div className="absolute w-full h-full text-black rounded-xl [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center items-center px-6 py-4 text-center overflow-y-auto">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{cat.title}</h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  {cat.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center md:mt-25 mt-2 ">
      <h1 className="text-2xl md:text-4xl font-lufga ">
        Discover All-in-One eCommerce with Pixalive
      </h1>

      </div>
      

      {/* CTA */}
       <div className="flex justify-center md:mt-15 mt-2 ">
        
          <button className="bg-[#000000] text-[#FFFFFF] cursor-pointer px-6 py-3 md:text-lg text-md font-lufga   flex items-center gap-2 hover:bg-gray-900 transition">
          Get Started <ArrowRight className="w-4 h-4" />
          </button>
        </div>
    </section>
  );
};

export default CategorySection;

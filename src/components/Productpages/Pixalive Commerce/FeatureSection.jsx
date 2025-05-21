import { motion } from "framer-motion";
import card1Logo from "./../../../assets/Product1/card1.png"; // Add your actual paths
import card2Logo from "./../../../assets/Product1/card2.png";
import card3Logo from "./../../../assets/Product1/card3.png";
import card4Logo from "./../../../assets/Product1/card4.png";
import card5Logo from "./../../../assets/Product1/card5.png";
import card6Logo from "./../../../assets/Product1/card6.png";
import card7Logo from "./../../../assets/Product1/card7.png";
import card8Logo from "./../../../assets/Product1/card8.png";

const features = [
  {
    logo: card1Logo,
    title: "Product Catalog System",
    desc: "To maintain the quality of product data and make it configurable for buyers and sellers, our multivendor eCommerce marketplace platform comes with a catalog system.",
  },
  {
    logo: card2Logo,
    title: "Multiple Payment Options",
    desc: "Every buyer has a preferred payment method which they use for the majority of online transactions. Enable your buyers to pay using their preferential payment mode with Yo!Kart's 20+ payment methods pre-integrated. The popular payment options include Stripe Connect, credit/debit card, Pay at Store, COD, and digital wallets.",
  },
  {
    logo: card3Logo,
    title: "Multilingual Functionality",
    desc: "Take your brand to the global market and provide a tailored online shopping experience with MSN language API integrated with our multivendor eCommerce platform.",
  },
  {
    logo: card4Logo,
    title: "Tax Management",
    desc: "Every buyer has a preferred payment method which they use for the majority of online transactions. Enable your buyers to pay using their preferential payment mode with Yo!Kart's 20+ payment methods pre-integrated. The popular payment options include Stripe Connect, credit/debit card, Pay at Store, COD, and digital wallets.",
  },
  {
    logo: card5Logo,
    title: "Abandoned Cart",
    desc: "This feature allows the admin to get reports of in-cart items abandoned by users and items deleted by the users. The reports generated can help the admin to strategize to recover the abandoned carts by sending discount coupons or reminders.",
  },
  {
    logo: card6Logo,
    title: "Analytics And Reporting",
    desc: "The Dashboard has analytical information and statistics for the admin to refer to for making any future decisions. To review the performance of the marketplace the admin can check the Sales report, visitors data, revenue information on the dashboard itself.",
  },
  {
    logo: card7Logo,
    title: "Shipping Management",
    desc: "Fetch live shipping rates, create shipping labels, and track shipments quickly with pre-integrated Shipstation and AfterShip APIs. Also, with our in-built shipping module, Admin/sellers can now define shipping packages categorizing products either as order level, item level shipping, or a combination of both.",
  },
  {
    logo: card8Logo,
    title: "Multiple Revenue Channels",
    desc: "The admin of a website can earn revenue from multiple sources such as commission, promotional banners, display featured products on the homepage, Pay-Per-Click (PPC ) advertisements, and subscription.",
  },
];

export default function AdminToolsSection() {
  return (
    <section className=" p-4 w-full max-w-[1280px] mx-auto text-black sm:px-6 md:px-10 py-12 sm:py-16">
      {/* Heading Section */}
      <div className="flex flex-col md:flex-row-1 md:mt-20 mt-0 justify-between items-start md:items-start mb-12 ">
        <h2 className="text-3xl md:text-5xl  font-lufga text-[#000000]">
        Robust Admin Tools for Smarter eCommerce Operations
        </h2>
        <p className="text-md md:text-lg max-w-md md:mt-25 mt-7 md:ml-180 ml-0  text-[#000000]">
        At Pixalive Tech, our eCommerce marketplace solutions are built with your business goals in mind. We equip you with a comprehensive set of features to help you run your multi-vendor platform smoothly, so you can stay focused on growth and market success.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 font-lufga md:grid-cols-2  gap-15">
        {features.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="border border-gray-100 p-6 bg-white shadow-sm hover:shadow-md transition md:w-140 w-full h-90 md:h-90 aspect-square flex flex-col justify-start"

          >
            <img src={item.logo} alt={item.title} className="md:w-20 w-15 md:h-20 h-15 mb-4" />
            <h3 className="md:text-xl text-lg font-lufga md:mt-2 mt-0 text-[#000000]">{item.title}</h3>
            <p className="text-[#6D6D6D] md:mt-4 mt-2 text-md md:text-lg">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
import React from "react";

// Icon imports (replace these paths with the actual ones)
import cmsIcon from './../../../assets/Product/icon4.3.png';
import dataIcon from './../../../assets/Product/icon4.4.png';
import liveIcon from './../../../assets/Product/icon4.5.png';

const PixaliveAdvantage = () => {
  return (
    <section className="p-4 w-full max-w-[1280px] mx-auto sm:px-6 md:px-10 py-12 sm:py-16 text-black text-center">
      <h2 className="text-3xl md:text-4xl font-semibold mb-12">
        The Pixalive Advantage
      </h2>

      <div className="grid md:grid-cols-3 gap-8 text-left">
        {/* Card 1 */}
        <div className="border border-gray-300 p-6 hover:shadow-lg transition">
          <img src={cmsIcon} alt="CMS Icon" className="w-10 h-10 mb-4" />
          <h4 className="font-semibold text-lg mt-10 mb-2">All-in-One CMS</h4>
          <p className="text-sm text-gray-700">
            Effortlessly manage your live shopping videos and inventories through an intuitive, all-in-one content system.
          </p>
        </div>

        {/* Card 2 */}
       <div className="border border-gray-300 p-6 hover:shadow-lg transition">
          <img src={dataIcon} alt="Data Ownership Icon" className="w-10 h-10 mb-4" />
          <h4 className="font-semibold text-lg mt-10 mb-2">Full Data Ownership</h4>
          <p className="text-sm text-gray-700">
            Maintain complete control over your livestream and audience data—your insights, your rules.
          </p>
        </div>

        {/* Card 3 */}
        <div className="border border-gray-300 p-6 hover:shadow-lg transition">
          <img src={liveIcon} alt="Live Video Icon" className="w-10 h-10 mb-4" />
          <h4 className="font-semibold text-lg mt-10 mb-2">Tailored Live Video Solutions</h4>
          <p className="text-sm text-gray-700">
            Have a custom feature in mind? We're ready to bring your unique vision to life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PixaliveAdvantage;

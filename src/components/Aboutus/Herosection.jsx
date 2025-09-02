import React from 'react';
import G1 from './../../assets/Aboutus/G1.jpg'
import G2 from './../../assets/Aboutus/G2.png'
import G3 from './../../assets/Aboutus/G3.jpg'
import G4 from './../../assets/Aboutus/G4.jpg'
import G5 from './../../assets/Aboutus/G5.jpg'
import G6 from './../../assets/Aboutus/G6.jpg'

const CultureSection = () => {
  return (
    <div className="max-w-[1280px] mx-auto py-16 px-4 md:px-20">
      {/* Top Text Section */}
      <div className="md:flex md:justify-between md:items-start mb-10">
        <h4 className="text-sm text-gray-500 mb-2 md:mb-0 md:mr-6">Our Culture</h4>
        <p className="text-xl font-semibold text-gray-800 md:max-w-3xl">
          At Pixla Technology Services, culture is the heartbeat of everything we do.
          We are not just a team—we are a tribe of dreamers, doers, and disruptors who believe
          that innovation begins with people, not just products.
        </p>
      </div>

     {/* Image Grid Section */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  {/* Column 1 */}
  <div className="space-y-4">
    <img src={G1} alt="Culture 1" className="object-cover w-full h-80" loading='lazy' />
    <img src={G2} alt="Culture 2" className="object-cover w-full h-50" loading='lazy' />
  </div>
  {/* Column 2 */}
  <div className="space-y-4">
    <img src={G3} alt="Culture 3" className="object-cover w-full h-50" loading='lazy' />
    <img src={G4} alt="Culture 4" className="object-cover w-full h-80" loading='lazy' />
  </div>
  {/* Column 3 */}
  <div className="space-y-4">
    <img src={G5} alt="Culture 5" className="object-cover w-full h-80" loading='lazy' />
    <img src={G6} alt="Culture 6" className="object-cover w-full h-50" loading='lazy' />
  </div>
</div>

    </div>
  );
};

export default CultureSection;

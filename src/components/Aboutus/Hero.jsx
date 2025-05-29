import React from 'react';

const VisionMissionGoal = () => {
  return (
    <div className="max-w-[1280px] mx-auto py-16 px-4 md:px-20">
      <div className="max-w-[1280px] grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Vision */}
        <div className="space-y-4">
          <h2 className="text-4xl font-bold">50+</h2>
          <p className="text-gray-700 font-medium">innovative solutions launched</p>
          <div>
            <h3 className="font-semibold text-gray-900">Our Vision</h3>
            <p className="text-gray-600 text-sm">
              To become one of the most trusted global tech enablers—where ideas are transformed into disruptive digital experiences.
            </p>
          </div>
        </div>

        {/* Mission */}
        <div className="space-y-4 border-t md:border-t-0 md:border-l md:border-r border-gray-200 px-4 md:px-8">
          <h2 className="text-4xl font-bold">95%</h2>
          <p className="text-gray-700 font-medium">client satisfaction rate</p>
          <div>
            <h3 className="font-semibold text-gray-900">Our Mission</h3>
            <p className="text-gray-600 text-sm">
              At Pixalive Technology Services, our mission is to revolutionize the digital landscape by delivering intelligent, future-ready solutions that solve real-world challenges.
            </p>
          </div>
        </div>

        {/* Goal */}
        <div className="space-y-4">
          <h2 className="text-4xl font-bold">100+</h2>
          <p className="text-gray-700 font-medium">cutting-edge projects delivered</p>
          <div>
            <h3 className="font-semibold text-gray-900">Our Goal</h3>
            <p className="text-gray-600 text-sm">
              We aim to deliver 100+ cutting-edge projects by 2026, expand our presence in global markets, and build a robust ecosystem of products, partners, and platforms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMissionGoal;

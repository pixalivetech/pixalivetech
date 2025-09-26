import React from "react";
import A1 from './../../../assets/Product/image 204.png';
import A2 from './../../../assets/Product/image 205.png';
import A3 from './../../../assets/Product/image 206.png';
import A4 from './../../../assets/Product/image 207.png';
import A5 from './../../../assets/Product/image 208.png';
import A6 from './../../../assets/Product/image 209.png';

const icons = [A1, A2, A3, A4, A5, A6];

const features = [
  {
    title: "CRM & Lead Management",
    desc: "Track prospects, manage contacts, and close deals efficiently.",
  },
  {
    title: "Sales Funnels & Automation",
    desc: "Create email/SMS/WhatsApp campaigns and sales funnels in minutes.",
  },
  {
    title: "Client Portals & Invoicing",
    desc: "Centralized client dashboards, branded invoices, and payment tracking.",
  },
  {
    title: "Analytics & Dashboard",
    desc: "Real-time insights into sales, customer engagement, and ROI.",
  },
  {
    title: "Team & Task Management",
    desc: "Assign roles, manage deadlines, and collaborate easily with your team.",
  },
  {
    title: "Integrations",
    desc: "Connected to Pixalive Ads, Works, and Filings for a complete business ecosystem.",
  },
];

const FeatureGrid = () => {
  return (
    <div className="p-4 w-full max-w-[1280px] mx-auto text-black sm:px-6 md:px-10 py-12 sm:py-16">
      <h2 className="text-3xl font-semibold mb-10">Key Features</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="border border-gray-200 shadow-sm p-6 hover:shadow-md transition duration-200 rounded-md"
          >
            <img src={icons[index]} alt={feature.title} className="w-10 h-10 mb-4" />
            <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureGrid;

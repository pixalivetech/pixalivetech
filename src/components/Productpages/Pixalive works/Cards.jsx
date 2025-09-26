import React from "react";
import A1 from './../../../assets/Product/A1.png';
import A2 from './../../../assets/Product/A2.png';
import A3 from './../../../assets/Product/A3.png';
import A4 from './../../../assets/Product/A4.png';
import A5 from './../../../assets/Product/A5.png';
import A6 from './../../../assets/Product/A6.png';
import A7 from './../../../assets/Product/A7.png';
import A8 from './../../../assets/Product/A8.png';
import A9 from './../../../assets/Product/A9.png';
import A10 from './../../../assets/Product/A10.png';
import A11 from './../../../assets/Product/A11.png';
import A12 from './../../../assets/Product/A12.png';
import A13 from './../../../assets/Product/A13.png';
import A14 from './../../../assets/Product/A14.png';
import A15 from './../../../assets/Product/A15.png';
import A16 from './../../../assets/Product/A16.png';
import A17 from './../../../assets/Product/A17.png';
import A18 from './../../../assets/Product/A18.png';
import A19 from './../../../assets/Product/A19.png';
import A20 from './../../../assets/Product/A20.png';
import A21 from './../../../assets/Product/A21.png';
import A22 from './../../../assets/Product/A22.png';
import A23 from './../../../assets/Product/A23.png';


const icons = [
  A1, A2, A3, A4, A5, A6, A7, A8, A9, A10,
  A11, A12, A13, A14,  A16, A17, A18, A19, A20,
  A21, A22, A23,A15,
];

const features = [
  {
    title: "Funnel Builder",
    desc: "Build high-converting sales funnels from 100's of futuristic templates with advanced analytics to maximize your conversions.",
    icon: "/icons/funnel.png",
  },
  {
    title: "Shop Builder",
    desc: "Build fully-featured online shop with unlimited listing, multiple CTA’s and payment processing.",
    icon: "/icons/shop.png",
  },
  {
    title: "Form Builder",
    desc: "Create custom forms and surveys with conditional logic, file uploads, and integrated payment collection.",
    icon: "/icons/form.png",
  },
  {
    title: "Website Builder",
    desc: "Build professional websites with drag-and-drop simplicity, responsive design, and built-in SEO optimization."
  },
  {
    title: "Learning Management System",
    desc: "Deliver courses, track progress, and engage students with interactive content and assessments."
  },
  {
    title: "CRM",
    desc: "Manage customer relationships, track interactions, and automate follow-ups to nurture leads and clients."
  },
  {
    title: "Email Marketing",
    desc: "Design email campaigns, automate sequences, and analyze performance with detailed analytics."
  },
  {
    title: "WhatsApp Sender",
    desc: "Send messages, personalized templates, and track delivery and engagement metrics."
  },
  {
    title: "WhatsApp Group & Community",
    desc: "Schedule and manage WhatsApp groups with automated messaging, member management, and content distribution."
  },
  {
    title: "Unified Inbox",
    desc: "Manage all communications (emails, WhatsApp, WABA) from a single interface with team collaboration tools."
  },
  {
    title: "WhatsApp Official",
    desc: "Connect through the official WhatsApp Business API with verified business profile and advanced automation."
  },
  {
    title: "SMS Marketing",
    desc: "Send targeted SMS campaigns, automated sequences, and track deliverability and response rates."
  },
  
  {
    title: "Automation Workflow",
    desc: "Create complex automation sequences across multiple channels with triggers, conditions, and actions."
  },
  {
    title: "Sales and Finance",
    desc: "Track revenue, manage invoices, and generate financial reports with tax compliance features."
  },
  {
    title: "Private Social Network",
    desc: "Build branded social communities with content moderation, member profiles, and engagement tools."
  },
  {
    title: "Student Portal",
    desc: "Provide students with a dedicated interface for courses, assignments, grades, and communication."
  },
  {
    title: "Custom Branded Domain",
    desc: "Deploy all services under custom domains with complete branding customization for client-facing interfaces."
  },
  {
    title: "Mobile App (iOS & Android)",
    desc: "Convert web applications to native mobile apps for iOS and Android with push notifications."
  },


  {
    title: "Student Portal",
    desc: "Provide students with a dedicated interface for courses, assignments, grades, and communication."
  },
  {
    title: "Custom Branded Domain",
    desc: "Deploy all services under custom domains with complete branding customization for a client-facing interfaces."
  },
  {
    title: "Mobile App (iOS & Android)",
    desc: "Convert web applications to native mobile apps for iOS and Android with push notifications."
  },
  {
    title: "IVR Calling",
    desc: "Set up interactive voice response systems with call routing, recording, and integration with CRM."
  },
  {
    title: "AI Automation",
    desc: "Leverage futuristic AI features to automate customer interactions, content creation, and business processes."
  }

];

const FeatureGrid = () => {
  return (
    <div className="p-4 w-full max-w-[1280px] mx-auto text-black sm:px-6 md:px-10 py-12 sm:py-16">
      <h2 className="text-3xl font-regular mb-10">The Future-Proof Pixalive Platform</h2>

      <p className="font-regular mb-10">
        Sell AI Powered All-in-one marketing & sales system under your<br />
        brand and keep 100% of the recurring revenue.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="border border-gray-200 shadow-sm p-5 hover:shadow-md transition duration-200"
          >
            <img src={icons[index]} alt={feature.title} className="w-10 h-10 mb-15" />
            <h3 className="text-lg font-regular mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureGrid;

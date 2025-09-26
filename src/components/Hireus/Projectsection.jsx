import TopLeftImage from "./../../assets/imgs/Hireus/top-left-image.png";
import BottomRightImage from "./../../assets/imgs/Hireus/bottom-right-image.png";

const SolutionsSection = () => {
  return (
    <section className=" text-[#000000]   mt-10 py-12 space-y-0 ">
      {/* Header */}
      <div className="text-center md:text-left max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-normal leading-[160%]">
          Tailored Solutions for Startups<br />& Enterprises
        </h2>
      </div>

      {/* Startups Section */}
      <div className="flex flex-col md:flex-row gap-0 mt-18 max-w-6xl mx-auto">
        <div className="md:w-1/2">
          <img
            src={TopLeftImage}
            alt="Team working"
            className=" w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="md:w-1/2 space-y-4  md:px-2 px-1 py-3 border-1 border-[#E7E7E7]  ">
          <h3 className="text-xl text-[#000000] font-normal">For Startups</h3>
          <p className="text-md text-[#000000]">
            At Pixalive Technology Services, we understand that startups need
            agility, speed, and precision. That’s why we specialize in
            transforming your vision into reality with our <strong>MVP Development Approach</strong>,
            designed to deliver immediate results and sustainable growth.
          </p>
          <p className="text-md leading-[280%] font-normal">With our expertise, startups can:</p>
          <ul className="list-disc pl-7 leading-[210%]  space-y-2 text-md">
            <li><light className="text-[#000000]">Accelerate Product Launch</light><light className="text-[#6B6969]"> without sacrificing quality, bringing your solution to market faster</light></li>
            <li><light  className="text-[#000000]">Validate Ideas</light> <light className="text-[#6B6969]"> in the Real World, testing core features directly with your target audience for valuable feedback</light></li>
            <li><light  className="text-[#000000]">Leverage Live Data</light> <light className="text-[#6B6969]">from users, providing insights to refine your product and stay ahead of the competition</light></li>
            <li><light   className="text-[#000000]">Maximize Cost Efficiency</light> <light className="text-[#6B6969]">by focusing on essential features that create the most value with your MVP</light></li>
            <li><light  className="text-[#000000]">Streamline Development</light> <light className="text-[#6B6969]">with strategic sprints, ensuring you meet milestones on time and within budget, without surprises</light></li>
          </ul>
          <p className="text-md text-[#000000]">
            We empower startups to scale quickly, iterate with purpose, and succeed with data-backed precision.
          </p>
        </div>
      </div>

      {/* Enterprises Section */}
      <div className="flex flex-col-reverse md:flex-row gap-0 border-1 border-[#E7E7E7]   max-w-6xl mx-auto">
        <div className="md:w-1/2 px-1 md:px-2 py-3 space-y-4 ">
          <h3 className="text-xl text-[#000000] mt-4 font-normal">For Enterprises</h3>
          <p className="text-md text-[#000000]">
            As a trusted partner for enterprises, Pixalive Technology Services delivers enterprise-grade SaaS solutions that optimize your operations, enhance user engagement, and drive business outcomes.
            Our tailored approach focuses on long-term growth, ensuring that your enterprise stays at the forefront of innovation.
          </p>
          <p className="text-md leading-[280%] font-normal">Here’s how we create value for you:</p>
          <ul className="list-disc pl-7 leading-[210%] text-[]space-y-2 text-md">
            <li><light  className="text-[#000000]">Scalable Cloud Infrastructure</light >,<light className="text-[#6B6969]"> enabling seamless expansion without the limitations of storage and service constraints</light></li>
            <li><light  className="text-[#000000]">User-Focused Applications</light > <light className="text-[#6B6969]"> that streamline processes and elevate customer satisfaction, driving both growth and profitability</light></li>
            <li><light className="text-[#000000]">Data-Driven Insights & Analytics</light >, <light className="text-[#6B6969]">providing powerful visualizations to inform strategic business decisions with accuracy</light></li>
            <li><light  className="text-[#000000]">End-to-End DevOps Support</light>,<light className="text-[#6B6969]"> optimizing time, cost, and effort across your workflows to ensure operational efficiency and reduced overhead</light></li>
          </ul>
          <p className="text-md text-[#000000]">
            With Pixalive, enterprises not only stay competitive—they lead the charge in digital transformation, innovation, and excellence.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src={BottomRightImage}
            alt="Business meeting"
            className="w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;

import React from "react";

import Ceo from "./../../assets/Aboutus/rajasekar.png";
import Satishkumar from "./../../assets/Aboutus/satish.png";
import Murugan from "./../../assets/Aboutus/murugan.png";
import Mohan from "./../../assets/Aboutus/mohan.png";
import Sivakumar from "./../../assets/Aboutus/sivakumar.png";
import Mayakannan from "./../../assets/Aboutus/mayakannan.png";
import Vijay from "./../../assets/Aboutus/vijay.png";
import Somanathan from "./../../assets/Aboutus/somu.png";
import Kesavan from "./../../assets/Aboutus/kesavan.png";
import Kathirvel from "./../../assets/Aboutus/kathir.png";
import Dhivinkumar from "./../../assets/Aboutus/dhivin.png";
import BharathKumar from "./../../assets/Aboutus/bharath.png";
import PavanKumar from "./../../assets/Aboutus/pawan.png";
import Kaaviyan from "./../../assets/Aboutus/kaaviyan.png";

const team = [
  { name: "Rajasekar Sundaresan", role: "CEO & Founder", image: Ceo, alt: "Rajasekar Sundaresan" },
  { name: "Satishkumar", role: "Chief Product Officer", image: Satishkumar, alt: "Satishkumar" },
  null,
  { name: "Murugan", role: "Lead Product Engineer", image: Murugan, alt: "Murugan" },
  null,
  { name: "Mohan", role: "Senior Backend Developer", image: Mohan, alt: "Mohan" },
  { name: "Sivakumar", role: "Senior Full Stack Developer", image: Sivakumar, alt: "Sivakumar" },
  { name: "Pavan Kumar B", role: "Senior Backend Developer", image: PavanKumar, alt: "Pavankumar" },
  { name: "Vijay K", role: "Front end Developer", image: Vijay, alt: "Vijay" },
  null,
  { name: "Somanathan", role: "UI/UX Designer", image: Somanathan, alt: "Somanathan" },
  { name: "Kesavan", role: "UI/UX Designer", image: Kesavan, alt: "Kesavan" },
  { name: "Kathirvel", role: "Software Developer", image: Kathirvel, alt: "Kathirvel" },
  { name: "Dhivinkumar", role: "Software Developer", image: Dhivinkumar, alt: "Dhivinkumar" },
  { name: "Mayakannan", role: "Software Developer", image: Mayakannan, alt: "Mayakannan" },
  null,
  { name: "Bharath Kumar", role: "Software Developer", image: BharathKumar, alt: "Bharath Kumar" },
  { name: "Kaaviyan", role: "Senior Backend Developer", image: Kaaviyan, alt: "Kaaviyan" },
  null,
  { name: "?", role: "", image: "", alt: "" },
];

const TeamSection = () => {
  return (
    <div className="px-4 sm:px-6 md:px-10 py-12 sm:py-16 w-full max-w-[1280px] mx-auto text-black">

      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-16 px-4 md:px-10">
        <div className="col-span-12 md:col-span-3 flex justify-center md:justify-start">
          <h4 className="text-sm text-gray-500 text-center md:text-left">Our Team</h4>
        </div>
        <div className="col-span-12 md:col-span-9">
          <p className="text-2xl sm:text-3xl font-semibold text-black text-center md:text-left">
            We’re a diverse team of 30+ developers, designers, and thinkers building meaningful digital experiences together.
          </p>
        </div>
      </div>

      {/* Team Grid Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 mb-20">
        {team.map((member, index) => (
          <div key={index} className="w-full flex flex-col items-center">
            {member ? (
              <>
                <div className="w-40 h-52 bg-gray-300 mb-3 overflow-hidden flex items-center justify-center shadow">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.alt}
                      loading="lazy"
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <span className="text-4xl text-white">?</span>
                  )}
                </div>
                {member.name && (
                  <>
                    <p className="text-black text-[16px] font-medium text-center">{member.name}</p>
                    <p className="text-[14px] text-[#5D5D5D] text-center">{member.role}</p>
                  </>
                )}
              </>
            ) : (
              <div className="w-40 h-52" />
            )}
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-4 md:px-10">
        <div className="col-span-12 md:col-span-3 flex justify-center md:justify-start">
          <p className="text-sm font-medium text-gray-800 text-center md:text-left">Join Our Team</p>
        </div>
        <div className="col-span-12 md:col-span-9 text-center md:text-left">
          <p className="text-2xl sm:text-4xl font-semibold text-black mb-6 leading-snug">
            Be part of a fast-growing tech company where ideas turn into impact. Let’s build the future, together.
          </p>
          <a
            href="/contact"
            className="text-lg font-medium text-black underline underline-offset-4 transition"
          >
            Be a Part of Our Team ↗
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;

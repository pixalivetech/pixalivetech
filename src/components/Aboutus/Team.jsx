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
    <div className=" p-4 w-full max-w-[1280px] mx-auto text-black sm:px-6 md:px-10 py-12 sm:py-16">
      <h2 className="text-2xl md:text-3xl font-normal mb-12">Teams</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
        {team.map((member, index) => (
          <div key={index} className="w-full flex flex-col items-center">
            {member ? (
              <>
                <div className="w-40 h-52 bg-gray-300  mb-3 overflow-hidden flex items-center justify-center">
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
                    <p className="text-[black] text-[16px] font-medium text-center">{member.name}</p>
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

      <div className="mt-20 flex justify-center">

        <a
          href="/contact"
          className="text-4xl  font-bold text-black underline underline-offset-4"
        >
          Join Our Team
        </a>
      </div>
    </div>
  );
};

export default TeamSection;
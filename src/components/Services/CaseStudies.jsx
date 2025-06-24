import pixalive from '../../assets/imgs/services/pixalive.jpg';
import wowlife from '../../assets/imgs/services/wowlife.png';
import krishivan from '../../assets/imgs/services/krishvan.jpg';
import chaimug from '../../assets/imgs/services/chaimug.png';



const CaseStudies = () => {
  return (
    <section className="px-4 md:px-10 py-16 text-black max-w-[1280px] mx-auto">
      <h2 className="text-4xl font-normal mb-10">
           Case Studies<sup className="text-xs align-top">(04)</sup>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Featured Card */}
        <div className="md:col-span-3 max-w-128 border border-gray-400 p-4">
          <img src={pixalive} alt="Pixalive Network" className="h-40  mx-auto mb-4 loading-lazy" />
          <h3 className="text-lg font-normal mb-2">Pixalive Network</h3>
          <p className="text-sm text-black">
            Pixalive Network is India’s first integrated digital ecosystem, combining social networking, gold-backed investment, 
            and smart shopping—all in one platform. Built on trust, transparency, and technology, it empowers users to connect, 
            grow wealth, and explore opportunities in a single, seamless experience.
          </p>
        </div>

        {/* 3 Smaller Cards */}
        <div className=" border border-gray-400 p-4">
          <img src={wowlife} alt="Wowlife Coliving" className="h-60 mx-auto mb-4 loading-lazy" />
          <h3 className="text-lg font-normal mb-2">Wowlife Coliving</h3>
          <p className="text-sm text-black">
            Wowlife Coliving offers fully furnished, community-driven living spaces in Chennai, tailored for students, professionals, and couples.
            With modern amenities like Wi-Fi, housekeeping, meals, and vibrant social vibes, we ensure a hassle-free and enriching living experience.
          </p>
        </div>

        <div className="border border-gray-400 p-4  ">
          <img src={krishivan} alt="Krishivan Technologies" className="h-60 mx-auto mb-4 loading-lazy" />
          <h3 className="text-lg font-normal mb-2">Krishivan Technologies</h3>
          <p className="text-sm text-black">
            Krishivan Technologies is an innovative startup dedicated to transforming agriculture through advanced methods, technologies, and services.
            From developing cutting-edge implementations to offering hiring, lending, and supply solutions, we empower modern farming.
          </p>
        </div>

        <div className="border border-gray-400 p-4">
          <img src={chaimug} alt="Chaimug" className="h-60 mx-auto mb-4 loading-lazy" />
          <h3 className="text-[22px] font-normal mb-2">Chaimug</h3>
          <p className="text-[16px] text-black">
            Chaimug is a one-of-a-kind social platform that replicates the offline chai shop experience—where you can order tea,
            read the news, share gossip, and connect with others over casual, meaningful conversations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

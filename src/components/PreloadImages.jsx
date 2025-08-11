import { useEffect } from "react";
import homeImage from "../assets/imgs/home/homebg.png";
import feabg from "../assets/Features/feabg.png";
import hirebg from "../assets/imgs/Hireus/hirebg.png";
import aboutbg from "../assets/Aboutus/aboutbg.jpg";

const preloadImages = [homeImage, feabg, hirebg, aboutbg];

const PreloadImages = () => {
  useEffect(() => {
    preloadImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);
  return null;
};

export default PreloadImages;

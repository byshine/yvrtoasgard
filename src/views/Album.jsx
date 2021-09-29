import React from "react";
import vancouverOne from "../assets/vancouver-1-opt-medium.jpg";
import Masonry from "react-masonry-css";
import "../assets/styles/masonry.css";
import vancouverLarge_1 from "../assets/vancouver/large-1.jpg";
import vancouverLarge_2 from "../assets/vancouver/large-2.jpg";
import vancouverLarge_3 from "../assets/vancouver/large-3.jpg";
import vancouverLarge_4 from "../assets/vancouver/large-4.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Lightbox from "../components/Lightbox";
const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 2,
  500: 1,
};

function Album() {
  return (
    <div className="p-7 md:p-20 h-screen">
      <h1 className="text-yellow-500 mt-10 text-center text-4xl tracking-widest">
        Exhibition
      </h1>
      <p className="text-center text-white text-opacity-70 mt-2 tracking-wider ">
        2021
      </p>
      <p className="text-white text-center mt-5 font-sans text-opacity-80 tracking-wider">
        Coming soon.
      </p>
    </div>
  );
}

export default Album;

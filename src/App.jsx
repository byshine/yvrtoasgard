import React from "react";
import "./App.css";
import mainVideo from "./assets/yvrtoasgard.mp4";
import ChevronDoubleDown from "./components/icons/ChevronDoubleDown";
import { RiInstagramLine } from "react-icons/ri";
import TeamSection from "./components/TeamSection";

function App() {
  return (
    <div>
      <div className="fixed top-0 left-0 right-0  h-[60px] flex items-center px-5 py-2 bg-opacity-10 z-10 justify-between">
        <div className="text-lg font-serif text-yellow-400 font-semibold tracking-widest">
          yvrtoasgard
        </div>
        <ul className="flex items-center">
          <li className="mx-2 text-white tracking-widest font-light cursor-pointer hover:text-yellow-400">
            Team
          </li>
          <li className="mx-2 bg-white w-[1px] h-4 bg-opacity-70"></li>
          <li className="mx-2 text-white tracking-widest font-light cursor-pointer hover:text-yellow-400">
            Highlights
          </li>
          <li className="mx-2 bg-white w-[1px] h-4 bg-opacity-70"></li>
          <li className="mx-2">
            <a href="https://instagram.com/yvrtoasgard">
              <RiInstagramLine className="w-6 h-6 text-white opacity-70 hover:text-yellow-400" />
            </a>
          </li>
        </ul>
      </div>
      <section className="h-screen w-full relative">
        <video
          className="object-cover w-full h-full"
          src={mainVideo}
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <div className="absolute inset-0 w-full h-full z-30 box-shadow-inset"></div>
        <div className="absolute inset-0 flex justify-center items-center z-5 w-full h-full z-40">
          <div className="">
            <h1 className="text-6xl text-yellow-400 uppercase font-bold tracking-widest">
              yvrtoasgard
            </h1>
            <p className="text-white text-lg mt-2 tracking-widest">
              Offering you a perspective from a collective group of like minded
              companions
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center z-40">
          <div className="mb-5 flex justify-center">
            <div className="flex justify-center flex-col items-center">
              <ChevronDoubleDown className="w-4 h-4 text-white"></ChevronDoubleDown>
              <p className="text-2xs mt-2 text-white font-bold tracking-widest text-opacity-50 uppercase">
                Scroll Down
              </p>
            </div>
          </div>
        </div>
      </section>
      <div>
        <TeamSection />
      </div>
    </div>
  );
}

export default App;

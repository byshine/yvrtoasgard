import React, { useEffect, useRef } from "react";
import "./App.css";
import mainVideo from "./assets/yvrtoasgard.mp4";
import ChevronDoubleDown from "./components/icons/ChevronDoubleDown";
import { RiInstagramLine } from "react-icons/ri";
import TeamSection from "./components/TeamSection";
import JoinSection from "./components/JoinSection";
import vintage from "./assets/vintage-2.jpeg";
import { useSelector } from "react-redux";
import "hammerjs";

function MainFooter() {
  return (
    <div className="w-full">
      <footer className="p-2">
        <div className="text-right font-sans text-2xs text-white opacity-80 relative">
          <span className="relative top-[1px] inline-block mr-1">&#169;</span>
          <span className="">yvrtoasgard</span> 2021
        </div>
      </footer>
    </div>
  );
}

function ScrollDown() {
  return (
    <div className="text-white">
      <div className="w-4 h-4 mx-auto opacity-75">
        <ChevronDoubleDown></ChevronDoubleDown>
      </div>
      <div className="font-sans font-normal text-2xs uppercase text-opacity-75 mt-2 tracking-wider">
        Scroll Down
      </div>
    </div>
  );
}

function App() {
  const page = useSelector((state) => state.page);
  let app = useRef();

  function isBottom() {
    return (
      document.documentElement.scrollHeight -
        document.documentElement.scrollTop ===
      document.documentElement.clientHeight
    );
  }

  function hasScrollBar() {
    return window.innerWidth > document.body.clientWidth;
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log("Scroll Event");
      if (isBottom()) {
        console.log("bottom");
      }
    });

    window.addEventListener("wheel", () => {
      console.log("Wheel event", isBottom());
    });
  }, []);

  useEffect(() => {
    console.log("App", document.documentElement);
    var mc = new Hammer.Manager(app.current);
    // create a recognizer
    var SwipeUp = new Hammer.Swipe({
      direction: Hammer.DIRECTIION_DOWN,
    });
    // add the recognizer
    mc.add(SwipeUp);
    // subscribe to events
    mc.on("swipeup", function (e) {
      console.log("Swipe uped");
    });

    mc.on("swipedown", function (e) {
      console.log("Swipe downeded");
    });
    console.log("Mc", mc);
  }, []);

  return (
    <div ref={app}>
      <div className="h-screen bg-[#2b2b2b] flex items-center">
        <div className="absolute top-0 right-0 left-0 z-30 h-[50px]">
          <div className="flex justify-end p-5 text-white text-2xl opacity-60">
            <RiInstagramLine></RiInstagramLine>
          </div>
        </div>
        <div className="pl-5 absolute inset-0 w-full h-full flex items-center z-10">
          <div>
            <h1 className="text-yellow-500 tracking-widest font-extralight text-4xl uppercase font-sans">
              yvrtoasgard
            </h1>
            <p className="text-gray-100 text-sm mt-3 tracking-wider font-sans">
              Perspective from a collective group of nomads
            </p>
            <p className="tracking-widest text-white tracking-widest text-2xs mt-5 text-opacity-70">
              NEVER STOP DREAMING
            </p>
            <hr className="border-white mt-4 w-5 opacity-80" />

            <ul className="text-white font-sans text-sm mt-5">
              <li className="font-sans mt-1 text-xs tracking-wider">
                South Korea
              </li>
              <li className="font-sans mt-1 text-xs tracking-wider">
                New Zealand
              </li>
            </ul>
          </div>
        </div>
        <div className="absolute -z-0 left-1/4">
          <img
            src={vintage}
            className="max-w-lg  transform -rotate-12 opacity-60 rounded-md"
          />
        </div>
      </div>
      <div>
        <div className="right-0 bottom-0 top-0 z-40 absolute flex items-center pr-3">
          <div>
            <div className="w-2 h-2 rounded-full border-white border border-opacity-100 mt-2 bg-white"></div>
            <div className="w-2 h-2 rounded-full border-white border border-opacity-50 mt-2"></div>
            <div className="w-2 h-2 rounded-full border-white border border-opacity-50 mt-2"></div>
            <div className="w-2 h-2 rounded-full border-white border border-opacity-50 mt-2"></div>
            <div className="w-2 h-2 rounded-full border-white border border-opacity-50 mt-2"></div>
            <div className="w-2 h-2 rounded-full border-white border border-opacity-50 mt-2"></div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[40px] left-0 right-0 text-center">
        <div className="animate-bounce ">
          <ScrollDown />
        </div>
      </div>
      <div className="absolute left-0 bottom-0 right-0 z-50">
        <MainFooter></MainFooter>
      </div>
    </div>
  );
}

export default App;

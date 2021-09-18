import React from "react";
import "./App.css";
import mainVideo from "./assets/yvrtoasgard.mp4";

function App() {
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 bg-black h-[60px] flex items-center px-5 py-2 bg-opacity-10 z-10">
        <div className="text-md font-serif text-yellow-400 font-semibold tracking-widest">
          yvrtoasgard
        </div>
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
        <div className="absolute inset-0 flex justify-center items-center z-5 w-full h-full">
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
      </section>
    </div>
  );
}

export default App;

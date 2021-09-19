import React from "react";
import Aaron from "../assets/portrait.jpg";
function Member(props) {
  return (
    <div className="flex flex-col justify-center items-center" {...props}>
      <img src={Aaron} alt="Aaron" className="rounded-full max-w-xs" />
      <p className="mt-10">
        <h4 className="text-yellow-400 tracking-widest font-semibold text-center text-2xl">
          Aaron
        </h4>
        <p className="text-white font-normal tracking-normal text-lg text-center text-2xl">
          <span className="tracking-widest font-bold">Seoul</span>
        </p>
      </p>
    </div>
  );
}

function TeamSection() {
  return (
    <div className="bg-black p-44">
      <div>
        <h2 className="text-yellow-400 uppercase text-center font-bold tracking-widest text-4xl">
          The Team
        </h2>
        <div className="mt-40">
          <Member />
        </div>
      </div>
    </div>
  );
}

export default TeamSection;

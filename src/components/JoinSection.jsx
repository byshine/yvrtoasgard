import React from "react";

function JoinSection() {
  return (
    <div className="p-60 bg-gray-900">
      <h4 className="text-4xl text-yellow-400 tracking-widest uppercase">
        How to join
      </h4>

      <p>
        <h5 className="text-3xl text-white mt-16">Photographers</h5>
        <p className="mt-4 text-white">Contact us on instagram!</p>

        <h5 className="text-3xl text-white mt-20">
          Don't know anything about photography?
        </h5>
        <p className="text-white mt-4 max-w-sm">
          You can still be part of us! Become our model and one of our team
          members will take awesome portrait shots for you. Only caveat here is
          that one of us has to be in your country.
        </p>
        <h5 className="text-3xl text-white mt-20">Web/Graphic Designers</h5>
        <p className="text-white mt-4 max-w-sm">
          This website is pretty basic at the moment. If you are willing to lend
          a hand on improving the design, please contact us on instagram!
        </p>
      </p>
    </div>
  );
}

export default JoinSection;

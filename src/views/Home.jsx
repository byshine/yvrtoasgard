import React from "react";
import { motion } from "framer-motion";
import vintage from "../assets/vintage-2.jpeg";
import ChevronDoubleDown from "../components/icons/ChevronDoubleDown";

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

function Main() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
        duration: 2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <div>
      <div className="h-screen bg-[#2b2b2b] flex items-center">
        <div className="pl-5 absolute inset-0 w-full h-full flex items-center z-10">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.h1 className="text-yellow-500 tracking-widest font-extralight text-4xl uppercase font-sans">
              yvrtoasgard
            </motion.h1>
            <motion.p
              className="text-gray-100 text-sm mt-3 tracking-wider font-sans"
              variants={item}
            >
              Perspective from a collective group of nomads
            </motion.p>
            <motion.p
              className=" text-white tracking-widest text-2xs mt-5 text-opacity-70"
              variants={item}
            >
              NEVER STOP DREAMING
            </motion.p>
            <motion.hr
              variants={item}
              className="border-white mt-4 w-5 opacity-80"
            />

            <motion.ul
              className="text-white font-sans text-sm mt-5"
              variants={item}
            >
              <li className="font-sans mt-1 text-xs tracking-wider">
                South Korea
              </li>
              <li className="font-sans mt-1 text-xs tracking-wider">
                New Zealand
              </li>
            </motion.ul>
          </motion.div>
        </div>
        <motion.div
          className="absolute -z-0 left-1/4"
          initial={{ left: 0, opacity: 0 }}
          animate={{ left: "25%", opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <motion.img
            src={vintage}
            className="max-w-lg  transform -rotate-12 opacity-60 rounded-md"
          />
        </motion.div>
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

export default Main;

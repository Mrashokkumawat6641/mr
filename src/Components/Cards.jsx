import React from "react";
import { motion } from "framer-motion";

function Cards() {
  return (
    <motion.div
      // data-scroll
      // data-scroll-section
      // data-scroll-speed="-.05"
      className="grid grid-cols-2 gap-5 px-16 "
    >
      <div className="h-[30vw] relative rounded-xl flex items-center justify-center  bg-[#004d42]">
        <img
          className="w-[10vw]"
          src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          alt=""
        />
        <h1 className="uppercase absolute bottom-10 left-10 text-[1.2vw]  -tracking-widest leading-none text-[#ceeb67] border-[1px] border-[#ceeb67] p-2 rounded-full">
          &copy;2019-2024
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <a
          href="https://clutch.co/profile/ochi-presentation-design?_gl=1*tlkh5u*_ga*MTg1NTI3NDM4Ni4xNjQ3NTE0MTYx*_ga_D0WFGX8X3V*MTY0ODgxMzI3OS4zLjEuMTY0ODgxMzMyMC4w#summary"
          className="h-[30vw] relative rounded-xl flex items-center justify-center bg-[#212121]"
        >
          <img
            className="w-[10vw]"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <a
            className="absolute uppercase bottom-10 left-10 rounded-full border-[1px] text-zinc-100 border-zinc-100 p-2"
            href="https://clutch.co/profile/ochi-presentation-design?_gl=1*tlkh5u*_ga*MTg1NTI3NDM4Ni4xNjQ3NTE0MTYx*_ga_D0WFGX8X3V*MTY0ODgxMzI3OS4zLjEuMTY0ODgxMzMyMC4w#summary"
          >
            Rating 5.0 on clutch
          </a>
        </a>
        <a
          href="https://thefutur.com/alumni"
          className="h-[30vw] relative rounded-xl flex items-center justify-center bg-[#212121]"
        >
          <img
            className="w-[10vw]"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <a
            className="absolute uppercase bottom-10 left-10 rounded-full border-[1px] text-zinc-100 border-zinc-100 p-2"
            href="https://thefutur.com/alumni"
          >
            Business bootcamp alumini
          </a>
        </a>
      </div>
    </motion.div>
  );
}

export default Cards;

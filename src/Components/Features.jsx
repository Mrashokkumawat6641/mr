import React from "react";
import { motion, useAnimation } from "framer-motion";

function Features() {
  const cards = [useAnimation(), useAnimation()];
  const handleHover = (i) => {
    // alert("Hover");
    cards[i].start({ y: 0 });
  };
  const handleHoverEnd = (i) => {
    // alert("Hover");
    cards[i].start({ y: "100%" });
  };
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.2"
      className="w-full "
    >
      <div className="w-full px-16 border-b-[1px] pb-16 border-zinc-400">
        <h1 className="text-7xl tracking-tight">Featured projects</h1>
      </div>
      <div className="cards flex gap-5 w-full p-16">
        <div className="card w-1/2 relative">
          <p className="text-xl uppercase font-medium">⦿ Fyde</p>
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className=" w-full rounded-xl mt-10 overflow-hidden"
          >
            <div className="absolute flex overflow-hidden text-9xl left-full z-[9] leading-none uppercase tracking-tighter top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#ceeb67]">
              {"fyde".split(" ").map((item, i) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], duration: i * 0.5 }}
                  className="inline-block"
                  key={i}
                >
                  {item}
                </motion.span>
              ))}
            </div>
            <img
              className="w-full h-full"
              src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
              alt=""
            />
          </motion.div>
        </div>
        <div className="card w-1/2 relative">
          <p className="text-xl uppercase font-medium ">⦿ Vise</p>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className=" w-full rounded-xl mt-10 overflow-hidden"
          >
            <div className="absolute flex overflow-hidden text-9xl right-full z-[9] leading-none uppercase tracking-tighter top-1/2 translate-x-1/2 -translate-y-1/2 text-[#ceeb67]">
              {"vise".split(" ").map((item, i) => (
                <motion.span
                  initial={{ y: "100%" }}
                  className="inline-block"
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], duration: i * 0.05 }}
                  key={i}
                >
                  {item}
                </motion.span>
              ))}
            </div>
            <img
              className="w-full h-full"
              src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Features;

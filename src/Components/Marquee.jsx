import { motion } from "framer-motion";

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className="w-full bg-[#358f82]  py-10 overflow-hidden rounded-tl-2xl rounded-tr-2xl"
    >
      <div className="text uppercase flex  whitespace-nowrap border-t-[1px] border-b-[1px] py-3 border-zinc-300 ">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 10, repeat: Infinity }}
          className="text-[12vw]  leading-none tracking-tighter font-bold pr-5"
        >
          we are ochi
        </motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 10, repeat: Infinity }}
          className="text-[12vw]  leading-none tracking-tighter  font-bold pr-5"
        >
          we are ochi
        </motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 10, repeat: Infinity }}
          className="text-[12vw]  leading-none tracking-tighter  font-bold pr-5"
        >
          we are ochi
        </motion.div>
      </div>
    </div>
  );
}

export default Marquee;

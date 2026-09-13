import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// 1. Import your local image here
import bgImage from "../assets/campus-bg.jpg";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 90, damping: 20 },
    },
  };

  return (
    // Updated line below: removed rounded corners, mt-4, and changed to min-h-screen
    <div
      className="flex flex-col justify-center items-center text-center min-h-screen relative bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center relative z-10 px-4 pt-20"
      >
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl font-black tracking-tighter text-black mb-6 leading-none uppercase"
        >
          Connect.
          <br />
          Discover.
          <br />
          <span className="text-gray-600">Thrive.</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-700 max-w-2xl mb-12 font-medium tracking-wide"
        >
          Your premier student community portal. Experience campus life through
          a beautifully curated digital lens.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <Link
            to="/clubs"
            className="bg-black text-white px-8 py-4 rounded-full font-medium tracking-wide hover:scale-105 transition-transform duration-300 shadow-lg block"
          >
            Explore Clubs
          </Link>
          <Link
            to="/events"
            className="bg-white text-black border-2 border-transparent px-8 py-4 rounded-full font-medium tracking-wide hover:border-black transition-colors duration-300 block"
          >
            View Events
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-20 max-w-3xl mx-auto px-4 min-h-[75vh] text-center"
    >
      <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-black mb-8 uppercase">
        About <span className="text-gray-200">Us</span>
      </h1>

      <div className="bg-white p-10 md:p-16 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
        <p className="text-gray-500 text-xl font-light leading-relaxed mb-8">
          CampusConnect is a dedicated platform designed to help students
          discover and engage with campus life. Built with a focus on community
          and accessibility, we bring the best of what our campus has to offer
          directly to your screen.
        </p>
        <p className="text-sm font-bold uppercase tracking-widest text-black">
          Designed for the modern student.
        </p>
      </div>
    </motion.div>
  );
}

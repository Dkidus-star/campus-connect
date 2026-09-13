import { motion } from "framer-motion";

export default function Resources() {
  const resources = [
    {
      title: "Library Services",
      desc: "Access academic journals, book study rooms, and borrow equipment.",
    },
    {
      title: "Academic Support",
      desc: "Free peer tutoring, writing center assistance, and study workshops.",
    },
    {
      title: "Career Services",
      desc: "Resume reviews, mock interviews, and alumni networking events.",
    },
    {
      title: "Health & Wellness",
      desc: "Counseling services, fitness classes, and student health clinic.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-20 max-w-5xl mx-auto px-4 min-h-[75vh]"
    >
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-black mb-6 uppercase">
          Student <span className="text-gray-200">Resources</span>
        </h1>
        <p className="text-gray-500 font-light text-xl">
          Everything you need to succeed on campus.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {resources.map((res, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 transition-all"
          >
            <h3 className="text-2xl font-black tracking-tight text-black mb-3">
              {res.title}
            </h3>
            <p className="text-gray-500 font-light">{res.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

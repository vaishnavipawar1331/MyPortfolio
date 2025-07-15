import React from "react";

import { experiences } from "../../constants";
import { motion } from "framer-motion";
const Experience = () => {
  return (
    <section id="experience">
      <div className="bg-black py-10 px-6 md:px-20 lg:px-32 mt-20">
        <h2 className="text-white text-3xl font-bold mb-6 text-center">
          Experience
        </h2>
        <div className="w-24 h-1 bg-[#cc1eccd7] mx-auto mb-5"></div>
        <div className="flex flex-col lg:flex-row items-start gap-10">
          <div className="lg:w-1/2 flex justify-center pt-5">
            <motion.img
              src={experiences[0].img}
              alt="Profile"
              className="relative w-100 h-auto object-cover border border-[#cc1eccd7] border-s-8 border-b-8 "
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            />
          </div>

          <motion.div
            className="lg:w-1/2 text-white"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-3xl pt-5">{experiences[0].role}</h1>
            <p className="pt-3 text-lg">{experiences[0].company}</p>
            <p className="pt-1 ">{experiences[0].date}</p>
            <p className="pt-3">{experiences[0].desc}</p>

            <div className="mt-4">
              <h5 className="font-semibold text-lg text-white">Skills:</h5>
              <ul className="flex flex-wrap mt-2">
                {experiences[0].skills.map((skill, index) => (
                  <li
                    key={index}
                    className="bg-[#cc1eccd7] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

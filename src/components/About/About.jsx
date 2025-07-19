import React from "react";
import "./About.css";
import AboutImg from "../../assets/Aboutimg-removebg-preview.png";
import WebImg from "../../assets/web1-removebg-preview.png";
import FrontendImg from "../../assets/frontend-removebg-preview.png";
import UiImg from "../../assets/Ui-removebg-preview.png";
import { motion } from "framer-motion";
const About = () => {
  return (
    <section id="about">
      <div className="bg-black py-10 px-6 md:px-20 lg:px-32 mt-20">
        <h2 className="text-white text-3xl font-bold mb-4 text-center">
          About Me
        </h2>
        <div className="w-24 h-1 bg-[#cc1eccd7] mx-auto mb-5"></div>
        <div className="flex flex-col lg:flex-row items-start gap-10 border border-white">
          <div className="lg:w-1/2 flex justify-center">
            <motion.img
              src={AboutImg}
              alt="Profile"
              className="relative z-10 w-100 h-auto object-cover"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>

          <div className="lg:w-1/2 text-white">
            <ul className="aboutItem">
              <li className="aboutItem">
                <div className="flex flex-row gap-3">
                  <img className="h-10 w-10" src={WebImg} alt=""></img>
                  <h3>Web Developer</h3>
                </div>
                <p>
                  I craft responsive and dynamic websites using modern
                  technologies like HTML, CSS, JavaScript, and React.js. My goal
                  is to develop clean, efficient, and scalable code that brings
                  your ideas to life on the web with seamless performance.
                </p>
              </li>
              <li className="aboutItem">
                <div className="flex flex-row gap-3">
                  {" "}
                  <img src={FrontendImg} className="h-10 w-10" alt=""></img>
                  <h3>Frontend Developer</h3>
                </div>

                <p>
                  I specialize in building visually appealing, interactive, and
                  user-friendly interfaces. With a strong grip on React,
                  Tailwind CSS, and modern JavaScript, I turn designs into fully
                  functional web experiences that users love to explore.
                </p>
              </li>
              <li className="aboutItem">
                <div className="flex flex-row gap-3">
                  <img src={UiImg} className="h-10 w-10" alt=""></img>
                  <h3>UI UX Designer</h3>
                </div>

                <p>
                  I design intuitive and engaging user experiences backed by
                  thoughtful UI. My focus is on creating visually balanced
                  layouts, consistent design systems, and smooth user flows that
                  not only look great but also feel effortless to use.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import ReactTypingEffect from "react-typing-effect";
import hero from "../../assets/hero-removebg-preview.png";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <section
      id="home"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[15vw] font-sans mt-16 md:mt-24 lg:mt-32 mb-40"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="text-center md:text-left mt-8 md:mt-0 w-full lg:w-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold   mb-2 text-white leading-tight">
            Hi, I am
          </h1>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold  text-white mb-4 leading-tight">
            Vaishnavi Pawar
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-tight gradient-text">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                "React Developer",
                "Front-end Developer",
                "Web Developer",
                "UI/UX Designer",
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#cc1eccd7]">{cursor}</span>
              )}
            />
          </h3>

          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I'm a web developer specializing in React. I'm passionate about
            building innovative solutions and solving complex problems. Skilled
            in modern front-end technologies, responsive design, and interactive
            UI/UX development. I focus on creating fast, user-friendly websites
            that deliver seamless digital experiences.
          </p>

          <a
            href="https://drive.google.com/file/d/1nfDT-iH8GnDSJ7JWzNNzimxc0-U7S6C-/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 border border-white mt-5 text-lg md:text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              // background: "linear-gradient(90deg, #8245ec, #a855f7)",
              background:
                "linear-gradient(267deg, #DA7C25 0.36% ,#B923E1 100%)",
              // boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>
        <div className="hidden lg:flex lg:w-1/2 justify-end">
          <motion.img
            src={hero}
            className="relative z-10 w-100 h-auto object-cover"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;

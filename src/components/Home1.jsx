import React from "react";
import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";
import bgImage from "../img/bg5.png";
import Type from "./Type";

const Home1 = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-cover bg-center flex items-center text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-screen-lg mx-auto px-4 flex flex-col items-start">
        <div className="text-left">
          <motion.h2
            className="text-3xl sm:text-5xl font-bold"
            style={{ color: "purple-70" }}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100,duration: 130}}
          >
            Hi! I am <span style={{ color: "#6A0DED" }}>Sakshi Bhatia.</span>
          </motion.h2>
          <motion.p
            className="text-gray-500 py-4 max-w-md text-xl font-bold"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 ,duration: 130}}
          >
            I'm a Full Stack Web Developer.
          </motion.p>
          <div>
            <a
              href="https://drive.google.com/file/d/1rnUkw1tkIr1WY2GUypKZ5BQ_5NVJg5qd/view?usp=sharing"
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-purple-400 to-purple-900  cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.span
                className="group-hover:rotate-90 duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <HiDownload className="ml-1" />
              </motion.span>
              <motion.span
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
              >
                Download Resume
              </motion.span>
            </a>
          </div>
        </div>
        <div>
          <Type />
        </div>
      </div>
    </div>
  );
};

export default Home1;

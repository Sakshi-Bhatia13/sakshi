import React from "react";
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
          <h2 className="text-3xl sm:text-5xl font-bold" style={{ color: "purple-70" }}>
            Hi! I am <span style={{ color: "#6A0DED" }}>Sakshi Bhatia.</span>
          </h2>
          <p className="text-gray-500 py-4 max-w-md text-xl font-bold">
            I'm a Full Stack Web Developer.
          </p>
          <div>
            <a
              href="https://drive.google.com/file/d/1lzNw76i7Lvhv8LGX7P3RR826zfd9chPi/view"
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-purple-400 to-purple-900  cursor-pointer"
              target="_blank" rel="noopener noreferrer"
            >
              Download Resume
              <span className="group-hover:rotate-90 duration-300">
                <HiDownload className="ml-1" />
              </span>
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

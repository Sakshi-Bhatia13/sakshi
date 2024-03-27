import React from "react";
import myImg from "../img/img2.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <div className="bg-gray-100 py-12" id="about">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              LET ME <span className="text-purple-600"> INTRODUCE </span> MYSELF
            </h1>
            <p className="text-lg md:text-xl leading-relaxed">
              I am a Passionate Full Stack Web Developer while developing Projects with expertise in ReactJs and NodeJs.
              <br />
              <br />I am fluent in Languages like
              <span className="font-bold text-purple-600"> C, C++, Javascript. </span>
              <br />
              <br />
              My field of Interest's are building &nbsp;
              <span className="font-bold text-purple-600">web applications </span>
              and also my interest lies in  {" "}
              <span className="font-bold text-purple-600">Problem Solving. </span>
              <br />
              <br />             
            </p> 
          </div>
          <div className="md:w-1/3 mt-8 md:mt-0">
            <Tilt>
              <img src={myImg} className="rounded-full w-32 md:w-48"  />
            </Tilt>
          </div>
        </div>
        <div className="mt-12 text-center">
          <h1 className="text-2xl lg:text-3xl font-bold">FIND ME ON</h1>
          <p className="mt-2">Let's Connect!</p>
          <div className="mt-4 flex justify-center">
            <a
              href="https://github.com/Sakshi-Bhatia13?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="mx-2 text-purple-600"
            >
              <AiFillGithub className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/sakshi-bhatia-a187b922b/"
              target="_blank"
              rel="noreferrer"
              className="mx-2 text-purple-600"
            >
              <FaLinkedinIn className="w-8 h-8" />
            </a>
            <a
              href=""
              target="_blank"
              rel="noreferrer"
              className="mx-2 text-purple-600"
            >
              <AiFillInstagram className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home2;

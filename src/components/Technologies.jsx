import React from "react";
import bg6 from '../img/bg6.png'
import c from "../img/c.png";
import canva from "../img/canva.png";
import cplus from "../img/cplus.png";
import expressjs from "../img/expressjs.png";
import firebase from "../img/firebase.png";
import Git from "../img/Git.png";
import reactjs from "../img/reactjs.jpg";
import mongo from "../img/mongo.png";
import mysql from "../img/mysql.png";
import netlify from "../img/netlify.png";
import nodejs from "../img/nodejs.png";
import postman from "../img/postman.png";
import python from "../img/python.png";
import html from "../img/html.png";
import css from "../img/css.png";
import javascript from "../img/javascript.png";
import github from "../img/github.png";
import tailwind from "../img/tailwind.png";
import { Element } from 'react-scroll';

const Technologies = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactjs,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: nodejs,
      title: "Node Js",
      style: "shadow-white",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 7,
      src: expressjs,
      title: "Express Js",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: mongo,
      title: "Mongo DB",
      style: "shadow-green-400",
    },
    {
      id: 9,
      src: postman,
      title: "Postman",
      style: "shadow-orange-400",
    },
    {
      id: 10,
      src: firebase,
      title: "Firebase",
      style: "shadow-yellow-400",
    },
    {
      id: 11,
      src: Git,
      title: "Git",
      style: "shadow-orange-400",
    },
    {
      id: 12,
      src: c,
      title: "C",
      style: "shadow-blue-400",
    },
    {
      id: 13,
      src: cplus,
      title: "C++",
      style: "shadow-blue-400",
    },
    {
      id: 14,
      src: netlify,
      title: "Netlify",
      style: "shadow-gray-400",
    },
    {
      id: 15,
      src: python,
      title: "Python",
      style: "shadow-blue-400",
    },
    {
      id: 16,
      src: mysql,
      title: "MYSQL",
      style: "shadow-gray-400",
    },
    {
      id: 17,
      src: canva,
      title: "Canva",
      style: "shadow-blue-400",
    },
    {
      id: 18,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <Element name="technologies"> {/* Added name attribute */}
      <div className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen" style={{ backgroundImage: `url(${bg6})` }} >
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
          <div>
            <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
              Technologies
            </p>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 text-center py-8 px-4 sm:px-0">
            {techs.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`flex flex-col items-center shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt={title} className="w-20 mx-auto h-20 mb-2" />
                <p className="mt-2 text-sm">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Technologies;

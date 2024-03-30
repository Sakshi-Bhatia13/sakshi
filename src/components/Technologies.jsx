import React from "react";
import c from "../img/c.png";
import canva from "../img/canva.png";
import bg6 from "../img/bg6.png"
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
    { id: 1, src: c, title: "C", style: "shadow-blue-900" },
    { id: 2, src: cplus, title: "C++", style: "shadow-blue-900" },
    { id: 3, src: python, title: "Python", style: "shadow-blue-900" },
    { id: 4, src: javascript, title: "JavaScript", style: "shadow-yellow-700" },
    { id: 5, src: mysql, title: "MySQL", style: "shadow-gray-900" },
    { id: 6, src: html, title: "HTML", style: "shadow-orange-700" },
    { id: 7, src: css, title: "CSS", style: "shadow-blue-700" },
    { id: 8, src: tailwind, title: "Tailwind CSS", style: "shadow-sky-800" },
    { id: 9, src: reactjs, title: "React", style: "shadow-sky-600" },
    { id: 10, src: nodejs, title: "Node.js", style: "shadow-green-800" },
    { id: 11, src: expressjs, title: "Express", style: "shadow-yellow-800" },
    { id: 12, src: mongo, title: "MongoDB", style: "shadow-green-800" },
    { id: 13, src: firebase, title: "Firebase", style: "shadow-yellow-700" },
    { id: 14, src: postman, title: "Postman", style: "shadow-orange-900" },
    { id: 15, src: Git, title: "Git", style: "shadow-orange-900" },
    { id: 16, src: github, title: "GitHub", style: "shadow-gray-900" },
    { id: 17, src: netlify, title: "Netlify", style: "shadow-sky-800" },
    { id: 18, src: canva, title: "Canva", style: "shadow-blue-900" },
  ];

  return (
    <Element name="technologies"> 
      <div className="w-full min-h-screen" > 
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-center text-white" >
          <div className="mt-20 pb-4">
            <h3 className="text-4xl text-purple-950  inline-block ">Technologies I Know</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 text-center py-8 px-4 sm:px-0">
            {techs.map(({ id, src, title, style }) => (
              <div key={id} className={`flex flex-col items-center shadow-md hover:scale-125 duration-500 py-2 rounded-lg ${style}`}>
                <img src={src} alt={title} className="w-20 mx-auto h-20 mb-2" />
                <p className="mt-2 text-sm text-black">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
  
};

export default Technologies;

import React from 'react';
import rotaractImage from '../img/rotaract.jpg';
import ieeeImage from '../img/ieee.png';
import bg6 from '../img/bg6.png'
import { Element } from 'react-scroll';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      position: "Head of Operations",
      organization: "Rotaract Club",
      timeline: "Feb2021 - Present",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus felis eget malesuada euismod. Nullam at consequat urna. Phasellus ut aliquam turpis."
    },
    {
      id: 2,
      position: "Content Team",
      organization: "IEEE",
      timeline: "Aug2021 - March2024",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus felis eget malesuada euismod. Nullam at consequat urna. Phasellus ut aliquam turpis."
    }
  ];

  return (
    <Element name="experience"> 
      <div className="experience-section bg-gradient-to-b from-gray-800 to-black w-full min-h-screen text-white "
      style={{ backgroundImage: `url(${bg6})` }} >
        <div className="max-w-screen-lg mx-auto p-4">
          <h2 className="text-4xl font-bold border-b-4 border-gray-500 pb-2">Experience</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
            {experiences.map(experience => (
              <div key={experience.id} className="shadow-md bg-gray-900 rounded-lg overflow-hidden flex justify-center items-center">
                <img src={experience.organization === "Rotaract Club" ? rotaractImage : ieeeImage} alt={experience.organization} className="w-40 h-40 object-cover rounded-full" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{experience.position}</h3>
                  <p className="text-gray-400 mb-2">{experience.organization}</p>
                  <p className="text-gray-400 italic mb-2">{experience.timeline}</p>
                  <p className="text-gray-400">{experience.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Experience;

import React from 'react';
import rotaractImage from '../img/rotaract.jpg';
import ieeeImage from '../img/ieee.png';
import { Element } from 'react-scroll';
import bg6 from '../img/bg6.png'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      position: "Head of Operations",
      organization: "Rotaract Club of Youth",
      timeline: "Feb 2021 - Present",
      content: "Initially I Started as a member of Social media team to make the contents reach to the public and make our social media more engaging . Then as my involvement grew , I organised and handled various Events and then I Became the Head of Operations Department and handled the flow of Events there.",
    },
    {
      id: 2,
      position: "Content Team",
      organization: "IEEE Student Branch",
      timeline: "Aug 2021 - Mar 2024",
      content: "In my role as a member of the Content Team at IEEE, I did various content-related tasks, including event descriptions, post-event reports. My responsibilities involved ensuring the quality of all content produced, aiming to enhance the visibility and impact of IEEE's initiatives."

    }
  ];

  return (
      <Element name="experience"> 
        <div className="experience-section w-full min-h-screen">
          <div className="max-w-screen-lg mx-auto p-4 ">
            <div className="pb-4 mt-20 text-center"> 
              <h3 className="text-4xl text-purple-950 inline-block">
                Experiences
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
              {experiences.map(experience => (
                <div key={experience.id} className="shadow-md shadow-purple-950 rounded-lg overflow-hidden hover:scale-110 hover:duration-300 hover:bg-purple-200 transition duration-300 ease-in-out ">
                  <div className="p-4 flex flex-col justify-center items-center">
                    <img src={experience.organization === "Rotaract Club of Youth" ? rotaractImage : ieeeImage} alt={experience.organization} className="w-40 h-40 object-cover rounded-full mb-4 sm:mb-0 sm:mr-4" />
                    <div>
                    <p className="text-purple-700 text-2xl  mb-1">{experience.organization}</p>
                      <h3 className="text-xl text-purple-500  mb-1">{experience.position}</h3>
                      <p className="text-gray-600 italic font-semibold mb-1">{experience.timeline}</p>
                      <p className="text-black">{experience.content}</p>
                    </div>
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

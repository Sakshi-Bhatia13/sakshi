import React, { useState, useEffect } from "react";
import bg6 from '../img/bg6.png';

const Project = () => {
  const [showTransition, setShowTransition] = useState(false);

  useEffect(() => {
    // Triggering the transition effect after a short delay to allow time for rendering
    const timer = setTimeout(() => {
      setShowTransition(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      id: 1,
      name: "WorkoutBuddy",
      src: "",
      description: "Description of WorkoutBuddy goes here. This is a brief overview of what the project is about.",
    },
    {
      id: 2,
      name: "QuickChat",
      src: "",
      description: "Description of QuickChat goes here. This is a brief overview of what the project is about.",
    },
    {
      id: 3,
      name: "WatchFulEye",
      src: "",
      description: "Description of WatchFulEye goes here. This is a brief overview of what the project is about.",
    },
  ];

  return (
    <div
      name="Projects"
      className={`bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white ${showTransition ? 'fade-in' : ''}`}
      style={{ backgroundImage: `url(${bg6})` }}
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, name, src, description }) => (
            <div key={id} className="shadow-md shadow-purple-600 rounded-lg">
              <img
                src={src}
                alt={`Project ${id}`}
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="p-4">
                <p className="text-lg font-semibold mb-2">{name}</p>
                <p className="text-lg font-semibold mb-2">{description}</p>
                <div className="flex justify-center">
                  <button className="w-full px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;

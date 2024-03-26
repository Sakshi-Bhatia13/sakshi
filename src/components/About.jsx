import React from "react";
import img2 from "../img/img2.jpg";
import bg6 from "../img/bg6.png"


const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-cover bg-center flex items-center text-white"
      style={{ backgroundImage: `url(${bg6})` }} 
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
     
        <img
          src={img2}
          alt="My Image"
          className="mt-4 mb-4 rounded-full max-w-xs"
          style={{ width: "200px", height: "auto" }} 
        />

        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          qui fugit numquam! Cum vitae temporibus molestiae dicta illum
          laboriosam similique at mollitia nihil iusto repellat numquam eos illo
          perspiciatis a unde minima commodi id cupiditate laborum iste, beatae
          maiores. Voluptatum quisquam dignissimos tempore asperiores sit
          ratione officiis officia alias vitae.
        </p>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import bg6 from '../img/bg6.png'

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen p-4 text-white " style={{ backgroundImage: `url(${bg6})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full" >
      <div className="pb-8 mt-20"> 
  <h3 className="text-4xl font-bold text-purple-100 border-b-4 border-purple-700 inline-block">
    Contact
  </h3>
</div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/eapdmqqa"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white border-white placeholder-white"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white border-white placeholder-white"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white border-white placeholder-white"
            ></textarea>

            <button className="text-white border-white bg-gradient-to-r from-purple-400 to-purple-800 px-6 py-3 my-8 mx-auto border-2 flex items-center rounded-md hover:scale-110 duration-300">
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

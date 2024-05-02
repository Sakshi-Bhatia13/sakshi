import React, { useState } from "react";
import bg6 from '../img/bg6.png'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setFormData({
        name: "",
        email: "",
        message: ""
      });
      setFormSubmitted(true);
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <div
      name="contact"
      className="w-full h-screen p-4 text-white  " style={{ backgroundImage: `url(${bg6})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full mt-5" >
        <div className="pb-8 mt-20 text-center"> 
          <h3 className="text-4xl font-sans text-purple-100 inline-block text-center">
            Contact Me
          </h3>
        </div>

        {formSubmitted ? (
          <div className="text-center text-green-500 mb-4">
            Form submitted successfully!
          </div>
        ) : null}

        <div className="flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="p-2 bg-transparent border-2 rounded-md text-white border-white placeholder-white"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white border-white placeholder-white"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              value={formData.message}
              onChange={handleChange}
              className="p-2 bg-transparent border-2 rounded-md text-white border-white placeholder-white"
            ></textarea>

            <button type="submit" className="text-white border-white bg-gradient-to-r from-purple-400 to-purple-800 px-6 py-3 my-8 mx-auto border-2 flex items-center rounded-md hover:scale-110 duration-300">
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <div style={{ pr: 10 , fontSize: "24px", color: "#E9D8FD" }}>
      <Typewriter
        options={{
          strings: [
            "<span style='font-size: 32px;'>Software Developer</span>",
            "<span style='font-size: 32px;'>MERN Stack Developer</span>",
            "<span  style='font-size: 32px;'>Programmer</span>",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
};

export default Type;

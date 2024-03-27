import React from "react";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-lg text-white">Designed by Sakshi Bhatia</h3>
          </div>
          <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
            <h3 className="text-lg text-white">Copyright © {year} SB</h3>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right">
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

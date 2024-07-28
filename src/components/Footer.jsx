import React from "react";

function Footer() {
  const navLinks = [
    { name: "Home", path: "home" },
    { name: "Services", path: "services" },
    { name: "Projects", path: "projects" },
    { name: "About", path: "about" },
  ];
  return (
    <footer className="pt-12 bg-[#12141e]">
      <div className="container">
        <div className="flex justify-between items-center md:gap-8">
          <div className="sm:w-1/2 w-full">
            <h2 className="text-white leading-10 text-[26px] font-[600] mb-5 md:text-[2rem]">
              Do you want to make beautiful products ?
            </h2>
            <a href="#contact">
              <button className="bg-primary text-white font-[500] flex items-center gap-2 hover:bg-txt py-2 px-4 rounded-[8px] ease-in duration-300">
                <i className="ri-mail-line"></i>Hire me
              </button>
            </a>
          </div>
          <div className="w-full sm:w-1/2">
            <p className="text-gray-300 mt-4 leading-7 sm:mt-0">
              Thank you for visiting my portfolio. If you have any questions or
              would like to discuss a project, feel free to reach out.
            </p>
            <div className="flex items-center gap-4 flex-wrap md:gap-8 mt-10">
              <span className="font-[600] text-[15px] text-gray-300">
                Follow Me:
              </span>
              <span className="w-[35px] h-[35px] cursor-pointer bg-[#2b2d33] p-1 rounded-[50px] text-center">
                <a href="" className="text-gray-300 font-[500] text-[18px]">
                  <i className="ri-linkedin-fill"></i>
                </a>
              </span>
              <span className="w-[35px] bg-[#2b2d33] h-[35px] cursor-pointer p-1 rounded-[50px] text-center">
                <a href="" className="text-gray-300 font-[500] text-[18px]">
                  <i className="ri-github-fill"></i>
                </a>
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] cursor-pointer p-1 rounded-[50px] text-center">
                <a href="" className="text-gray-300 font-[500] text-[18px]">
                  <i className="ri-telegram-fill"></i>
                </a>
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] cursor-pointer p-1 rounded-[50px] text-center">
                <a href="" className="text-gray-300 font-[500] text-[18px]">
                  <i className="ri-instagram-fill"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <ul className="flex items-center justify-center gap-10 mt-10">
          {navLinks.map((link, key) => (
            <li key={key}>
              <a href="" className="text-gray-400 font-[600]">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

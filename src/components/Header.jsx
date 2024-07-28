import React, { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "Home", path: "home" },
    { name: "Services", path: "services" },
    { name: "Projects", path: "projects" },
    { name: "About", path: "about" },
  ];

  return (
    <>
      <header className="w-full h-[80px] leading-[80px] flex items-center relative z-20">
        <div className="container">
          <div className="flex items-center justify-between">
            {/* -----------------------Logo------------------------- */}
            <div className="flex items-center gap-[10px]">
              <span className="w-[35px] h-[35px] bg-primary text-white text-[18px] rounded-full flex items-center justify-center font-[500]">
                MO
              </span>
            </div>
            {/* -----------------------Nav Links------------------------- */}
            <div className="menu hidden md:block">
              <ul className="flex items-center gap-10">
                {navLinks.map((link, key) => (
                  <li key={key}>
                    <a
                      href={`#${link.path}`}
                      className="text-txt font-[600] hover:border-b-primary border-b-2"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* -----------------------Menu Right and Contact Me------------------------- */}
            <div className="flex items-center gap-4">
              <a href="#contact">
                <button
                  className="flex items-center gap-2 border border-solid text-txt font-[600] border-txt px-4 py-2 rounded-[8px] max-h-[40px] 
                hover:bg-txt hover:text-white hover:font-[500] ease-in duration-300"
                >
                  <i className="ri-send-plane-line"></i> Contact Me
                </button>
              </a>
              <span
                className="text-2xl text-txt md:hidden cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <i className="ri-close-line"></i>
                ) : (
                  <i className="ri-menu-line"></i>
                )}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-white z-10 md:hidden mt-4 container">
          <ul className="flex flex-col items-start gap-2 p-4">
            {navLinks.map((link, key) => (
              <li key={key}>
                <a
                  href={`#${link.path}`}
                  className="text-txt font-[600] hover:border-b-primary border-b-2"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Header;

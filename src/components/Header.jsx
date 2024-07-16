import React from "react";

function Header() {
  const navLinks = [
    { name: "Home", path: "home" },
    { name: "Services", path: "services" },
    { name: "Projects", path: "projects" },
    { name: "About", path: "about" },
  ];
  return (
    <header className="w-full h-[80px] leading[80px] flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* -----------------------Logo------------------------- */}
          <div className="flex items-center gap-[10px]">
            <span className="w-[35px] h-[35px] bg-primary color-white text-[18px] rounded rounded-full flex items-center justify-center font-[500]">
              MO
            </span>
          </div>
          {/* -----------------------Nav Links------------------------- */}
          <div className="menu">
            <ul className="flex items-center gap-10">
              {navLinks.map((link, key) => (
                <li key={key}>
                  <a href="" className="text-txt font-[600]">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* -----------------------Menu Right and Contact Me------------------------- */}
          <div className="flex items-center gap-4">
            <button
              className="flex items-center gap-2 border border-solid text-txt font-[600] border-txt px-4 py-2 rounded-[8px] max-h-[40px] 
            hover:bg-txt hover:text-white hover:font-[500] ease-in duration-300"
            >
              <i class="ri-send-plane-line"></i> Contact Me
            </button>
            <span className=" text-2xl text-txt md:hidden cursor-pointer">
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

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
            <span className="w-[35px] h-[35px] bg-primary color-white text-[10px] rounded rounded-full flex items-center justify-center">
              MO
            </span>
          </div>
          {/* -----------------------Nav Links------------------------- */}
          <div className="menu">
            <ul className="flex items-center gap-10">
              {navLinks.map((link, key) => (
                <li key={key}>
                  <a href="" className="text-txt">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

import React from "react";
import typing from "../assets/typing.svg";
import bgImage from "../assets/bg.jpg";

function home() {
  return (
    <div
      id="home"
      style={{
        // backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="h-screen "
    >
      <div className=" pt-20">
        {/* introduuuuuuuuuuuuuction */}
        <div className="text-center">
          <h5 style={{ color: "#FCC11E" }} className=" font-bold text-7xl ">
            Hello!
          </h5>
          <h5 className=" font-bold text-7xl text-white ">I'm Morad Raki</h5>
          {/* descpiiiiiiiiiiiiiiiiiiiiption */}
          <p className="pt-6" style={{ color: "#EBFCFF", fontSize: "20px" }}>
            Welcome to my potfolio, I create projects and I post them here So
            subscribe in the newsletter and get noticed everytime I post new one
            and. happy coding.
          </p>
        </div>
        {/* inpuuuuuuuuuuuuuuuuuuuuuuuuuuut */}
        <div className="flex flex-col items-center pt-6">
          <input
            className="mt-5 h-10 rounded-full pl-4"
            type="text"
            name=""
            id=""
            placeholder="Name"
          />
          <input
            className="mt-5 h-10 rounded-full pl-4"
            type="email"
            name=""
            id=""
            placeholder="Email"
          />
          <button className="myButton">Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default home;

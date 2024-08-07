import React from "react";
import CountUp from "react-countup";
import TypewriterComponent from "typewriter-effect";

function Hero() {
  return (
    <section className="pt-0" id="about">
      <div className="container mx-auto px-4 pt-14">
        <div className="md:flex md:flex-row items-center justify-between sm:flex-col">
          {/* -----------------------Left Content------------------------- */}
          <div className="w-full ">
            <h5
              className="font-[600] text-[16px] text-secondary"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              Hello welcome
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] text-secondary"
            >
              I'm Morad Oulhaj <br />
              <TypewriterComponent
                options={{
                  strings: [
                    "Front end developer, Back end developer and Tech Enthusiast.",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1800"
              className="flex items-center gap-6 mt-7"
            >
              <a href="#contact">
                <button className="bg-primary text-white font-[500] flex items-center gap-2 hover:bg-txt py-2 px-4 rounded-[8px] ease-in duration-300">
                  <i className="ri-mail-line"></i>Hire me
                </button>
              </a>
              <a
                className="text-txt border-b border-solid border-txt font-[600] text-[16px]"
                href="#portfolio"
              >
                See portfolio
              </a>
            </div>
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex text-secondary text-[15px] gap-2 mt-14 font-[500] sm:pl-14 sm:pr-10 leading-7"
            >
              <span>
                <i className="ri-apps-2-line"></i>
              </span>
              I create user-friendly and visually appealing web applications
              with modern technologies, specializing in crafting responsive and
              dynamic solutions for diverse needs. Combining creativity and
              technology, I deliver seamless and efficient web solutions with a
              strong foundation in both frontend and backend development.
            </p>
            <div className="flex items-center gap-9 mt-14">
              <span className="text-[15px] font-[600] text-txt">
                Follow me:
              </span>
              <span>
                <a
                  href="https://www.linkedin.com/in/yourprofile"
                  className="text-[18px] font-[600] text-txt"
                >
                  <i className="ri-linkedin-fill"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://github.com/yourprofile"
                  className="text-[18px] font-[600] text-txt"
                >
                  <i className="ri-github-fill"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://t.me/yourprofile"
                  className="text-[18px] font-[600] text-txt"
                >
                  <i className="ri-telegram-fill"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://www.instagram.com/yourprofile"
                  className="text-[18px] font-[600] text-txt"
                >
                  <i className="ri-instagram-fill"></i>
                </a>
              </span>
            </div>
          </div>

          {/* -----------------------Right Content (Statistics)------------------------- */}
          <div className="md:basis-1/3 flex justify-between text-center mt-10 flex-wrap gap-[3px] md:mt-0 md:flex-col md:justify-end md:text-end">
            <div className="my-10">
              <h2 className="text-secondary font-[700] text-[32px]">
                <CountUp start={0} end={1} duration={3} suffix="+" />
              </h2>
              <h4 className="text-secondary font-[600] text-[18px]">
                Years of Experience
              </h4>
            </div>
            <div className="my-10">
              <h2 className="text-secondary font-[700] text-[32px]">
                <CountUp start={0} end={5} duration={3} suffix="+" />
              </h2>
              <h4 className="text-secondary font-[600] text-[18px]">
                Projects Completed
              </h4>
            </div>
            <div className="my-10">
              <h2 className="text-secondary font-[700] text-[32px]">
                <CountUp start={0} end={100} duration={3} suffix="%" />
              </h2>
              <h4 className="text-secondary font-[600] text-[18px]">
                Success Rate
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

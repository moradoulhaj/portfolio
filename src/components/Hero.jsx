import React from "react";
import heroImg from "../assets/images/hero.svg";
import CountUp from "react-countup";
function Hero() {
  return (
    <section className="pt-0" id="about">
      <div className="container pt-14">
        <div className=" md:flex md:flex-row items-center justify-between sm:flex-col">
          {/* -----------------------Left Content------------------------- */}
          <div className="w-full basis-1/2">
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
              I'm Morad Oulhaj <br /> Fullstack developer
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <div className="flex items-center gap-9 mt-14">
              <span className="text-[15px] font-[600] text-txt">
                Follow me:
              </span>
              <span>
                <a href="text-[18px] font-[600] text-txt">
                  <i className="ri-linkedin-fill"></i>
                </a>
              </span>
              <span>
                <a href="text-[18px] font-[600] text-txt">
                  <i className="ri-github-fill"></i>
                </a>
              </span>
              <span>
                <a href="text-[18px] font-[600] text-txt">
                  <i className="ri-telegram-fill"></i>
                </a>
              </span>
              <span>
                <a href="text-[18px] font-[600] text-txt">
                  <i className="ri-instagram-fill"></i>
                </a>
              </span>
              {/* -----------------------Img Content------------------------- */}
            </div>
          </div>
          <div className="mt-10 basis-1/3 sm:mt-0">
            <figure className="flex items-center justify-center">
              <img src={heroImg} alt="" />
            </figure>
          </div>
          {/* -----------------------right Content (statistiques)------------------------- */}
          <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-[3px] md:mt-0 md:flex-col md:justify-end md:text-end ">
            <div className="mb-10">
              <h2 className="text-secondary font-[700] text-[32px]">
                <CountUp start={0} end={1} duration={3} suffix="+" />
              </h2>
              <h4 className="text-secondary font-[600] text-[18px]">
                Years of Experience
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-secondary font-[700] text-[32px]">
                <CountUp start={0} end={5} duration={3} suffix="+" />
              </h2>
              <h4 className="text-secondary font-[600] text-[18px]">
                Projects Completed
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-secondary font-[700] text-[32px]">
                <CountUp start={0} end={5} duration={3} suffix="+" />
              </h2>
              <h4 className="text-secondary font-[600] text-[18px]">
                Success Rate
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-secondary font-[700] text-[32px]">
                <CountUp start={0} end={5} duration={3} suffix="+" />
              </h2>
              <h4 className="text-secondary font-[600] text-[18px]">
                Years of Experience
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

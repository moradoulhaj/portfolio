import React from "react";
import frontEndImg from "../assets/images/front-end.png";
import backEndImg from "../assets/images/backend.png";
import designImg from "../assets/images/design.png";

function Services() {
  return (
    <section id="services">
      <div className="container lg:pt-5">
        <div className="text-center">
          <h2 className="text-secondary font-[800] text-[2.4rem] mb-5">
            What can I do for you:
          </h2>
          <p className=" lg:max-w-[600px] lg:mx-auto text-secondary font-[500] text-[16px] leading-7">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s orem Ipsum is simply dummy text of the printing
            and typesetting industry.
          </p>
        </div>
        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold ">
              {/* -----------------------Vertical line------------------------- */}
              <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform-translate-x-1/2"></div>
              {/* -----------------------Left Card------------------------ */}

              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group hover:bg-primary cursor-pointer ease-in duration-150 "
                      >
                        <h3 className="text-primary font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                          Frontend development
                        </h3>
                        <p className="text-[15px] text-txt group-hover:text-white group-hover:font-[500]">
                          Lorem Ipsum is simply dummy text of typesetting
                          industry. Lorem Ipsum industry's
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" rounded-full bg-primary border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={frontEndImg} alt=""  />
                    </figure>
                  </div>
                </div>
              </div>
              {/* -----------------------Right Card------------------------ */}

              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-duration="1300"
                        data-aos-delay="50"
                        className="bg-white p-4 rounded shadow group hover:bg-primary cursor-pointer ease-in duration-150 "
                      >
                        <h3 className="text-primary font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                          Backend development
                        </h3>
                        <p className="text-[15px] text-txt group-hover:text-white group-hover:font-[500]">
                          Lorem Ipsum is simply dummy text of typesetting
                          industry. Lorem Ipsum industry's
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" rounded-full bg-primary border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={backEndImg} alt=""  />
                    </figure>
                  </div>
                </div>
              </div>

              {/* -----------------------Left Card------------------------ */}

              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1400"
                        data-aos-delay="11"
                        className="bg-white p-4 rounded shadow group hover:bg-primary cursor-pointer ease-in duration-150 "
                      >
                        <h3 className="text-primary font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                          UI/UX design
                        </h3>
                        <p className="text-[15px] text-txt group-hover:text-white group-hover:font-[500]">
                          Lorem Ipsum is simply dummy text of typesetting
                          industry. Lorem Ipsum industry's
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" rounded-full bg-primary border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={designImg} alt=""  />
                    </figure>
                  </div>
                </div>
              </div>

              {/* -----------------------Right Card------------------------ */}

              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-duration="1300"
                        data-aos-delay="50"
                        className="bg-white p-4 rounded shadow group hover:bg-primary cursor-pointer ease-in duration-150 "
                      >
                        <h3 className="text-primary font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                          Backend development
                        </h3>
                        <p className="text-[15px] text-txt group-hover:text-white group-hover:font-[500]">
                          Lorem Ipsum is simply dummy text of typesetting
                          industry. Lorem Ipsum industry's
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" rounded-full bg-primary border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={backEndImg} alt=""  />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;

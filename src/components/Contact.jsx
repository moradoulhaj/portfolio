import React from "react";

function Contact() {
  return (
    <section id="contact" className="pb-16">
      <div className="container">
        <h2 className="mb-8 text-secondary font-[700] text-[2.5rem]">
          Get in touch
        </h2>
        <div className="md:flex justify-between items-center">
          <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
            {/* image here */}
          </div>
          <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 py-8 lg:px-8">
            <form action="" className="w-full">
              <div className="mb-5">
                <input
                  type="text"
                  className="w-full p-3 rounded-[5px] focus:outline-none"
                  placeholder="Enter you name"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  className="w-full p-3 rounded-[5px] focus:outline-none"
                  placeholder="Enter you email"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  className="w-full p-3 rounded-[5px] focus:outline-none"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="mb-5">
                <textarea
                  rows={3}
                  type="text"
                  className="w-full p-3 rounded-[5px] focus:outline-none"
                  placeholder="Write your message"
                  required
                />
                <button
                  type="submit"
                  className="bg-txt mt-3 focus:outline-none text-white w-full p-3 rounded-[5px] text-center hover:bg-secondary ease-linear duration-150"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

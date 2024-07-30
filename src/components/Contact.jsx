import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import handSvg from "../assets/images/Hand.png";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ja9ylji",
        "template_ie33rqf",
        form.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="pb-16">
      <div className="container">
        <h2 className="mb-8 text-secondary font-[700] text-[2.5rem] text-center">
          Get in touch
        </h2>
        <div className="md:flex justify-center items-center">
          <div className="w-full mt-8 md:mt-0 lg:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 py-8 lg:px-8">
            <form ref={form} onSubmit={sendEmail} className="w-full">
              <div className="mb-5">
                <input
                  type="text"
                  name="from_name"
                  className="w-full p-3 rounded-[5px] focus:outline-none"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  name="from_email"
                  className="w-full p-3 rounded-[5px] focus:outline-none"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  name="subject"
                  className="w-full p-3 rounded-[5px] focus:outline-none"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="mb-5">
                <textarea
                  rows={3}
                  name="message"
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

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false); // Track if email has been sent
  const [attempts, setAttempts] = useState(0);
  const MAX_ATTEMPTS = 3; // Maximum number of attempts before cooldown
  const COOLDOWN_TIME = 30000; // Cooldown time in milliseconds (e.g., 30 seconds)
  const [cooldownUntil, setCooldownUntil] = useState(0);

  const sendEmail = async (e) => {
    e.preventDefault();

    const now = Date.now();
    if (now < cooldownUntil) {
      const remainingTime = Math.ceil((cooldownUntil - now) / 1000);
      if (!toast.isActive("cooldown-toast")) {
        toast.warn(
          `Please wait ${remainingTime} seconds before trying again.`,
          { toastId: "cooldown-toast" }
        );
      }
      return;
    }

    if (isSent) {
      if (!toast.isActive("already-sent-toast")) {
        toast.warn("You have already sent a message.", {
          toastId: "already-sent-toast",
        });
      }
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        "service_ja9ylji",
        "template_ie33rqf",
        form.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );
      toast.success("Message sent successfully!", { toastId: "success-toast" });
      setIsSent(true); // Set flag to true after successful send
    } catch (error) {
      setAttempts((prevAttempts) => {
        const newAttempts = prevAttempts + 1;
        if (newAttempts >= MAX_ATTEMPTS) {
          if (!toast.isActive("max-attempts-toast")) {
            toast.error(
              "You have reached the maximum number of attempts. Please wait before trying again.",
              { toastId: "max-attempts-toast" }
            );
          }
          setCooldownUntil(now + COOLDOWN_TIME); // Set cooldown period
          return 0; // Reset attempts after cooldown
        } else {
          if (!toast.isActive("error-toast")) {
            toast.error("Failed to send message. Please try again.", {
              toastId: "error-toast",
            });
          }
          return newAttempts;
        }
      });
    } finally {
      setIsSubmitting(false);
    }
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
                  disabled={isSubmitting || isSent} // Disable input if submitting or email sent
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  name="from_email"
                  className="w-full p-3 rounded-[5px] focus:outline-none"
                  placeholder="Enter your email"
                  required
                  disabled={isSubmitting || isSent} // Disable input if submitting or email sent
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  name="subject"
                  className="w-full p-3 rounded-[5px] focus:outline-none"
                  placeholder="Subject"
                  required
                  disabled={isSubmitting || isSent} // Disable input if submitting or email sent
                />
              </div>
              <div className="mb-5">
                <textarea
                  rows={3}
                  name="message"
                  className="w-full p-3 rounded-[5px] focus:outline-none"
                  placeholder="Write your message"
                  required
                  disabled={isSubmitting || isSent} // Disable textarea if submitting or email sent
                />
                <button
                  type="submit"
                  className="bg-txt mt-3 focus:outline-none text-white w-full p-3 rounded-[5px] text-center hover:bg-secondary ease-linear duration-150"
                  disabled={isSubmitting || isSent} // Disable button if submitting or email sent
                >
                  {isSubmitting ? (
                    <i class="ri-loader-line ri-spin"></i>
                  ) : isSent ? (
                    <i class="ri-mail-check-fill text-[21px]"></i>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}

export default Contact;

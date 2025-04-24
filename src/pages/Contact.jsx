import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { LuUser2, LuMail } from "react-icons/lu";
import { FaRegComment, FaCircleCheck } from "react-icons/fa6";
import { VscSend } from "react-icons/vsc";
import contact from "../assets/contacts-2.png";

const Contact = () => {
  // State for form data
  const [formData, setFormData] = useState({
    from_name: "",
    user_email: "",
    message: "",
  });

  // State for success message
  const [successMessage, setSuccessMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_g6jfg2a", "template_e2y43d2", e.target, {
        publicKey: "u4rznXrAYO3qKVJhV",
      })
      .then(
        () => {
          // Show success message and clear form data
          setSuccessMessage("Message sent successfully!");
          setFormData({
            from_name: "",
            user_email: "",
            message: "",
          });
          setTimeout(() => setSuccessMessage(""), 2000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div
      className="w-[100%] h-[88vh] py-4 flex dark:bg-clr-dark max-sm:flex-col max-lg:h-auto"
      id="Contact"
    >
      {/* Left Section: Form */}
      <div className="w-full h-full flex flex-col items-end justify-center py-6 px-4 max-sm:items-center relative">
        <h1 className="text-5xl text-center text-clr-red  pr-24 max-lg:text-3xl mb-8">
          Contact Me
        </h1>
        <form className="w-[90%] max-w-md space-y-8" onSubmit={sendEmail}>
          <div className="relative">
            <input
              type="text"
              id="from_name"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              required
              className="block w-full px-6 py-4 bg-transparent border-2 border-clr-red  text-clr-blue  placeholder-transparent focus:outline-none focus:ring-0 peer rounded-lg"
              placeholder="Your Name"
            />
            <label
              htmlFor="from_name"
              className="absolute flex items-center left-3 top-1 text-clr-red  duration-300 transform -translate-y-6 scale-75 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
            >
              <LuUser2 className="mr-1" />
              Your Name
            </label>
          </div>
          <div className="relative">
            <input
              type="email"
              id="user_email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              required
              className="block w-full px-6 py-4 bg-transparent border-2 border-clr-red  text-clr-blue  placeholder-transparent focus:outline-none focus:ring-0 peer rounded-lg"
              placeholder="Your Mail"
            />
            <label
              htmlFor="user_email"
              className="absolute flex items-center left-3 top-1 text-clr-red  duration-300 transform -translate-y-6 scale-75 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
            >
              <LuMail className="mr-1" />
              Your Mail
            </label>
          </div>
          <div className="relative">
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="block resize-none w-full px-6 py-4 bg-transparent border-2 border-clr-red  text-clr-blue  placeholder-transparent focus:outline-none focus:ring-0 peer rounded-lg"
              placeholder="Your Message"
            ></textarea>
            <label
              htmlFor="message"
              className="absolute flex items-center left-3 top-1 text-clr-red  duration-300 transform -translate-y-6 scale-75 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
            >
              <FaRegComment className="mr-1" />
              Your Message
            </label>
          </div>
          {successMessage && (
            <div className="text-clr-blue  flex items-center gap-2 absolute bottom-16 right-10 max-lg:bottom-20 max-lg:left-12 max-sm:left-7">
              <FaCircleCheck className="text-green-500" />
              {successMessage}
            </div>
          )}
          <button
            type="submit"
            className="mt-4 px-8 py-3 flex items-center gap-2 border-2 border-clr-red  text-clr-red  rounded-full tracking-wider hover:bg-white hover:text-clr-blue  transition-all duration-300 active:scale-95"
          >
            SUBMIT <VscSend />
          </button>
        </form>
      </div>

      {/* Right Section: Image */}
      <div className="w-full h-full flex justify-start items-center max-lg:h-auto max-sm:hidden">
        <div className="w-[600px] max-lg:w-[400px] max-sm:w-[80%]">
          <img src={contact} alt="contact" className="w-[100%]" />
        </div>
      </div>
    </div>
  );
};

export default Contact;

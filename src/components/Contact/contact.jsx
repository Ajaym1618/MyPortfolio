import React, { useState } from "react";
import axios from "axios";
import { Button, Form, Input } from "antd";

import contactImg from "../../assets/contactImg.png";
import "./contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const response = axios.post("http://localhost:3001/send-email", formData);
      console.log(response.data);
      console.log("Before clearing:", formData);
      // Optionally, show a success message to the user or redirect to a thank you page.
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      console.log("After clearing:", formData);
    } catch (error) {
      console.error("Error sending email:", error);
      // Handle the error and show a relevant message to the user.
    }
  };

  return (
    <div className="w-full h-[70vh] flex justify-center items-center contact" id="contact">
      <div className="w-[90%] h-[60vh] flex justify-center items-center border-2 border-[#008bc6] rounded-xl bg-[#c2ebfeb1] minContact">
        <div className="w-[40%] block pl-10 subContact">
          <h1 className="text-[#008bc6] text-[40px] inline-block w-[160px] font-medium border-b-2 border-[#008bc6] mb-6">
            Contact me
          </h1>
          <form onSubmit={handleSubmit} className="block">
            <div className="flex mb-4">
              <span>
                <label className="text-[17px] font-semibold block">
                  FirstName:
                </label>
                <input
                  placeholder="Enter Fname"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-[200px] flex flex-wrap text-[15px] p-2 mr-10  rounded border-[1px] border-neutral-400"
                />
              </span>
              <span>
                <label className=" block text-[17px] font-semibold">
                  LastName:
                </label>
                <input
                  placeholder="Enter Lname"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-[200px] flex flex-wrap text-[15px] p-2 rounded border-[1px] border-neutral-400"
                />
              </span>
            </div>
            <div>
              <label className="text-[17px] font-semibold block">Email:</label>
              <input
                placeholder="Enter email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-[300px] flex flex-wrap text-[15px] p-2  rounded border-[1px] border-neutral-400"
              />
            </div>
            <div>
              <label className="text-[17px] font-semibold block">
                Message:
              </label>
              <textarea
                placeholder="enter your message here"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-[300px] flex flex-wrap resize-none text-[15px] p-2   rounded border-[1px] border-neutral-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-3 mt-2 rounded-sm py-2 bg-[#008bc6] text-white"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="w-60% block ">
          <img src={contactImg} className="w-[600px] h-[400px] imgDiv" />
        </div>
      </div>
    </div>
  );
}

export default Contact;

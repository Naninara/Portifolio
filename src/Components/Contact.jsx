import axios from "axios";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
const SocialLinks = [
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/mavinnara",
  },
  {
    icon: <FaGithub />,
    link: "https://github.com/naninara",
  },
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/_.mavin__/",
  },
];
function Contact() {
  const [emailDetails, setemailDetails] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    if (
      !emailDetails.email ||
      !emailDetails.name ||
      !emailDetails.website ||
      !emailDetails.message
    ) {
      toast.error("Everything Must Be Filled In Form");
      return;
    }

    toast.promise(
      axios.post("https://zany-lime-scorpion-tux.cyclic.app/portifolioEmail", {
        ...emailDetails,
      }),
      {
        loading: "Sending Email...",
        success: "Email Sent Succesfully We Will Reach Out To You",
        error: "OOPS!! Something Went Wrong Try Again",
      }
    );
  }

  function handleChange(e) {
    setemailDetails((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }
  return (
    <div
      className="flex flex-col-reverse p-2 md:px-[80px] md:py-[60px] md:flex-row"
      name="contact"
    >
      <motion.div
        className="w-full flex flex-col gap-5 md:w-1/2"
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <form className="flex flex-col gap-8">
          <input
            placeholder="Your name"
            name="name"
            required
            onChange={(e) => {
              handleChange(e);
            }}
            className="w-full h-[56px] flex justify-center px-5 outline-1 border-2 border-black placeholder:font-sora"
          />
          <input
            placeholder="Email"
            name="email"
            required
            type="email"
            className="w-full h-[56px] flex justify-center px-5 outline-1 border-2 border-black placeholder:font-sora"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <input
            placeholder="Your Website | If You Dont Have One Write NA"
            name="website"
            required
            className="w-full h-[56px] flex justify-center px-5 outline-1 border-2 border-black placeholder:font-sora"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <input
            placeholder="Your Message"
            name="message"
            required
            className="w-full h-[100px] flex justify-center px-5 outline-1 border-2 border-black placeholder:font-sora"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <button
            className="h-[56px] px-[20px] py-[16px] bg-black flex items-center justify-center text-white font-sora gap-[8px] rounded-md font-[600]"
            onClick={(e) => handleSubmit(e)}
          >
            Get In Touch
          </button>
        </form>
        <div className="flex gap-4 md:gap-[30px]">
          {SocialLinks.map((ele) => {
            return (
              <a href={ele.link} target={"_blank"} rel="noreferrer">
                <div className="group w-auto h-auto flex items-center justify-center   border-black border-2 p-[16px] hover:bg-black duration-300 cursor-pointer">
                  <span className="text-black group-hover:text-white">
                    {ele.icon}
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </motion.div>
      <motion.div
        className="w-full flex flex-col p-2 gap-2 justify-center md:w-1/2 md:px-[80px]"
        initial={{ y: -100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-[45px] font-[800] font-sora">
          Let's Talk for <br /> Something Special
        </h1>

        <div>
          <h1
            className="text-[20px] md:text-[28px] font-[600] font-sora cursor-pointer"
            onClick={() => {
              window.location.href = "mail:nmvmanikanta@gmail.com";
            }}
          >
            Mavinnara031@gmail.com
          </h1>
        </div>

        <h1
          className="text-[20px] md:text-[28px] font-[600] font-sora cursor-pointer"
          onClick={() => {
            window.location.href = "tel:+918074187798";
          }}
        >
          9618634914
        </h1>
      </motion.div>
    </div>
  );
}

export default Contact;

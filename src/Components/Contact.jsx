import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/mavinnara",
  },
  {
    icon: <FaGithub />,
    link: "https://github.com/naninara",
  },
];
function Contact() {
  return (
    <div className="flex flex-col-reverse p-2 md:px-[80px] md:py-[60px] md:flex-row">
      <div className="w-full flex flex-col gap-5 md:w-1/2">
        <form className=" flex flex-col gap-8">
          <input
            placeholder="Your name"
            className="w-full h-[56px] flex justify-center px-5 outline-1 border-2 border-black placeholder:font-sora"
          />
          <input
            placeholder="Email"
            className="w-full h-[56px] flex justify-center px-5 outline-1 border-2 border-black placeholder:font-sora"
          />
          <input
            placeholder="Your Website "
            className="w-full h-[56px] flex justify-center px-5 outline-1 border-2 border-black placeholder:font-sora"
          />
          <input
            placeholder="Your Message"
            className="w-full h-[100px] flex justify-center px-5 outline-1 border-2 border-black placeholder:font-sora"
          />
          <button className="h-[56px] px-[20px] py-[16px] bg-black flex items-center justify-center text-white font-sora gap-[8px] rounded-md font-[600]">
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
      </div>
      <div className="w-full flex flex-col p-2 gap-2 justify-center md:w-1/2 md:px-[20px]">
        <h1 className="text-[45px] font-[800] font-sora">
          Let's Talk for <br /> Something Special
        </h1>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quos
            accusamus eaque iure quibusdam repudianda
          </p>
        </div>
        <div>
          <h1 className="text-[20px] md:text-[28px] font-[600] font-sora">
            Mavinnara031@gmail.com
          </h1>
        </div>
        <h1 className="text-[20px] md:text-[28px] font-[600] font-sora">
          9618634914
        </h1>
      </div>
    </div>
  );
}

export default Contact;

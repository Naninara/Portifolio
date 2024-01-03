import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Profile from "../Assets/Profile.png";
function HeroSection() {
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
  return (
    <div className="w-full h-auto flex flex-col-reverse md:flex-row">
      <div className="w-full flex items-center p-4 md:p-20 flex-col gap-6 md:w-1/2">
        <div>
          <h1 className=" text-[27px] md:text-[48px] font-sora">
            Hello i'm <span className="font-[800]">Mavin Nara</span>
          </h1>
          <h1 className=" text-[27px] md:text-[48px] font-sora">
            <span className="font-[800]">Full Stack</span> Developer
          </h1>
        </div>
        <div className="w-auto text-justify  md:px-0">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            nostrum tempore dolore, pariatur fugit ullam dolorem ad illum totam,
            distinctio possimus iste ea voluptatem quaerat necessitatibus fuga
            nisi quidem saepe.
          </p>
        </div>
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
      <div className="w-full flex items-center justify-center md:w-1/2">
        <img src={Profile} alt="profile" />
      </div>
    </div>
  );
}

export default HeroSection;

import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const SocialLinks = [
  {
    icon: <FaLinkedin size={40} />,
    link: "https://www.linkedin.com/in/mavinnara",
  },
  {
    icon: <FaGithub size={40} />,
    link: "https://github.com/naninara",
  },
  {
    icon: <FaLinkedin size={40} />,
    link: "https://www.linkedin.com/in/mavinnara",
  },
  {
    icon: <FaGithub size={40} />,
    link: "https://github.com/naninara",
  },
  {
    icon: <FaLinkedin size={40} />,
    link: "https://www.linkedin.com/in/mavinnara",
  },
  {
    icon: <FaGithub size={40} />,
    link: "https://github.com/naninara",
  },
  {
    icon: <FaLinkedin size={40} />,
    link: "https://www.linkedin.com/in/mavinnara",
  },
  {
    icon: <FaGithub size={40} />,
    link: "https://github.com/naninara",
  },
  {
    icon: <FaLinkedin size={40} />,
    link: "https://www.linkedin.com/in/mavinnara",
  },
  {
    icon: <FaGithub size={40} />,
    link: "https://github.com/naninara",
  },
];
function Skills() {
  return (
    <div className="p-0 flex flex-col md:py-[60px] md:px-[80px] ">
      <div className=" flex flex-col md:px-[32px] gap-[40px]">
        <h1 className="font-sora text-[48px] text-center">My Skills</h1>
        <div className="flex flex-wrap justify-center w-full gap-10 md:gap-32">
          {SocialLinks.map((ele) => {
            return (
              <a href={ele.link} target={"_blank"} rel="noreferrer">
                <div className="group  w-[auto] h-[auto] p-[24px] flex items-center justify-center  flex-col gap-[20px] border-black border-2 p-[16px] hover:bg-black duration-300 cursor-pointer">
                  <span className="text-black group-hover:text-white">
                    {ele.icon}
                  </span>
                  <h1 className="font-sora font-bold group-hover:text-white">
                    Linked In
                  </h1>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;

import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import profile from "../Assets/profile.png";
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
    <div className="p-0 flex flex-col-reverse  items-center flex-wrap justify-center md:flex-row md:px-[80px] md:py-[60px] ">
      {" "}
      <div className="flex flex-col py-[20px] w-[600px] gap-[30px]">
        <div className="flex flex-col font-sora text-[48px] gap-[16px]">
          {" "}
          <div className="flex text-[28px] font-sora  gap-[16px] md:text-[48px]">
            <h1 className=" font-normal ">Hello I'am </h1>
            <h1 className="font-extrabold">Mavin Nara</h1>
          </div>
          <div className="flex text-[28px] font-sora  gap-[16px] md:text-[48px]">
            <h1 className="font-extrabold">Full Stack</h1>
            <h1
              className=" font-normal text-white"
              style={{
                textShadow:
                  " 3px 3px 2px #000, -3px 3px 2px #000, -3px -3px 0 #000,3px -3px 0 #000",
              }}
            >
              Developer{" "}
            </h1>
          </div>
        </div>

        <div className="flex flex-wrap">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
            ipsum? Repellat, harum amet. Laudantium eveniet ex quae esse
            asperiores repellendus minus! Deserunt, odio voluptatibus saepe cum
            illo neque perspiciatis quia.
          </p>
        </div>
        <div className="flex gap-[30px]">
          {SocialLinks.map((ele) => {
            return (
              <a href={ele.link} target={"_blank"} rel="noreferrer">
                <div className="group w-[56px] h-[56px] flex items-center justify-center   border-black border-2 p-[16px] hover:bg-black duration-300 cursor-pointer">
                  <span className="text-black group-hover:text-white">
                    {ele.icon}
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
      <div className="w-[320px] h-[450px] flex items-center ">
        <img src={profile} alt="profile" />
      </div>
    </div>
  );
}

export default HeroSection;

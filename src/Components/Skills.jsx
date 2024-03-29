import React from "react";
import { FaJava, FaReact, FaNodeJs, FaPython } from "react-icons/fa";

import { motion } from "framer-motion";
import { TbBrandReactNative } from "react-icons/tb";

import {
  SiExpress,
  SiHtml5,
  SiGit,
  SiMui,
  SiHibernate,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiSpringboot,
  SiTailwindcss,
  SiCss3,
  SiRedux,
  SiNextdotjs,
} from "react-icons/si";
const SocialLinks = [
  {
    icon: <SiHtml5 size={40} />,
    name: "HTML",
  },
  {
    icon: <SiCss3 size={40} />,
    name: "CSS",
  },

  {
    icon: <SiJavascript size={40} />,
    name: "Java Script",
  },
  {
    icon: <FaReact size={40} />,
    name: "ReactJS",
  },
  {
    icon: <SiNextdotjs size={40} />,
    name: "Next.JS",
  },
  {
    icon: <TbBrandReactNative size={40} />,
    name: "React Native",
  },
  {
    icon: <SiRedux size={40} />,
    name: "Redux",
  },
  {
    icon: <FaNodeJs size={40} />,
    name: "NodeJS",
  },
  {
    icon: <SiExpress size={40} />,
    name: "Express JS",
  },

  {
    icon: <SiMui size={40} />,
    name: "Material Ui",
  },

  {
    icon: <SiMongodb size={40} />,
    name: "Mongo DB",
  },
  {
    icon: <SiTailwindcss size={40} />,
    name: "Tailwind",
  },

  {
    icon: <FaJava size={40} />,
    name: "Java",
  },
  {
    icon: <SiSpringboot size={40} />,
    name: "Spring Boot",
  },
  {
    icon: <SiHibernate size={40} />,
    name: "Hibernate",
  },
  {
    icon: <SiGit size={40} />,
    name: "Git",
  },
  {
    icon: <SiMysql size={40} />,
    name: "My Sql",
  },

  {
    icon: <FaPython size={40} />,
    name: "Python",
  },
];
function Skills() {
  return (
    <div
      className="p-0 flex flex-col mt-5 md:py-[60px] md:px-[80px] "
      name="skills"
    >
      <div className=" flex flex-col md:px-[32px] gap-[40px]">
        <motion.h1
          className="font-sora text-[48px] text-center"
          initial={{ y: -50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.2 }}
        >
          My Skills
        </motion.h1>
        <div className="flex flex-wrap justify-center items-center w-full gap-[7px] md:gap-20">
          {SocialLinks.map((ele) => {
            return (
              <motion.div
                layoutScroll
                className="group  w-[120px] h-[125px] flex items-center justify-center  flex-col gap-[20px] border-black border-2  hover:bg-black duration-300 hover:scale-105 cursor-pointer"
                initial={{ y: -50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-black group-hover:text-white">
                  {ele.icon}
                </span>
                <h1 className="font-sora font-bold group-hover:text-white">
                  {ele.name}
                </h1>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;

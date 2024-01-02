import React from "react";
import foodier from "../Assets/Foodier.png";
const projects = [
  {
    name: "Foodoer",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet aquaerat, inventore deleniti molestias dolorum, tenetur esse, dolore oluptatibus quia animi unde nostrum. Ipsa possimus excepturi reprehenderit, necessitatibus molestias voluptatem",
    link: "http://restaurentbymavin.netlify.app/",
  },
  {
    name: "Foodoer",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet aquaerat, inventore deleniti molestias dolorum, tenetur esse, dolore oluptatibus quia animi unde nostrum. Ipsa possimus excepturi reprehenderit, necessitatibus molestias voluptatem",
    link: "http://restaurentbymavin.netlify.app/",
  },
  {
    name: "Foodoer",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet aquaerat, inventore deleniti molestias dolorum, tenetur esse, dolore oluptatibus quia animi unde nostrum. Ipsa possimus excepturi reprehenderit, necessitatibus molestias voluptatem",
    link: "http://restaurentbymavin.netlify.app/",
  },
];
function Projects() {
  return (
    <div className=" h-auto w-full bg-black flex flex-col text-white font-sora md:py-[30px] md:px-[80px] mt-8 md:mt-0">
      <h1 className="text-[48px] text-center ">My Projects</h1>
      <div className="flex flex-col">
        {projects.map((ele, index) => {
          return (
            <div className="h-auto w-full  flex  bg-black flex-col md:flex-row font-sora">
              <div className="flex justify-center items-center p-10  w-full md:w-1/2">
                <img src={foodier} alt="project" />
              </div>
              <div className="flex p-4 justify-center  text-white flex-col gap-5 w-full md:w-1/2 overflow-auto">
                <h1 className="text-[30px] font-[800]">{index + 1}</h1>
                <h1 className="text-[20px] font-[700]">{ele.name}</h1>
                <p className="font-[200]">{ele.details}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;

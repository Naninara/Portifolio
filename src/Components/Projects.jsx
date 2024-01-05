import React from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";
import foodier from "../Assets/Foodier.png";
const projects = [
  {
    name: "Car Rental Website",
    TechStack: "ReactJS,NodeJs,ExpressJs,MongoDb,MaterialUI,Bootstarp",
    details:
      "Created A Car Rental Application With Three DashBoards(User,Owner,Admin) and able to make user register,signin and rent cars, owners can see rental cars and admin can modify the user data delete and edit see all sales",
    Livelink: "https://naninara.github.io/carRental/",
    GithubLink: "https://github.com/Naninara/CapstoneProject",
  },
  {
    name: "To Do App Using Spring Boot",
    TechStack:
      "ReactJS,Redux,TailwindCSS,SpringBoot,Spring Security,My Sql,Jpa(Hybernate)",
    details:
      "Created A To-Do App Using ReactJs and Backend Developed Using The Spring Boot and Secured the authentication and autherization using Spring Security and JPA for mapping with database(mysql)",
    GithubLink: "https://github.com/Naninara/RessoTech.git",
  },
  {
    name: "(Foodier) A Restaurent App",
    TechStack: "ReactJS,NodeJs,ExpressJs,MongoDB,MaterialUI,Redux,MongoDB",
    details:
      "Created A Restuarent Application with three two dashboards user and admin implemented role based authentication and user can order food and admin can see order details change status with mongodb as database",
    Livelink: "http://restaurentbymavin.netlify.app/",
    GithubLink: "https://github.com/Naninara/Restaurant.git",
  },

  {
    name: "Blog Website for PhotoGrapher",
    TechStack: "ReactJS,Tailwind,Cloudinary,EmailJS",
    details:
      "Created A Portifolio for photographer using reactJS and optimized the code by codesplitting with react lazy and image lazy loading",
    Livelink: "https://krishnaphotographywebsite.netlify.app/",
    GithubLink: "https://github.com/Naninara/KrishnaWebsite.git",
  },
  {
    name: "Generator Maintainance Website For College",
    TechStack: "ReactJS,NodeJs,ExpressJs,MongoDb,Bootstarp",
    details:
      "Developed A Generator Maintainance Website For College that digitilize all the records maintained by generator website and colleges able to raise complaint to cheif adminstrative office",
    GithubLink: "https://github.com/Naninara/KrishnaWebsite.git",
  },
];
function Projects() {
  return (
    <div className=" h-auto w-full bg-black flex flex-col text-white font-sora  md:py-[30px] md:px-[80px] mt-8 md:mt-0">
      <h1 className="text-[48px] text-center mt-5 ">My Projects</h1>
      <div className="flex flex-col">
        {projects.map((ele, index) => {
          return (
            <div className="h-auto w-full  flex  bg-black flex-col md:flex-row font-sora">
              <div className="flex justify-center items-center p-10  w-full md:w-1/2">
                <img src={foodier} alt="project" />
              </div>
              <div className="flex p-4 justify-center  break-words text-white flex-col gap-5 w-full md:w-1/2 overflow-auto">
                <h1 className="text-[30px] font-[800]">
                  {index + 1}. {ele.name}
                </h1>
                <div className="w-full">
                  <p className="text-[20px] font-[700]">
                    Tech Stack:- {ele.TechStack}
                  </p>
                </div>
                <p className="font-[200] text-justify">{ele.details}</p>
                <div className="flex gap-4">
                  <a href={ele.GithubLink}>
                    <FaGithub size={30} />
                  </a>
                  {ele.Livelink ? (
                    <a href={ele.Livelink}>
                      {" "}
                      <FaGlobe size={30} />{" "}
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;

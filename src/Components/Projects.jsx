import { motion } from "framer-motion";
import React from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";
import foodier from "../Assets/Foodier.png";
const projects = [
  {
    name: "Music App",
    TechStack: "NextJS,Redux,Spotify Api,Tailwind css,vercel",
    details:
      "Created a Music App that able to user to add songs to queue and search the songs from the web and play",
    Livelink: "https://music-player-mavin.vercel.app/",
    img: "https://res.cloudinary.com/dggryzgok/image/upload/v1704797039/portifolio/fxktwfxy0tx15b9qf2jh",
    GithubLink: "https://github.com/Naninara/music-player/tree/master",
    whatILearnt:
      "Server Side Rendering(SSR),NextJS, Using Client Components in NextJS, Integrating Redux in NextJS",
  },

  {
    name: "Uber Clone",
    TechStack: "React Native,Google Api,Tailwind,React native maps",
    details:
      "Created a uber clone with functionalities of choosing origin destination,calculating fares,updating maps",
    Livelink:
      "https://www.linkedin.com/posts/mavinnara_reactnative-tailwindcss-googleapis-activity-7161363570604044288-K7IW/?utm_source=share&utm_medium=member_desktop",
    img: "https://res.cloudinary.com/dggryzgok/image/upload/v1704797039/portifolio/fxktwfxy0tx15b9qf2jh",
    GithubLink: "https://github.com/Naninara/uberclone.git",
    whatILearnt:
      "Learnt About ReactNative,Expo Cli,Andriod Studio,Native Navigation,Integrating Google Api's",
  },

  {
    name: "(Foodier) A Restaurent App",
    TechStack:
      "ReactJS, NodeJs, ExpressJs, MongoDB, MaterialUI, Redux, MongoDB",
    details:
      "Created A Restuarent Application with three two dashboards user and admin implemented role based authentication and user can order food and admin can see order details change status with mongodb as database",
    Livelink: "http://restaurentbymavin.netlify.app/",
    img: foodier,
    GithubLink: "https://github.com/Naninara/Restaurant.git",
    whatILearnt:
      "Learnt About Persisting Redux State, JWT Token Rotation Using Redux, Role Based Authentication, React Styling Libraries(Material Ui)",
  },
  {
    name: "PortiFolio (FreeLance)",
    TechStack: "ReactJS ,Tailwind,Cloudinary,EmailJS",
    details:
      "Created A Portifolio for photographer (This is a freelance project) using reactJS and optimized the code by codesplitting with react lazy and image lazy loading",
    Livelink: "https://krishnaphotographywebsite.netlify.app/",
    img: "https://res.cloudinary.com/dggryzgok/image/upload/v1704797039/portifolio/dt0py5vx04igisgrbbks",
    GithubLink: "https://github.com/Naninara/KrishnaWebsite.git",
    whatILearnt:
      "Learnt About Code Splitting, Reducing Load Time, Image Lazy Loading,  serverless Emailing using emailJs",
  },

  {
    name: "To Do App Using Spring Boot",
    TechStack:
      "ReactJS ,Redux, TailwindCSS, SpringBoot, Spring Security, My Sql, Jpa(Hybernate)",
    img: "https://res.cloudinary.com/dggryzgok/image/upload/v1704797039/portifolio/ujvdtpfwuzh5po38e8iu.png",
    details:
      "Created A To-Do App Using ReactJs and Backend Developed Using The Spring Boot and Secured the authentication and autherization using Spring Security and JPA for mapping with database(mysql)",
    GithubLink: "https://github.com/Naninara/RessoTech.git",
    whatILearnt:
      "Spring Boot,CRUD Operation Using Spring Boot,Integrating Backend With mysql Databases Using JPA,Integrating Spring Security With Existing Application, Role Based Authentication Using Spring Security",
  },
  {
    name: "Car Rental Website",
    TechStack: "ReactJS, NodeJs, ExpressJs, MongoDb, MaterialUI, Bootstarp",
    img: "https://res.cloudinary.com/dggryzgok/image/upload/v1704797039/portifolio/aecml2mkvlve8390ljen.png",
    details:
      "Created A Car Rental Application With Three DashBoards(User,Owner,Admin) and able to make user register,signin and rent cars, owners can see rental cars and admin can modify the user data delete and edit see all sales",
    Livelink: "https://naninara.github.io/carRental/",
    GithubLink: "https://github.com/Naninara/CapstoneProject",
    whatILearnt:
      "Integrating Front End With Backend, CRUD Operations,Mongoose,MongoDB",
  },
  {
    name: "Wheather App",
    TechStack: "ReactJS, Bootstarp, Axios",
    img: "https://res.cloudinary.com/dggryzgok/image/upload/v1704797039/portifolio/aecml2mkvlve8390ljen.png",
    details:
      "Created Wheather Application That used to fetch data from the realtime wheather api ",
    Livelink: "https://wheatherappbymavin.netlify.app/",
    GithubLink: "https://github.com/Naninara/WheatherApp",
    whatILearnt:
      "Using Axios,Implementing Loading Animation in React,Integrating third party Api's",
  },
  {
    name: "Github Repo Search",
    TechStack: "HTML,CSS, Javascript",
    img: "https://res.cloudinary.com/dggryzgok/image/upload/v1704797039/portifolio/aecml2mkvlve8390ljen.png",
    details:
      "Created  Github Repo Search Application using pure HTML, CSS ,Javascript",
    Livelink: "https://fyle-mavin.netlify.app/",
    GithubLink: "https://github.com/Naninara/fyle",
    whatILearnt: "Manuplating DOM using JS,Responsive Design using Pure CSS",
  },
];
function Projects() {
  return (
    <div
      className=" h-auto w-full overflow-x-hidden bg-black flex flex-col text-white font-sora  py-[40px] md:px-[80px] mt-8 md:mt-0 "
      name="projects"
    >
      <h1 className="text-[48px] text-center mt-5 ">My Projects</h1>
      <div className="flex flex-col">
        {projects.map((ele, index) => {
          return (
            <div className="h-auto w-full items-center flex  bg-black flex-col md:flex-row font-sora mt-3 p-5">
              <motion.div
                className="flex flex-col h-auto justify-center items-center text-center md:p-10 gap-3 md:h-[200px]  w-full md:w-1/2"
                initial={{ x: -100 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-[30px] font-[800]">
                  {index + 1}. {ele.name}
                </h1>

                <p className="text-[15px] font-[700] ">{ele.TechStack}</p>
              </motion.div>
              <motion.div
                className="flex p-4  justify-center md:h-auto break-words text-white flex-col gap-5 w-full md:w-1/2 overflow-auto"
                initial={{ x: 100 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="font-[200] text-justify">
                  <p>Description:</p>
                  {ele.details}
                </p>
                <p className="font-[200] text-justify">
                  <p>What I Learnt:</p>

                  {ele?.whatILearnt}
                </p>
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
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;

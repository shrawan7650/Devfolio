import React from "react";
import { IoMdArrowDropleft } from "react-icons/io";
import { FcCheckmark } from "react-icons/fc";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Data = [
  {
    id: 1,
    title: "Book Store",
    year: "2022-2023",
    description:" Worked on a diverse range of projects including a Book Store application.  Responsibilities included developing both frontend and backend components, implementing various data manipulation techniques, and integrating  backend services with the frontend. Gained extensive knowledge in Full Stack Development, database management, and API integration."
  },
  {
    id: 2,
    title: "Netflix-Clone",
    year: "2023-2024",
    description:"Contributed to the development of a Netflix Clone, focusing  primarily on frontend design and functionality. Collaborated with a team to create responsive and visually appealing user interfaces, enhancing user experience and interaction. Gained insights into modern frontend development practices and technologies.",
  }
];

const Experience = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div
        id="experience"
        className="md:h-fit w-[100%] md:w-[97.5%] relative md:mt-36 mt-56   h-fit  md:ml-5"
      >
        <div className="md:ml-32">
          <h3
            data-aos="fade-left"
            className="text-black font-mono font-medium -mr-14"
          >
            EXPERIENCE
          </h3>
          <h1
            data-aos="fade-right"
            className="text-black font-serif  font-extrabold"
          >
            PROJECT EXPERIENCE
          </h1>
        </div>
        {/* main div */}
        <div data-aos="zoom-in" className="flex mt-6 gap-2  text-black">
          <div className="w-[15%] md:w-[10%]  "></div>

          <div className=" md:w-[100%] w-[90%] ml-5 flex flex-col ">
            {Data.map((item) => {
              return (
                <div key={item.id} className="bg-[#F2F3F7] mb-1 py-1 w-full px-3 md:h-36">
                  <div className="border flex justify-center items-center md:h-12 absolute h-8 w-8  bg-gray-600 md:left-4  left-2 rounded-full md:w-12">
                    <FcCheckmark className=" text-3xl" />
                  </div>
                  <div className=" border border-gray-400 flex flex-col  h-[25rem] md:h-28  absolute mt-[32px] md:mt-[50px] left-6 md:left-10 "></div>
                  <IoMdArrowDropleft className="text-4xl text-gray-600 absolute left-[45px]  md:left-[82px]" />
                  <div className="flex flex-col mt-1 md:flex-row gap-5 md:mb-0 mb-5">
                    <h1>{item.title}</h1>
                    <p>{item.year}</p>
                  </div>
                  <div>
                    {/* Project Experience Description */}
                  
                      <p className="md:mt-4">
                       {item.description}
                      </p>
                 
                    
                  
                    {/* Add more descriptions for other experiences as needed */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;

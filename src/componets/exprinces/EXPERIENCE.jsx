import React from "react";
import { IoMdArrowDropleft } from "react-icons/io";
import { FcCheckmark } from "react-icons/fc";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Data = [
  {
    id: 1,
    title: "Full Stack Developer",
    year: "2017-2018",
    description:
      "Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.",
  },
  {
    id: 2,
    title: "Front End Developer at Google Company",
    year: "2017-2018",
    description:
      "Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.",
  },
  {
    id: 3,
    title: "System Analyst",
    year: "2017-2018",
    description:
      "Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.",
  },
  {
    id: 4,
    title: "Creative Designer",
    year: "2017-2018",
    description:
      "Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.",
  },
  {
    id: 5,
    title: "UI/UX Designer at Envato",
    year: "2017-2018",
    description:
      "Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.",
  },
];

const Experience = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div
        id="experience"
        className="md:h-[52rem] w-[100%] md:w-[97.5%] relative mt-36  h-fit  md:ml-5"
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
            WORK EXPERIENCE
          </h1>
        </div>
        {/* main div */}
        <div data-aos="zoom-in" className="flex mt-6 gap-2  text-black">
          <div className="w-[15%] md:w-[10%]  "></div>

          <div className=" md:w-[100%] w-[90%] ml-5 flex flex-col ">
            {Data.map((item) => {
              return (
                <>
                  <div
                    key={item.id}
                    className="bg-[#F2F3F7] mb-1 py-1 w-full px-3   md:h-36"
                  >
                    <div className="border flex justify-center items-center md:h-12 absolute h-8 w-8  bg-gray-600 md:left-4  left-2 rounded-full md:w-12">
                      <FcCheckmark className=" text-3xl" />
                    </div>
                    <div className=" border border-gray-400 flex flex-col h-[284px]  md:h-28  absolute mt-[32px] md:mt-[50px] left-6 md:left-10 "></div>
                    <IoMdArrowDropleft className="text-4xl text-gray-600 absolute left-[45px]  md:left-[82px]" />
                    <div className="flex flex-col mt-1 md:flex-row gap-5 md:mb-0 mb-5">
                      <h1>{item.title}</h1>
                      <p>{item.year}</p>
                    </div>
                    <div>
                      <p className="md:mt-4">{item.description}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;

import React, { useState, useEffect } from "react";
import { RiSubtractFill } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiPlus } from "react-icons/fi";

const Education = () => {
  const [height1, setHeight1] = useState(false);
  const [height2, setHeight2] = useState(false);
  const [height3, setHeight3] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div
        id="education"
        data-aos="fade-left"
        className="w-full h-fit flex flex-col gap-y-2 md:ml-5 mt-24"
      >
        <p className="text-2xl px-14 mt-4 font-mono italic font-extrabold text-black">
          EDUCATION
        </p>

        {/* Career Objective */}
        <div className="w-full h-auto bg-slate-300 px-4 py-2 mt-5">
          <p className="text-black">
            Born and raised in Dhanbad Jharkhand, India, I am a passionate
            Computer Science Engineering student currently pursuing my degree at
            Chandigarh University, with a focus on Computer Science. I thrive on
            exploring the latest trends in technology, and my journey has led me
            to master an array of powerful tools and programming languages. From
            C++ and Python to React JS, Node JS, and beyond, I've honed my
            skills to tackle diverse challenges in the tech landscape.
          </p>
        </div>

        {/* Education Background */}
        {/* 1st Part */}
        <div className={`w-full h-12 mt-5 bg-slate-300`}>
          <span className="text-black relative top-2 md:px-6 px-2">
            {" "}
            Computer Science Engineer{" "}
          </span>
          {!height1 ? (
            <FiPlus
              onClick={() => setHeight1(!height1)}
              className="float-end md:text-3xl mr-2 md:mr-6 mt-2 text-black cursor-pointer"
            />
          ) : (
            <RiSubtractFill
              onClick={() => setHeight1(!height1)}
              className="float-end md:text-3xl mr-2 md:mr-6 mt-2 text-black cursor-pointer"
            />
          )}
          <div
            className={`w-full ${
              height1
                ? "md:h-[8rem] h-[11rem] md:max-w-[97.5%] mt-7 flex-col md:flex-row border border-gray-600 flex md:px-8 px-1 md:mt-8 duration-[2000ms] transition-all ease-in-out md:py-8"
                : "h-[0rem] hidden"
            } overflow-hidden`}
          >
            <ul className="w-[100%] text-black">
              <li className="w-[100%] px-2 text-wrap">Chandigarh University</li>
              <li className="w-[100%] px-2 text-wrap">Aug 2022 – Jul 2026</li>
              <li className="w-[100%] px-2 text-wrap">
                Computer Science Engineer
              </li>
            </ul>
          </div>
        </div>

        {/* 2nd Part */}
        <div
          className={`w-full h-12 bg-slate-300 ${
            height1 ? "md:mt-36 mt-[11rem]" : ""
          }`}
        >
          <span className="text-black relative top-2 md:px-6 px-2">
            {" "}
            12th, JAC{" "}
          </span>
          {!height2 ? (
            <FiPlus
              onClick={() => setHeight2(!height2)}
              className="float-end md:text-3xl mr-2 md:mr-6 mt-2 text-black cursor-pointer"
            />
          ) : (
            <RiSubtractFill
              onClick={() => setHeight2(!height2)}
              className="float-end md:text-3xl mr-2 md:mr-6 mt-2 text-black cursor-pointer"
            />
          )}
          <div
            className={`w-full ${
              height2
                ? "md:h-[8rem] h-[11rem] md:max-w-[97.5%] mt-7 flex-col md:flex-row border border-gray-600 flex md:px-8 px-1 md:mt-8 duration-[2000ms] transition-all ease-in-out md:py-8"
                : "h-[0rem] hidden"
            } overflow-hidden`}
          >
            <ul className="w-[100%] text-black">
              <li className="w-[100%] px-2 text-wrap">
                Pk Roy Memorial College
              </li>
              <li className="w-[100%] px-2 text-wrap">Mar 2020 – May 2021</li>
              <li className="w-[100%] px-2 text-wrap">Grade: 70%</li>
            </ul>
          </div>
        </div>

        {/* 3rd Part */}
        <div
          className={`w-full h-12 bg-slate-300 ${
            height2 ? "md:mt-36 mt-[11rem]" : ""
          } ${!height3 ? "" : "bg-blue-500 text-white"}`}
        >
          <span className="text-black relative top-2 md:px-6 px-2">
            {" "}
            10th, CBSE{" "}
          </span>
          {!height3 ? (
            <FiPlus
              onClick={() => setHeight3(!height3)}
              className="float-end md:text-3xl mr-2 md:mr-6 mt-2 text-black cursor-pointer"
            />
          ) : (
            <RiSubtractFill
              onClick={() => setHeight3(!height3)}
              className="float-end md:text-3xl mr-2 md:mr-6 mt-2 text-black cursor-pointer"
            />
          )}
          <div
            className={`w-full ${
              height3
                ? "md:h-[8rem] h-[11rem] md:max-w-[97.5%] mt-7 flex-col md:flex-row border border-gray-600 flex md:px-8 px-1 md:mt-8 duration-[2000ms] transition-all ease-in-out md:py-8"
                : "h-[0rem] hidden"
            } overflow-hidden`}
          >
            <ul className="w-[100%] text-black">
              <li className="w-[100%] px-2 text-wrap">Doon Public School</li>
              <li className="w-[100%] px-2 text-wrap">April 2018 – Mar 2019</li>
              <li className="w-[100%] px-2 text-wrap">Grade: 70%</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;

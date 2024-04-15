import React, { useState } from "react";

import { CiMenuFries } from "react-icons/ci";
import { FaLongArrowAltUp } from "react-icons/fa";
import { IoBulbOutline } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SkillBars from "../skilbar/SkillBars";

import Education from "../education/Education";
import About from "../about/About";
import Services from "../service/Services";
import Home from "../home/Home";
import { motion, useScroll } from "framer-motion";
import CounterPage from "../counterPage/CounterPage";
import Experience from "../exprinces/EXPERIENCE";
import MobileRespnsive from "../mobile/MobileRespnsive";
import { Work } from "../work/Work";
import Blog from "../blog/Blog";
import ContactPage from "../contact/Contact";

const Data = {
  data1: {
    id: "001",
    label: "A Really Big Number",
    number: "900000",
    duration: "2",
  },
  data2: {
    id: "002",
    label: "Ice Cream Flavors",
    number: "5321",
    duration: "2",
  },
  data3: {
    id: "003",
    label: "Customers Served",
    number: "100",
    duration: "2",
  },
  data4: {
    id: "004",
    label: "Complaints",
    number: "0",
    duration: "2",
  },
};

const LeftNavBar = () => {
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
  

      <div className="w-[100%]  relative scroll-smooth  overflow-x-hidden min-h-screen z-0">
        <motion.div
          className="progress-bar z-40  w-full md:ml-[26rem] "
          style={{ scaleX: scrollYProgress }}
        />
        {/* <div  className=" absolute right-0 top-0 text-5xl">
  <FaLongArrowAltUp />
  </div> */}
        {/* home page */}
        <Home />
        {/* About Page */}
        <About />
        <div
          className="grid  md:mb-5 mb-10  w-full md:w-[97.5%] md:grid-cols-4 gap-3  grid-cols-2 md:mx-5 h-40    "
          data-aos="flip-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          <div className="  flex flex-col  border-2 border-indigo-200 border-t-green-500 text-black justify-center rounded-tl-lg items-center gap-y-10">
            <p data-aos="zoom-in" className="text-red-700">
              Frontend Development
            </p>
          </div>
          <div className="  flex flex-col  text-black justify-center border-2 border-indigo-200 border-r-red-500 rounded-tr-lg items-center gap-y-10">
            <p data-aos="zoom-in-left" className="text-cyan-600">
              Backend Development
            </p>
          </div>
          <div className="  flex flex-col  text-black justify-center border-2 border-indigo-200 border-b-yellow-500 rounded-br-lg items-center gap-y-10">
            <p data-aos="zoom-in-right" className=" text-blue-700">
              Software
            </p>
          </div>
          <div className="  flex flex-col  text-black justify-center border-2 border-indigo-200 border-l-indigo-500  rounded-bl-lg items-center gap-y-10">
            <p data-aos="zoom-out" className=" text-neutral-600">
              Application
            </p>
          </div>
        </div>
        <div
          data-aos="fade-right"
          className=" md:ml-5 mb-20 w-full bg-yellow-500 text-white rounded-md mt-20  h-56 z-0 px-5 py-2  rounded-b md:h-56 text-2xl"
        >
          <p className="mt-3">
            {" "}
            I am happy to know you
            <br />
            that 5+ projects done sucessfully!
          </p>
          <button className=" bg-red-700 border  px-5  py-1  mt-4 ml-3 text-white ">
            Hire Me
          </button>
        </div>
        {/* Service  */}
        <Services />
        {/* count wala hai */}
        <CounterPage />
        {/* skills */}
        <SkillBars />
        {/* education */}
        <Education />

        {/* Experience */}
        <Experience />

        {/* recent work */}
        <Work />

        {/* blog page */}
        <Blog />

        {/* ContactPage */}
        <ContactPage />
      </div>
    </>
  );
};

export default LeftNavBar;

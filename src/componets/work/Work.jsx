import React from "react";
import logo1 from "../../assest/w1.png";
import logo2 from "../../assest/w2.png";
import logo3 from "../../assest/w3.png";
import logo4 from "../../assest/w4.png";
import logo5 from "../../assest/img-5.jpg";
import logo6 from "../../assest/img-6.jpg";
import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { IoMdShare } from "react-icons/io";
import { BiSolidLike } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Work = () => {
  const [counterOn, setCounter] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div id="work" className="w-full  mt-24 md:mt-10 text-black">
        <div className="flex gap-5 flex-col font-mono font-medium ml-5">
          <h3 data-aos="zoom-left">My Work</h3>
          <h1 data-aos="zoom-in-up">RECENT WORK</h1>
        </div>

        <div className="flex md:ml-5 gap-5 mb-5">
          <p
            data-aos="zoom-in-down"
            className="hover:underline text-black cursor-pointer italic"
          >
            Frontend Development
          </p>
          <p
            data-aos="zoom-in-right"
            className="hover:underline text-black cursor-pointer italic"
          >
            Backend Development
          </p>
        </div>

        <ScrollTrigger
          onEnter={() => setCounter(true)}
          onExit={() => setCounter(false)}
        >
          <div className="gap-2 relative grid   md:grid-cols-3 grid-cols-1 md:ml-5 w-full md:w-[97.5%]">
            {/* div 1 */}
            <div data-aos="fade-left" className="relative">
              <div className="flex absolute top-6 ml-5 gap-10">
                <h1>work 01</h1>
                <p>Book Store</p>
              </div>
              <div className="flex md:gap-6 items-center absolute bottom-2 md:ml-4 gap-16 ml-3">
                <IoMdShare />
                {counterOn && (
                  <p className="flex justify-center items-center gap-1">
                    Like:{" "}
                    <CountUp start={0} end={999} duration={3.75} delay={0} />
                    <BiSolidLike />
                  </p>
                )}
                {counterOn && (
                  <p className="flex justify-center items-center gap-1">
                    views:{" "}
                    <CountUp start={0} end={99} duration={3.75} delay={0} />
                    <FaEye />
                  </p>
                )}
              </div>

              <a href="https://bookish-bazaar-w7ym.vercel.app/">
                <img src={logo1} className="w-full md:w-80 h-56 rounded-md " />
              </a>
            </div>
            {/* div 2 */}
            <div data-aos="fade-left" className="relative">
              <div className="flex absolute top-6 ml-5 gap-10">
                <h1>work 02</h1>
                <p>NetFlix Clone</p>
              </div>
              <div className="flex md:gap-6 items-center absolute bottom-2 md:ml-4 gap-16 ml-3">
                <IoMdShare />
                {counterOn && (
                  <p className="flex justify-center items-center gap-1">
                    Like:{" "}
                    <CountUp start={0} end={999} duration={3.75} delay={0} />
                    <BiSolidLike />
                  </p>
                )}
                {counterOn && (
                  <p className="flex justify-center items-center gap-1">
                    views:{" "}
                    <CountUp start={0} end={99} duration={3.75} delay={0} />
                    <FaEye />
                  </p>
                )}
              </div>

              <a>
                <img src={logo2} className="w-full md:w-80 h-56 rounded-md" />
              </a>
            </div>
            {/* div 3 */}
            <div data-aos="fade-left" className="relative">
              <div className="flex absolute top-6 ml-5 gap-10">
                <h1>Work 3</h1>
                <p>Todo App</p>
              </div>
              <div className="flex md:gap-6 items-center absolute bottom-2 md:ml-4 gap-16 ml-3">
                <IoMdShare />
                {counterOn && (
                  <p className="flex justify-center items-center gap-1">
                    Like:{" "}
                    <CountUp start={0} end={999} duration={3.75} delay={0} />
                    <BiSolidLike />
                  </p>
                )}
                {counterOn && (
                  <p className="flex justify-center items-center gap-1">
                    views:{" "}
                    <CountUp start={0} end={99} duration={3.75} delay={0} />
                    <FaEye />
                  </p>
                )}
              </div>
              <a>
                <img src={logo3} className="w-full md:w-80 h-56 rounded-md" />
              </a>
            </div>
            {/* div 4 */}
            <div data-aos="fade-right" className="relative">
              <div className="flex absolute top-6 ml-5 gap-10">
                <h1>work 04</h1>
                <p>Music System</p>
              </div>
              <div className="flex md:gap-6 items-center absolute bottom-2 md:ml-4 gap-16 ml-3">
                <IoMdShare />
                {counterOn && (
                  <p className="flex justify-center items-center gap-1">
                    Like:{" "}
                    <CountUp start={0} end={999} duration={3.75} delay={0} />
                    <BiSolidLike />
                  </p>
                )}
                {counterOn && (
                  <p className="flex justify-center items-center gap-1">
                    views:{" "}
                    <CountUp start={0} end={99} duration={3.75} delay={0} />
                    <FaEye />
                  </p>
                )}
              </div>
              <a>
                <img src={logo4} className="w-full md:w-80 h-56 rounded-md" />
              </a>
            </div>
            {/* div 5 */}
            <div data-aos="fade-right" className="relative">
              <div className="flex absolute top-6 ml-5 gap-10">
                <h1>work 05</h1>
                <p>Website</p>
              </div>
              <div className="flex md:gap-6 items-center absolute bottom-2 md:ml-4 gap-16 ml-3">
                <IoMdShare />
                {counterOn && (
                  <p className="flex justify-center items-center gap-1">
                    Like:{" "}
                    <CountUp start={0} end={999} duration={3.75} delay={0} />
                    <BiSolidLike />
                  </p>
                )}
                {counterOn && (
                  <p className="flex justify-center items-center gap-1">
                    views:{" "}
                    <CountUp start={0} end={99} duration={3.75} delay={0} />
                    <FaEye />
                  </p>
                )}
              </div>
              <a>
                <img src={logo5} className="w-full md:w-80 h-56 rounded-md" />
              </a>
            </div>
            {/* div 6 */}
            <div data-aos="fade-right" className="relative">
              <div className="flex absolute top-6 ml-5 gap-10">
                <h1>work 06</h1>
                <p>Website</p>
              </div>
              <div className="flex md:gap-6 items-center absolute bottom-2 md:ml-4 gap-16 ml-3">
                <IoMdShare />
                {counterOn && (
                  <p className="flex justify-center items-center gap-1">
                    Like:{" "}
                    <CountUp start={0} end={999} duration={3.75} delay={0} />
                    <BiSolidLike />
                  </p>
                )}
                {counterOn && (
                  <p className="flex justify-center items-center gap-1">
                    views:{" "}
                    <CountUp start={0} end={99} duration={3.75} delay={0} />
                    <FaEye />
                  </p>
                )}
              </div>
              <a>
                <img src={logo6} className="w-full md:w-80 h-56 rounded-md cursor-pointer" />
              </a>
            </div>
          </div>
        </ScrollTrigger>
      </div>
    </>
  );
};

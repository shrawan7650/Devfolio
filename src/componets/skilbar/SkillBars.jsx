import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
function SkillBars() {
  const [counterOn, setCounter] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <ScrollTrigger
        onEnter={() => setCounter(true)}
        onExit={() => setCounter(false)}
      >
        <div id="skills" className=" md:ml-5 md:h-96 h-[32rem] w-full">
          <div className="md:ml-5 text-2xl flex- flex-col gap-y-3 text-black mb-6">
            <p
              data-aos="fade-up"
              className=" font-serif font-extrabold text-center text-cyan-300 italic"
            >
              {" "}
              MY SPECIALTY
            </p>
            <p data-aos="fade-left">MY SKILLS</p>
          </div>
          <p
            data-aos="fade-up-left"
            className=" text-wrap  italic font-medium md:w-[95%] text-blue-800 w-full md:ml-5"
          >
            The purpose of education is to make good human beings with skill and
            expertise... Enlightened human beings can be created by teachers.
          </p>

          <div className="container flex flex-col md:flex-row  w-full">
            <div data-aos="fade-right" className=" md:w-1/2 w-full ">
              <div className="skill-box">
                <span className="title ">HTML</span>
                <div className="skill-bar ">
                  <span className="skill-per html bg-red-600">
                    {counterOn && (
                      <span className="tooltip ">
                        <CountUp
                          start={0}
                          end={95}
                          duration={3.75}
                          delay={0}
                        ></CountUp>
                        %
                      </span>
                    )}
                  </span>
                </div>
              </div>
              <div className="skill-box">
                <span className="title">CSS</span>
                <div className="skill-bar">
                  <span className="skill-per css  bg-orange-500">
                    {counterOn && (
                      <span className="tooltip ">
                        <CountUp
                          start={0}
                          end={80}
                          duration={3.75}
                          delay={0}
                        ></CountUp>
                        %
                      </span>
                    )}
                  </span>
                </div>
              </div>
              <div className="skill-box">
                <span className="title">JavaScript</span>
                <div className="skill-bar">
                  <span className="skill-per javascript bg-teal-300">
                    {counterOn && (
                      <span className="tooltip ">
                        <CountUp
                          start={0}
                          end={75}
                          duration={3.75}
                          delay={0}
                        ></CountUp>
                        %
                      </span>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div data-aos="fade-left" className="md:w-1/2 md:mt-0 -mt-8">
              <div className="skill-box">
                <span className="title">NodeJS</span>
                <div className="skill-bar">
                  <span className="skill-per nodejs bg-cyan-400">
                    {counterOn && (
                      <span className="tooltip ">
                        <CountUp
                          start={0}
                          end={60}
                          duration={3.75}
                          delay={0}
                        ></CountUp>
                        %
                      </span>
                    )}
                  </span>
                </div>
              </div>
              <div className="skill-box">
                <span className="title">ReactJS</span>
                <div className="skill-bar">
                  <span className="skill-per reactjs bg-lime-400">
                    {counterOn && (
                      <span className="tooltip ">
                        <CountUp
                          start={0}
                          end={70}
                          duration={3.75}
                          delay={0}
                        ></CountUp>
                        %
                      </span>
                    )}
                  </span>
                </div>
              </div>
              <div className="skill-box">
                <span className="title">ExpressJS</span>
                <div className="skill-bar">
                  <span className="skill-per expressjs bg-violet-700">
                    {counterOn && (
                      <span className="tooltip ">
                        <CountUp
                          start={0}
                          end={85}
                          duration={3.75}
                          delay={0}
                        ></CountUp>
                        %
                      </span>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </>
  );
}

export default SkillBars;

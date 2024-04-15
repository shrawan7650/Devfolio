import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
const CounterPage = () => {
  const [counterOn, setCounter] = useState(false);
  return (
    <>
      <ScrollTrigger
        onEnter={() => setCounter(true)}
        onExit={() => setCounter(false)}
      >
        <div
          className=" flex w-full md:flex-row   mb-20   flex-col text-black font-serif font-extrabold justify-evenly items-center 
        md:text-2xl   rounded-md  md:ml-4 mdback"
        >
          <div>
            <div>
              {counterOn && (
                <h1>
                  <CountUp
                    start={0}
                    end={15}
                    duration={3.75}
                    delay={0}
                  ></CountUp>
                  +
                </h1>
              )}
              <p>CUPS OF<br/> COFFEE</p>
            </div>
          </div>


          <div>
            <div>
              {counterOn && (
                <h1>
                  <CountUp
                    start={0}
                    end={0}
                    duration={3.75}
                    delay={0}
                  ></CountUp>
                  +
                </h1>
              )}
              <p>CLIENTS</p>
            </div>
          </div>


          <div>
            <div>
              {counterOn && (
                <h1>
                  <CountUp
                    start={0}
                    end={2}
                    duration={3.75}
                    delay={0}
                  ></CountUp>
                  +
                </h1>
              )}
              <p>PARTNERS</p>
            </div>
          </div>


           <div>
            <div>
              {counterOn && (
                <h1>
                  <CountUp
                    start={0}
                    end={8}
                    duration={3.75}
                    delay={0}
                  ></CountUp>
                  +
                </h1>
              )}
              <p>PROJECTS</p>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </>
  );
};

export default CounterPage;

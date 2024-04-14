import React, { useState } from "react";
import { RiSubtractFill } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FiPlus } from "react-icons/fi";

const Education = () => {
  const [height1, setHeight1] = useState(false);
  const [height2, setHeight2] = useState(false);
  const [height3, setHeight3] = useState(false);
  const [height4, setHeight4] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div
        id="education"
        data-aos="fade-left"
        className="w-full  h-fit flex  flex-col gap-y-2     md:ml-5 mt-24"
      >
        <p className="text-2xl px-14 mt-4 font-mono italic font-extrabold text-black ">
          EDUCATION
        </p>

        {/* 1 part */}
        <div
          className={`w-full h-12 mt-5 bg-slate-300  ${
            !height1 ? "" : "bg-blue-500 text-white"
          } `}
        >
          <span className=" text-black   relative top-2 md:px-6 px-2">
            {" "}
            Computer Science Enginner{" "}
          </span>
          {!height1 ? (
            <FiPlus
              onClick={() => setHeight1(!height1)}
              className="float-end md:text-3xl mr-2 md:mr-6 mt-2 text-black"
            />
          ) : (
            <RiSubtractFill
              onClick={() => setHeight1(!height1)}
              className="float-end md:text-3xl mr-2 md:mr-6 mt-2 text-black"
            />
          )}
          <div
            className={`w-full ${
              height1
                ? "md:h-[8rem] h-[11rem] md:max-w-[97.5%] mt-7 flex-col md:flex-row border border-gray-600   flex md:px-8 px-1 md:mt-8 duration-[2000ms] transition-all ease-in-out md:py-8 "
                : "h-[0rem] hidden"
            } overflow-hidden`}
          >
            <li className="w-[100%] px-2 text-wrap text-black">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </li>
            <li className="w-[100%] px-2 text-wrap text-black">
              Separated they live in Bookmarksgrove right at the coast of the
              Semantics, a large language ocean.
            </li>
          </div>
        </div>

        {/* 2 part */}
        <div
          className={`w-full   h-12  bg-slate-300 ${
            height1 ? "md:mt-36 mt-[11rem] " : ""
          }   `}
        >
          <span className=" text-black  relative top-2  md:px-6 px-2">
            {" "}
            Computer Science Enginner{" "}
          </span>
          {!height2 ? (
            <FiPlus
              onClick={() => setHeight2(!height2)}
              className="float-end md:text-3xl mr-2 md:mr-6 mt-2 text-black"
            />
          ) : (
            <RiSubtractFill
              onClick={() => setHeight2(!height2)}
              className="float-end md:text-3xl mr-2 md:mr-6 mt-2 text-black"
            />
          )}
          <div
            className={`w-full mb-12  ${
              height2
                ? "md:h-[8rem]  h-[11rem] md:max-w-[97.5%]  mt-7 flex-col md:flex-row border border-gray-600  flex md:px-8 px-1 md:mt-8 duration-[2000ms] transition-all ease-in-out md:py-8 "
                : "h-[0rem] hidden"
            } overflow-hidden`}
          >
            <li className="w-[100%] px-2 text-wrap text-black">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </li>
            <li className="w-[100%] px-2 text-wrap text-black">
              Separated they live in Bookmarksgrove right at the coast of the
              Semantics, a large language ocean.
            </li>
          </div>
        </div>

        {/* 3 part */}
        {/* <div
          className={`w-full h-12  bg-slate-300 ${
            height2 ? "md:mt-36 mt-[11rem] " : ""
          }  ${!height3?"":"bg-blue-500 text-white"}  `}
        >
          
          <span className=" text-black   relative top-2  md:px-6 px-2">
            {" "}
            Computer Science Enginner{" "}
          </span>
          {!height3 ? (
            <FiPlus
              onClick={() => setHeight3(!height3)}
              className="float-end md:text-3xl mr-2 md:mr-6 mt-2 text-black"
            />
          ) : (
            <RiSubtractFill
              onClick={() => setHeight3(!height3)}
              className="float-end md:text-3xl mr-2 md:mr-6 mt-2 text-black"
            />
          )}
          <div
            className={`w-full ${
              height3
                ? "md:h-[8rem] h-[11rem] md:max-w-[97.5%]  mt-7 flex-col md:flex-row border  border-gray-600  flex md:px-8 px-1 md:mt-8 duration-[2000ms] transition-all ease-in-out md:py-8 "
                : "h-[0rem] hidden"
            } overflow-hidden`}
          >
             <li className="w-[100%] px-2 text-wrap text-black">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </li>
            <li className="w-[100%] px-2 text-wrap text-black">
              Separated they live in Bookmarksgrove right at the coast of the
              Semantics, a large language ocean.
            </li>
          </div>
        </div>

        {/* 4 part */}
        {/* <div
          className={`w-full h-12  bg-slate-300  ${
            height3 ? "md:mt-36 mt-[11rem] " : ""
          }   ${!height4?"":"bg-blue-500 text-white"} `}
        >
     
          <span className="  relative top-2 text-black  md:px-6 px-2">
            {" "}
            Computer Science Enginner{" "}
          </span>
          {!height4 ? (
            <FiPlus
              onClick={() => setHeight4(!height4)}
              className="float-end md:text-3xl mr-2 md:mr-6 mt-2 text-black"
            />
          ) : (
            <RiSubtractFill
              onClick={() => setHeight4(!height4)}
              className="float-end md:text-3xl mr-2 md:mr-6 mt-2 text-black"
            />
          )}
          <div
            className={`w-full ${
              height4
                ? "md:h-[8rem]h-[11rem] md:max-w-[97.5%]  mt-7 flex-col md:flex-row border  border-gray-00  flex md:px-8 px-1 md:mt-8 duration-[2000ms] transition-all ease-in-out md:py-8 "
                : "h-[0rem] hidden"
            } overflow-hidden`}
          >
            <li className="w-[100%] px-2 text-wrap text-black">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </li>
            <li className="w-[100%] px-2 text-wrap text-black">
              Separated they live in Bookmarksgrove right at the coast of the
              Semantics, a large language ocean.
            </li>
          </div>
        </div>  */}
      </div>
    </>
  );
};

export default Education;

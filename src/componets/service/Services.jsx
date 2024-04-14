import React from "react";
import { FcAcceptDatabase } from "react-icons/fc";
import { FaDatabase } from "react-icons/fa";
import { SiPeakdesign, SiBmcsoftware } from "react-icons/si";
import { MdOutlineSettingsApplications } from "react-icons/md";
import { FaServicestack } from "react-icons/fa6";
import { IoServer } from "react-icons/io5";
const Services = () => {
  return (
    <>
   <div id="service">
   <div className="  text-black md:ml-5 md:mb-10 flex flex-col gap-y-5">
        <p data-aos="fade-left" className="">
          {" "}
          WHAT I DO?
        </p>
        <p data-aos="fade-right" className="text-3xl">
          HERE ARE SOME OF MY EXPERTISE
        </p>
      </div>
      <div className=" flex flex-wrap mb-[5rem]   mt-3 md:mt-20  justify-between    md:mx-5  h-fit    ">
        <div
          data-aos="fade-up"
          className=" border-2 border-indigo-200 relative border-b-indigo-500 mb-6 md:mb-5 md:h-72  h-56  md:w-56 w-full flex flex-col   text-black justify-center  rounded-tl-lg items-center gap-y-8"
        >
          
          <FcAcceptDatabase className="float-end md:text-[80px] text-4xl -top-8 md:-top-14 absolute mr-2 mt-2 text-black" />
          <p>INNOVATIVE IDEAS</p>
          <p className="text-center">
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics
          </p>
        </div>

        <div
          data-aos="fade-up"
          className="  border-indigo-200 border-b-indigo-500 mb-6 md:mb-5 md:h-72 h-56 md:w-56  w-full flex flex-col  text-black justify-center border  rounded-tr-lg items-center gap-y-10"
        >
          
          <SiPeakdesign className="float-end md:text-[80px] text-4xl -top-8 md:-top-14 absolute mr-2 mt-2 text-black" />
          <p>Web Design</p>
          <p className="text-center">
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics
          </p>
        </div>
        <div
          data-aos="fade-up"
          className=" border-indigo-200 border-b-indigo-500 mb-6 md:mb-5 md:h-72 h-56   w-full md:w-56 flex flex-col  text-black justify-center border-2 rounded-br-lg items-center gap-y-10"
        >
          
          <SiBmcsoftware className="float-end md:text-[80px] text-4xl -top-8 md:-top-14 absolute mr-2 mt-2 text-black" />
          <p>Software</p>
          <p className="text-center">
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics
          </p>
        </div>
        <div
          data-aos="fade-up"
          className="  border-indigo-200 border-b-indigo-500  mb-6 md:mt-8 md:mb-5 md:h-72 h-56  md:w-56  w-full flex flex-col  text-black justify-center border-2  rounded-bl-lg items-center gap-y-10"
        >
          
          <MdOutlineSettingsApplications className="float-end md:text-[80px] text-4xl -top-8 md:-top-14 absolute mr-2 mt-2 text-black" />
          <p>GRAPHIC DESIGN</p>
          <p className="text-center">
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics
          </p>
        </div>
        <div
          data-aos="fade-up"
          className="  border-indigo-200 border-b-indigo-500 mb-6 md:mb-5 md:h-72 h-56  md:mt-8  w-full md:w-56 flex flex-col  text-black justify-center border-2  rounded-bl-lg items-center gap-y-10"
        >
          
          <FaServicestack className="float-end md:text-[80px] text-4xl -top-8 md:-top-14 absolute mr-2 mt-2 text-black" />
          <p>Application</p>
          <p className="text-center">
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics
          </p>
        </div>
        <div
          data-aos="fade-up"
          className="  border-indigo-200 border-b-indigo-500 mb-6 md:mb-5 md:h-72 h-56   md:mt-8  w-full md:w-56 flex flex-col  text-black justify-center border-2  rounded-bl-lg items-center gap-y-10"
        >
          
          <IoServer className="float-end md:text-[80px]  text-4xl -top-8 md:-top-14 absolute mr-2 mt-2 text-black" />
          <p>Application</p>
          <p className="text-center">
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics
          </p>
        </div>
      </div>
   </div>
    </>
  );
};

export default Services;

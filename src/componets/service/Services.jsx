import React from "react";
import { FcAcceptDatabase } from "react-icons/fc";
import { SiPeakdesign, SiBmcsoftware } from "react-icons/si";
import { MdOutlineSettingsApplications } from "react-icons/md";
import { FaServicestack } from "react-icons/fa6";
import { IoServer } from "react-icons/io5";

const Services = () => {
  return (
    <>
      <div id="service">
        <div className="text-black md:ml-5 md:mb-10 flex flex-col gap-y-5">
          <p data-aos="fade-left">WHAT I DO?</p>
          <p data-aos="fade-right" className="text-3xl">
            HERE ARE SOME OF MY EXPERTISE
          </p>
        </div>
        <div className="flex flex-wrap mb-[5rem] mt-3 md:mt-20 justify-between md:mx-5 h-fit">
          <div
            data-aos="fade-up"
            className="border-2 border-indigo-200 relative border-b-indigo-500 mb-6 md:mb-5 md:h-72 h-56 md:w-56 w-full flex flex-col text-black justify-center rounded-tl-lg items-center gap-y-8"
          >
            <FcAcceptDatabase className="float-end md:text-[80px] text-4xl -top-8 md:-top-14 absolute mr-2 mt-2 text-black" />
            <p>INNOVATIVE IDEAS</p>
            <p className="text-center">
              Harnessing creativity to devise unique solutions tailored to your needs.
            </p>
          </div>

          <div
            data-aos="fade-up"
            className="border-indigo-200 border-b-indigo-500 mb-6 md:mb-5 md:h-72 h-56 md:w-56 w-full flex flex-col text-black justify-center border rounded-tr-lg items-center gap-y-10"
          >
            <SiPeakdesign className="float-end md:text-[80px] text-4xl -top-8 md:-top-14 absolute mr-2 mt-2 text-black" />
            <p>Frontend Development</p>
            <p className="text-center">
              Crafting visually appealing and user-friendly interfaces to enhance your online presence.
            </p>
          </div>
          <div
            data-aos="fade-up"
            className="border-indigo-200 border-b-indigo-500 mb-6 md:mb-5 md:h-72 h-56 md:w-56 w-full flex flex-col text-black justify-center border-2 rounded-br-lg items-center gap-y-10"
          >
            <SiBmcsoftware className="float-end md:text-[80px] text-4xl -top-8 md:-top-14 absolute mr-2 mt-2 text-black" />
            <p>Backend Development</p>
            <p className="text-center">
              Building the logic and functionality behind the scenes to power your applications.
            </p>
          </div>
          <div
            data-aos="fade-up"
            className="border-indigo-200 border-b-indigo-500 mb-6 md:mt-8 md:mb-5 md:h-72 h-56 md:w-56 w-full flex flex-col text-black justify-center border-2 rounded-bl-lg items-center gap-y-10"
          >
            <MdOutlineSettingsApplications className="float-end md:text-[80px] text-4xl -top-8 md:-top-14 absolute mr-2 mt-2 text-black" />
            <p>UI/UX Design</p>
            <p className="text-center">
              Translating concepts into visually stunning and intuitive user interfaces for an exceptional user experience.
            </p>
          </div>
          <div
            data-aos="fade-up"
            className="border-indigo-200 border-b-indigo-500 mb-6 md:mb-5 md:h-72 h-56 md:mt-8 w-full md:w-56 flex flex-col text-black justify-center border-2 rounded-bl-lg items-center gap-y-10"
          >
            <FaServicestack className="float-end md:text-[80px] text-4xl -top-8 md:-top-14 absolute mr-2 mt-2 text-black" />
            <p>Application Development</p>
            <p className="text-center">
              Developing custom applications tailored to meet your specific business requirements.
            </p>
          </div>
          <div
            data-aos="fade-up"
            className="border-indigo-200 border-b-indigo-500 mb-6 md:mb-5 md:h-72 h-56 md:mt-8 w-full md:w-56 flex flex-col text-black justify-center border-2 rounded-bl-lg items-center gap-y-10"
          >
            <IoServer className="float-end md:text-[80px] text-4xl -top-8 md:-top-14 absolute mr-2 mt-2 text-black" />
            <p>Server Management</p>
            <p className="text-center">
              Ensuring seamless operation and optimization of server infrastructure to support your applications.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

import React from "react";
import { MdFileDownload } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-scroll";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div
        id="/"
        className="md:min-h-[48rem] relative h-[30rem] mb-20 md:mb-40 w-full back object-center"
      >
        <h1
          data-aos="zoom-in-down"
          className="text-black absolute top-48 text-2xl md:top-72 mb-2 md:text-6xl font-serif font-extrabold md:left-20"
        >
          I am<br></br>a Developer
        </h1>

        <div className="absolute top-72 md:text-2xl md:top-[28rem] font-serif font-extrabold md:left-20">
          <p className="md:w-96 w-44 text-wrap md:mt-0 mb-3 mt-3">
            100% html5 talwind template Mode
          </p>
          <p className="">
            by <a className="text-blue-400 cursor-pointer">shrawan.com</a>
          </p>
          <button className="px-10 gap-2 italic text-black hover:underline cursor-pointer md:mt-8 mt-2 py-2 flex justify-center items-center border border-gray-600">
            Download resume{" "}
            <span>
              <a
                href={require("../../assest/shrawan_Resume.pdf")}
                download="shrawan_Resume.pdf"
              >
                <MdFileDownload />
              </a>
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;

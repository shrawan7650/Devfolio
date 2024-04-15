import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";
import logo from "../../assest/Screenshot 2023-10-24 182036.png";
import { Link } from "react-scroll";
import * as Scroll from "react-scroll";
const NavBar = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <div className="text-blue-gray-900 w-[35%] z-50  bg-slate-600  h-screen  gap-x-10 overflow-x-auto   hidden md:block sticky top-0 left-0">
        {/* laptop responsive */}

        <div className="flex justify-center mt-5">
          <img src={logo} className=" rounded-full w-[170px]  h-[170px]"></img>
        </div>

        <div className="hidden md:block   w-full h-full">
          <h1 className=" text-center mt-8 font-serif font-bold text-4xl text-black">
            Shrawan
          </h1>
          <h1 className=" text-center mt-6 tracking-tight hover:tracking-wide uppercase">
            <a className="text-blue-600">full stack developer</a>
          </h1>
          <div className="  h-90 mt-5 flex flex-col uppercase text-black text-1xl justify-center items-center ">
            <Scroll.Link to="/" smooth duration={1000}>
              <p className=" font-serif font-medium  hover:border-b-2 hover:border-blue-700 cursor-pointer mb-2">
                Home
              </p>
            </Scroll.Link>

            <Scroll.Link to="about" smooth duration={1000}>
              <p className=" font-serif font-medium  hover:border-b-2 hover:border-blue-700 cursor-pointer mb-2">
                About
              </p>
            </Scroll.Link>

            <Scroll.Link to="service" smooth duration={1000}>
              <p className=" font-serif font-medium  hover:border-b-2 hover:border-blue-700 cursor-pointer mb-2">
                Services
              </p>
            </Scroll.Link>
            <Scroll.Link to="skills" smooth duration={1000}>
              <p className=" font-serif font-medium  hover:border-b-2 hover:border-blue-700 cursor-pointer mb-2">
                Skills
              </p>
            </Scroll.Link>

            <Scroll.Link to="education" smooth duration={1000}>
              <p className=" font-serif font-medium  hover:border-b-2 hover:border-blue-700 cursor-pointer mb-2">
                Education
              </p>
            </Scroll.Link>
            <Scroll.Link to="experience" smooth duration={1000}>
              <p className=" font-serif font-medium  hover:border-b-2 hover:border-blue-700 cursor-pointer mb-2">
                Experience
              </p>
            </Scroll.Link>
            <Scroll.Link to="work" smooth duration={1000}>
              <p className=" font-serif font-medium  hover:border-b-2 hover:border-blue-700 cursor-pointer mb-2">
                Work
              </p>
            </Scroll.Link>
            <Scroll.Link to="blog" smooth duration={1000}>
              <p className=" font-serif font-medium  hover:border-b-2 hover:border-blue-700 cursor-pointer mb-2">
                Blog
              </p>
            </Scroll.Link>
            <Scroll.Link to="contact" smooth duration={1000}>
              <p className=" font-serif font-medium  hover:border-b-2 hover:border-blue-700 cursor-pointer mb-2">
                Contact
              </p>
            </Scroll.Link>
          </div>

          <div className="text-center mt-5 max-w-64 ml-[2rem] ">
            <p className=" text-wrap">
              &copy; Copyright is a legal right that protects original content
              from being copied, shared, reproduced, printed, performed, or
              published without permission.
            </p>
          </div>
        </div>
      </div>

      {/* mobile responsive */}

      <IoIosMenu
        onClick={() => setShow(!show)}
        className="md:hidden block text-5xl z-10 fixed top-2 left-2  text-black font-bold  duration-1000      mr-1 "
      />

      <div
        className={`  fixed    top-0  min-h-screen   w-[100%] md:hidden block   left-0  bg-black text-white    z-50  ${
          show ? "left-[-100%]" : ""
        } duration-1000`}
      >
        <IoMdClose
          className="text-4xl text-white absolute duration-1000  right-2 top-8 "
          onClick={() => setShow(!show)}
        />

        <div className="flex justify-center mt-5">
          <img
            src={logo}
            className=" rounded-full  h-14 w-14 md:w-[170px]  md:h-[170px]"
          ></img>
        </div>

        <h1 className=" text-center navm mt-2 md:mt-8 font-serif font-bold hover:underline text-4xl text-white md:text-black">
          Shrawan
        </h1>
        <h1 className=" text-center navm   md:mt-6 tracking-tight hover:tracking-wide uppercase">
          <a className="text-blue-600 fnavm">full stack developer</a>
        </h1>

        <div className="  navm h-80 mt-2 md:mt-5 flex flex-col uppercase md:text-black text-1xl justify-center items-center ">
          <Scroll.Link
            to="/"
            smooth
            duration={1000}
            onClick={() => setShow(!show)}
            a
          >
            <p className=" font-serif navm font-medium  hover:border-b-2 hover:border-blue-700 cursor-pointer mb-2">
              Home
            </p>
          </Scroll.Link>

          <Scroll.Link
            to="about"
            smooth
            duration={1000}
            onClick={() => setShow(!show)}
          >
            <p className="   navm font-serif font-medium  hover:border-b-2 hover:border-blue-700 cursor-pointer mb-2">
              About
            </p>
          </Scroll.Link>

          <Scroll.Link
            to="service"
            smooth
            duration={1000}
            onClick={() => setShow(!show)}
          >
            <p className=" navm font-serif font-medium  hover:border-b-2 hover:border-blue-700 cursor-pointer mb-2">
              Services
            </p>
          </Scroll.Link>
          <Scroll.Link
            to="skills"
            smooth
            duration={1000}
            onClick={() => setShow(!show)}
          >
            <p className=" navm font-serif font-medium  hover:border-b-2 hover:border-blue-700 cursor-pointer mb-2">
              Skills
            </p>
          </Scroll.Link>

          <Scroll.Link
            to="education"
            smooth
            duration={1000}
            onClick={() => setShow(!show)}
          >
            <p className=" navm font-serif font-medium  hover:border-b-2 hover:border-blue-700 cursor-pointer mb-2">
              Education
            </p>
          </Scroll.Link>
          <Scroll.Link
            to="experience"
            smooth
            duration={1000}
            onClick={() => setShow(!show)}
          >
            <p className=" navm font-serif font-medium  hover:border-b-2 hover:border-blue-700 cursor-pointer mb-2">
              Experience
            </p>
          </Scroll.Link>
          <Scroll.Link
            to="work"
            smooth
            duration={1000}
            onClick={() => setShow(!show)}
          >
            <p className=" navm font-serif font-medium  hover:border-b-2 hover:border-blue-700 cursor-pointer mb-2">
              Work
            </p>
          </Scroll.Link>
          <Scroll.Link
            to="blog"
            smooth
            duration={1000}
            onClick={() => setShow(!show)}
          >
            <p className=" navm font-serif font-medium  hover:border-b-2 hover:border-blue-700 cursor-pointer mb-2">
              Blog
            </p>
          </Scroll.Link>
          <Scroll.Link
            to="contact"
            smooth
            duration={1000}
            onClick={() => setShow(!show)}
          >
            <p className=" navm font-serif font-medium  hover:border-b-2 hover:border-blue-700 cursor-pointer mb-2">
              Contact
            </p>
          </Scroll.Link>
        </div>

        <div className=" text-center md:mt-5 md:max-w-64 w-full  ">
          <p className=" navm text-wrap">
            &copy; Copyright is a legal right that protects original content
            from being copied, shared, reproduced, printed, performed, or
            published without permission.
          </p>
        </div>
      </div>
    </>
  );
};

export default NavBar;

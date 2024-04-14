import React from "react";
import logo1 from "../../assest/blog-1.jpg";
import logo2 from "../../assest/blog-2.jpg";
import logo3 from "../../assest/blog-3.jpg";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const data = [
  {
    date: "14 april 2018",
    title: "web design",
    num: "4",
    label: "RENOVATING NATIONAL GALLERY",
    des: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    img: logo1,
  },
  {
    date: "14 april 2018",
    title: "web design",
    num: "4",
    label: "RENOVATING NATIONAL GALLERY",
    des: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    img: logo2,
  },
  {
    date: "14 april 2018",
    title: "web design",
    num: "4",
    label: "RENOVATING NATIONAL GALLERY",
    des: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    img: logo3,
  },
];

const Blog = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="blog">
    <div className="ml-5 mt-10 mb-2 text-black">
      <p data-aos="fade-left" className=" font-mono  font-semibold ">Read</p>
      <h2 data-aos="zoom-left" className=" font-medium font-mono italic">RECENT BLOG</h2>
    </div>
      <div className=" md:ml-5 gap-2 mb-5 w-full h-96 grid grid-cols-1 md:grid-cols-3 md:w-[97.5%]">
        {data.map((item, index) => (
          <div data-aos="zoom-in" key={index} className=" mt-2">
            <img src={item.img} alt={item.title} className="  hover:scale-105 rounded-md w-96 h-52" />
            <div className="flex gap-2 ml-2 mt-2">
              <p>{item.date}</p>
              <hr className="border border-gray-600 h-4 mt-1" />
              <p>{item.title}</p>
              <hr className="border border-gray-600 h-4 mt-1" />
              <div className="flex justify-center items-center gap-1">
                {" "}
                <IoChatbubbleEllipsesOutline />
                <p>{item.num}</p>
              </div>
            </div>
            <div className="mt-2 mb-2 font-extralight text-black font-mono hover:underline ml-2">
              <p>{item.label}</p>
            </div>
            <div className=" font-serif font-thin w-64 ml-2 text-wrap">
              <p>{item.des}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

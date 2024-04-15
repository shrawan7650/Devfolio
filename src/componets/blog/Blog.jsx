import React from "react";
import logo1 from "../../assest/redux.png";
import logo2 from "../../assest/MVC3.png";
import logo3 from "../../assest/async.jpg";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const data = [
  {
    date: "10 April 2024",
    title: "State management with Redux",
    num: "4",
    label: "Redux",
    des: "State management is essentially a way to facilitate the communication and sharing of data across components. It creates a tangible data structure to represent the state of your app that you can read from and write to. That way, you can see otherwise invisible states while you’re working with them.",
    img: logo1,
  },
  {
    date: "18 March 2024",
    title: "Data Controller",
    num: "4",
    label: "The Model View Controller Pattern ",
    des: "The MVC pattern helps you break up the frontend and backend code into separate components. This way, it's much easier to manage and make changes to either side without them interfering with each other.",
    img: logo2,
  },
  {
    date: "1 Feb 2024",
    title: "How Asynchronous JavaScript Works",
    num: "4",
    label: "Asynchronous JavaScript",
    des: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    img: logo3,
  },
];

const Blog = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="blog h-56  border  ">
    <div className="ml-5 mt-10 mb-2 text-black">
      <p data-aos="fade-left" className=" font-mono  font-semibold ">Read</p>
      <h2 data-aos="zoom-left" className=" font-medium font-mono italic">RECENT BLOG</h2>
    </div>
      <div className=" md:ml-5 gap-2 mb-5  w-full h-fit grid grid-cols-1 md:grid-cols-3 md:w-[97.5%]">
        {data.map((item, index) => (
          <div data-aos="zoom-in" key={index} className=" mt-2 text-wrap">
            <img src={item.img} alt={item.title} className="  hover:scale-105 rounded-md w-96 h-52" />
            <div className="flex  gap-1 ml-2 mt-2">
              <p>{item.date}</p>
              <hr className="border border-gray-600 h-10 mt-1" />
              <p>{item.title}</p>
              <hr className="border border-gray-600 h-10 mt-1" />
              <div className="flex justify-center items-center ">
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

import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div
        id="about"
        className=" flex flex-col md:gap-y-3  px-1 md:px-4  py-4 w-full"
      >
        <p data-aos="fade-left" className="">
          About US
        </p>
        <h2
          data-aos="fade-right"
          className=" uppercase mb-5 font-mono font-bold text-black text-2xl"
        >
          Who AM i{" "}
        </h2>
        <p className="w-full">
          <p
            data-aos="fade-up"
            className=" text-black font-serif font-semibold"
          >
            Hi there! I'm Shrawan Kumar Rai, a passionate Full Satck Developer
            with a love for turning ideas into captivating digital experiences.
            With a background in Computer Science,{" "}
            <span className="text-red-500 hover:underline">
              {" "}
              I bring 2 years of expertise in React Js.
            </span>{" "}
            From crafting elegant code to designing user-centric interfaces, I
            thrive on creating solutions that make a meaningful impact. When I'm
            not coding, you can find me exploring new technologies, diving into
            creative projects, or enjoying the great outdoors. Let's collaborate
            and bring your vision to life! Get in touch and let's make something
            awesome together.
          </p>
        </p>
        <p
          data-aos="zoom-in-down"
          className="mb-5 text-2xl text-black font-thin italic"
        >
          "Success is not the key to happiness. Happiness is the key to success.
          If you love what you are doing, you will be successful."
        </p>
      </div>
    </>
  );
};

export default About;

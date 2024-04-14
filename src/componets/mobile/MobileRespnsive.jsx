import React, { useState } from 'react'

import { IoMdClose } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";
const MobileRespnsive = () => {
  const [show, setShow] =  useState(true);
  return (
    <>
      <IoIosMenu
        onClick={() => setShow(!show)}
        className="md:hidden block text-5xl z-10 fixed top-2 left-2     text-black   mr-1 "
      />

      <div
        className={` md:hidden block   z-50 ${
          show ? "left-[-100%]" : ""
        } duration-1000`} >
 <IoMdClose
          className="text-3xl absolute  right-0"
          onClick={() => setShow(!show)}
        />

        {/* <li>12 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, quis. Natus placeat ducimus culpa! Excepturi nihil doloremque temporibus veritatis reprehenderit. Commodi praesentium deleniti eum dolor totam laborum quo hic eaque.</li>
        <li>12 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, quis. Natus placeat ducimus culpa! Excepturi nihil doloremque temporibus veritatis reprehenderit. Commodi praesentium deleniti eum dolor totam laborum quo hic eaque.</li>
        <li>12 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, quis. Natus placeat ducimus culpa! Excepturi nihil doloremque temporibus veritatis reprehenderit. Commodi praesentium deleniti eum dolor totam laborum quo hic eaque.</li>
        <li>12 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, quis. Natus placeat ducimus culpa! Excepturi nihil doloremque temporibus veritatis reprehenderit. Commodi praesentium deleniti eum dolor totam laborum quo hic eaque.</li>
        <li>12 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, quis. Natus placeat ducimus culpa! Excepturi nihil doloremque temporibus veritatis reprehenderit. Commodi praesentium deleniti eum dolor totam laborum quo hic eaque.</li>
        <li>12 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, quis. Natus placeat ducimus culpa! Excepturi nihil doloremque temporibus veritatis reprehenderit. Commodi praesentium deleniti eum dolor totam laborum quo hic eaque.</li>
        <li>12 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, quis. Natus placeat ducimus culpa! Excepturi nihil doloremque temporibus veritatis reprehenderit. Commodi praesentium deleniti eum dolor totam laborum quo hic eaque.</li>
        <li>12 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, quis. Natus placeat ducimus culpa! Excepturi nihil doloremque temporibus veritatis reprehenderit. Commodi praesentium deleniti eum dolor totam laborum quo hic eaque.</li> */}
      </div></>
  )
}

export default MobileRespnsive
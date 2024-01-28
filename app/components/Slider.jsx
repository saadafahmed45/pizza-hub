"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    img: "/slide1.png",
  },
  {
    id: 2,
    title: "we deliver your order  wherever you in NY",
    img: "/slide2.png",
  },
  {
    id: 2,
    title: "the best pizza to share with your family",
    img: "/slide3.jpg",
  },
];
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),

      2000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)">
      {/* TEXT CONTAINER */}
      <div className="h-1/2 flex items-center flex-col justify-center gap-8 text-red-500 font-bold">
        <h1 className="text-4xl text-center uppercase p-4 md:p-10 md:text-6xl xl:7xl ">
          {data[currentSlide].title}
        </h1>
        <button className="bg-red-500 text-white py-4 px-8 ">Order Now</button>
      </div>
      {/* Image CONTAINER */}
      <div className="h-1/2 w-full relative">
        <Image
          src={data[currentSlide].img}
          alt=""
          fill
          className="object-cover"
        />
          </div> 
          <div> 
          </div>
    </div>
  );
};

export default Slider;
